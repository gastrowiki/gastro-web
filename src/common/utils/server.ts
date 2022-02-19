type MethodType = "GET" | "POST" | "PUT" | "DELETE";

type HeaderType = { [key: string]: string | string[] | undefined };

const serverRequest = async <T>(
  method: MethodType,
  path: string,
  body?: any,
  headers?: HeaderType,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1${path}`,
    {
      body: JSON.stringify(body),
      method,
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (response.ok) {
    return response.json() as Promise<T>;
  }
  const json = await response.json();
  throw json as Promise<Error>;
};

export default {
  GET: <T>(path: string, headers?: HeaderType) => serverRequest<T>("GET", path, undefined, headers),
  POST: <T>(path: string, body: any, headers?: HeaderType) => serverRequest<T>("POST", path, body, headers),
  PUT: <T>(path: string, body: any, headers?: HeaderType) => serverRequest<T>("PUT", path, body, headers),
  DELETE: (path: string) => serverRequest<boolean>("DELETE", path),
};
