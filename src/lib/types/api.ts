export enum HttpMethod {
    POST = 'post',
    GET = 'get',
    PATCH = 'patch',
    PUT = 'put',
    DELETE = 'delete'
}

export type OnSuccess<Response> = (response: Response) => void
export type OnError = () => void