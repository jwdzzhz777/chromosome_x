/** nodejs 没有 fetch */
import 'isomorphic-unfetch';

export default async (input: RequestInfo, init?: RequestInit): Promise<any> => {
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
    let toData = (r: any) => r.data;
    let errDispose = (err: any) => {
        /** 客户端服务端不同处理 */
        if (process.browser) console.log(err);
        /** 网络错误 */
        else if (err.code === 'ECONNREFUSED') throw new Error('网络错误');
        else return err;
    }
    return fetch(input, init).then(toError).then(toJson).then(toData).catch(errDispose);
};
