import useFetch from './useFetch';

function useQuickFetch<Req, Resp>(
    endpoint: string,
    body: Req,
    method: string = 'POST',
): ReturnType<typeof useFetch<Req, Resp>>{
    return useFetch<Req, Resp>(`http://localhost:13333${endpoint}`, body, method);
}

export default useQuickFetch;