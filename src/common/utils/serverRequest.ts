import { GetServerSidePropsContext } from "next";

type MethodType = "GET" | "POST" | "PUT" | "DELETE";

type HeaderType = { [key: string]: string };

interface IServerRequestProps {
  method: MethodType;
  path: string;
  body?: any;
  headers?: HeaderType;
}

const request = async <T>({
  method,
  path,
  body,
  headers,
}: IServerRequestProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1${path}`,
    {
      body: JSON.stringify(body),
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
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

export const serverRequest = {
  GET: <T>(path: string) => request<T>({ method: "GET", path }),
  POST: <T>(path: string, body: any) =>
    request<T>({ method: "POST", path, body }),
  PUT: <T>(path: string, body: any) =>
    request<T>({ method: "PUT", path, body }),
  DELETE: (path: string) => request<boolean>({ method: "DELETE", path }),
};

export const serverRequestSSR = (ctx: GetServerSidePropsContext) => {
  const headers: HeaderType = {};
  if (ctx.req) {
    headers.authorization = `Bearer ${ctx.req.cookies.Authorization}`;
  }
  return {
    GET: <T>(path: string) => request<T>({ method: "GET", path, headers }),
    POST: <T>(path: string, body: any) =>
      request<T>({ method: "POST", path, body, headers }),
    PUT: <T>(path: string, body: any) =>
      request<T>({ method: "PUT", path, body, headers }),
    DELETE: (path: string) =>
      request<boolean>({ method: "DELETE", path, headers }),
  };
};
