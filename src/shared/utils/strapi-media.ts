import type {
  StrapiMedia,
  StrapiMediaSize,
} from "@/shared/types/strapi-response";

export const getStrapiMediaUrl = (
  url: string | null | undefined,
): string | null => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) return url;

  const origin = apiUrl.replace(/\/api\/?$/, "");
  return `${origin}${url.startsWith("/") ? url : `/${url}`}`;
};

const DEFAULT_SIZE_FALLBACK: StrapiMediaSize[] = [
  "large",
  "medium",
  "small",
  "thumbnail",
];

/**
 * Picks a Strapi image format URL (same idea as Skratch's ResponsivePicture),
 * falling back through preferred sizes and finally to the original `url`.
 */
export const getStrapiImageUrl = (
  image: StrapiMedia | null | undefined,
  preferred: StrapiMediaSize | StrapiMediaSize[] = DEFAULT_SIZE_FALLBACK,
): string | null => {
  if (!image) return null;

  const sizes = Array.isArray(preferred) ? preferred : [preferred];

  for (const size of sizes) {
    const formatUrl = image.formats?.[size]?.url;
    if (formatUrl) return getStrapiMediaUrl(formatUrl);
  }

  for (const size of DEFAULT_SIZE_FALLBACK) {
    if (sizes.includes(size)) continue;
    const formatUrl = image.formats?.[size]?.url;
    if (formatUrl) return getStrapiMediaUrl(formatUrl);
  }

  return getStrapiMediaUrl(image.url);
};

/** Fields to request on media relations so formats are available. */
export const strapiMediaFields = [
  "url",
  "alternativeText",
  "width",
  "height",
  "formats",
] as const;
