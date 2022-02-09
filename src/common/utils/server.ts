type MethodType = "GET" | "POST" | "PUT" | "DELETE";

const serverRequest = async <T>(method: MethodType, path: string, body?: any) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1${path}`, {
    body: JSON.stringify(body),
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json() as Promise<T>);

export default {
  GET: <T>(path: string) => serverRequest<T>("GET", path),
  POST: <T>(path: string, body: any) => serverRequest<T>("POST", path, body),
  PUT: <T>(path: string, body: any) => serverRequest<T>("PUT", path, body),
  DELETE: (path: string) => serverRequest<boolean>("DELETE", path),
};
