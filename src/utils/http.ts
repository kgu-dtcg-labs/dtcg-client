import { fetch, type Response, type FetchOptions } from '@tauri-apps/api/http';

interface RequestParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  options?: FetchOptions;
}

async function request<T>({
  url,
  options,
  method,
}: RequestParams): Promise<Response<T>> {
  const response = await fetch(url, {
    ...options,
    method: method,
  });
  if (!response.ok) {
    throw new Error(`Status: ${response.status}`);
  }
  return response as Response<T>;
}

export const http = {
  get: <T = unknown>(
    url: string,
    options?: FetchOptions,
  ): Promise<Response<T>> => {
    return request<T>({ method: 'GET', url, options });
  },
  post: <T = unknown>(
    url: string,
    options?: FetchOptions,
  ): Promise<Response<T>> => {
    return request<T>({ method: 'POST', url, options });
  },
  put: <T = unknown>(
    url: string,
    options?: FetchOptions,
  ): Promise<Response<T>> => {
    return request<T>({ method: 'PUT', url, options });
  },
  delete: <T = unknown>(
    url: string,
    options?: FetchOptions,
  ): Promise<Response<T>> => {
    return request<T>({ method: 'DELETE', url, options });
  },
};
