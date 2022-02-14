export interface IRequestError {
  message?: string;
  fieldErrors?: {
    [key: string]: string;
  };
}

