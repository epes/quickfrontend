// @generated
import useFetch from '@/hooks/useFetch';
const API_HOST = import.meta.env.VITE_BACKEND_API_HOST;

type GetHealthRequest = undefined;
type GetHealthResponse = {
    ok: boolean;
    uptime: number;
}
export function useGetHealth(): ReturnType<typeof useFetch<GetHealthRequest, GetHealthResponse>>{
    return useFetch<GetHealthRequest, GetHealthResponse>(
        `${API_HOST}/health`,
        undefined,
        "GET",
    )
}

type PostGreetRequest = {
    name: string | undefined;
};
type PostGreetResponse = {
    message: string;
};
export function usePostGreet(req: PostGreetRequest): ReturnType<typeof useFetch<PostGreetRequest, PostGreetResponse>>{
    return useFetch<PostGreetRequest, PostGreetResponse>(
        `${API_HOST}/api/greet`,
        req,
        "POST",
    )
}
