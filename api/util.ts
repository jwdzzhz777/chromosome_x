/** nodejs 没有 fetch */
import 'isomorphic-unfetch';

export default async (input: RequestInfo, init?: RequestInit): Promise<any> => {
    let toJson = (r: any) => r.json();
    let toData = (r: any) => r.data;
    /** 客户端服务端不同处理 */
    if (process.browser) {
        return fetch(input, init).then(toJson).then(toData).catch(err => console.log(err));
    } else {
        return fetch(input, init).then(toJson).then(toData).catch(err => {
            /** 网络错误 */
            if (err.code === 'ECONNREFUSED') {
                throw new Error('网络错误');
            } else return err;
        });
    }
};
