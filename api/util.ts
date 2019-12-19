/** nodejs 没有 fetch */
import 'isomorphic-unfetch';

export default async (input: RequestInfo, init?: RequestInit): Promise<any[]> => {
    init = Object.assign({}, {
        headers: {
            'Content-Type': 'application/json'
        }
    }, init);
    let toError = (r: any) => {
        if (r.ok) return r;
        else return r.json().then(r => Promise.reject(r));
    }
    let toJson = (r: any) => r.json();
    let toData = (r: any) => [r.data];
    let errDispose = (err: any) => {
        /** 客户端服务端不同处理 */
        if (process.browser) {
            /** 自动报错 */
            return [null, err];
        } else {
            /** 网络错误 */
            if (err.code === 'ECONNREFUSED') return [null, {message: '网络错误'}];
            return [null, err];
        };
    }
    return fetch(input, init).then(toError).then(toJson).then(toData).catch(errDispose);
};
