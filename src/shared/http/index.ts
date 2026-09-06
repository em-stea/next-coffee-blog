type FetchResponse<T> = {
  data: T;
};

const requireEnv = (name: string) => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
};

const buildUrl = (path: string) => {
  const baseUrl = requireEnv("NEXT_PUBLIC_API_URL");

  // A base without a trailing slash makes `new URL` drop its last segment,
  // which would strip the "/api" prefix off every request.
  return new URL(path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
};

const parseJsonResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    const hint =
      response.status === 401
        ? " Check STRAPI_API_TOKEN in next-blog/.env (create a new token in Strapi Admin → Settings → API Tokens)."
        : "";
    throw new Error(
      (errorBody || `API error: ${response.status}`) + hint,
    );
  }

  return response.json() as Promise<T>;
};

type RequestOptions = {
  // Strapi only returns the content source maps with this header: they are what the live
  // preview uses to know which field each rendered text belongs to.
  encodeSourceMaps?: boolean;
};

export const httpSecure = {
  get: async <T>(
    path: string,
    { encodeSourceMaps }: RequestOptions = {},
  ): Promise<FetchResponse<T>> => {
    const url = buildUrl(path);

    let response: Response;
    try {
      response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${requireEnv("STRAPI_API_TOKEN")}`,
          ...(encodeSourceMaps && { "strapi-encode-source-maps": "true" }),
        },
      });
    } catch (error) {
      const cause =
        error instanceof Error && "cause" in error
          ? (error as Error & { cause?: unknown }).cause
          : undefined;
      const detail =
        cause instanceof Error
          ? cause.message
          : error instanceof Error
            ? error.message
            : String(error);

      throw new Error(
        `Failed to reach Strapi at ${url.origin}. Is it running? (${detail})`,
        { cause: error },
      );
    }

    return { data: await parseJsonResponse<T>(response) };
  },
};
