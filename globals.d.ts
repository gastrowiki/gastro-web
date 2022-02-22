declare module "http" {
  interface ServerResponse {
    locals: {
      user?: {
        sub: string;
        email: string;
        given_name: string;
        family_name: string;
        languages: string[];
        username: string;
        picture?: string;
      };
    };
  }
}
