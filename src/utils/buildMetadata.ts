import { MetadataFieldGroup } from "@/types/payload-types";
import { Author, ReferrerEnum } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export function buildMetadata(
  input?: MetadataFieldGroup,
  locale?: string
) {
  try {
    if (!input) throw new Error("Requires an input object.");

    const result = {
      title: input?.title,
      description: input?.description,
      authors: input?.authors?.map((a) => {return {name: a.name || undefined} as Author}),
      creator: input?.creator,
      generator: input?.generator,
      keywords: _processKeywords(input?.keywords),
      publisher: input?.publisher,
      referrer: input?.referrer ? input?.referrer as ReferrerEnum : undefined,
      formatDetection: {
        telephone: input?.formatDetection?.telephone || undefined,
        email: input?.formatDetection?.email || undefined,
        address: input?.formatDetection?.address || undefined,
      },
      alternates: {
        canonical: input?.alternates?.canonical,
        languages: toLanguageMap(input?.alternates?.languages),
      },
      openGraph: {
        siteName: input?.openGraph?.siteName || undefined,
        title: input?.openGraph?.title || undefined,
        description:
          input?.openGraph?.description || undefined,
        url: input?.openGraph?.url || undefined,
        type: input?.openGraph?.type || undefined,
        locale: locale || "en",
        images: _processMedia(input?.openGraph?.images),
        videos: _processMedia(input?.openGraph?.videos),
        audio: _processMedia(input?.openGraph?.audio),
        // publishedTime: input?.openGraph?.publishedTime,
      } as OpenGraph,
    };

    return result;
  } catch (error) {
    console.error("buildMetadata() Error: ", error);
  }
  return null;
}

function _processMedia(input?: any[] | null) {
  return input?.map(item => {
    return {
      url: item.image?.url,
      width: item.image?.width,
      height: item.image?.height,
    }
  })
}


function _processKeywords(keywordString?: string | null): string[] | undefined {
  if (!keywordString) return undefined;
  return keywordString.split(",");
}

type LanguageEntry = {
  locale?: string | null;
  path?: string | null;
  id?: string | null;
};

type LanguageArray = LanguageEntry[] | null | undefined;
type LanguageMap = Record<string, string>;


function normalizeLocaleTag(locale: string): string {
  // Keep base subtag for routing; adjust if you truly need region variants.
  const cleaned = locale.trim().toLowerCase();
  const [base] = cleaned.split(/[-_]/);
  return base;
}


function toLanguageMap(entries: LanguageArray): LanguageMap {
  // const opts = { ...DEFAULT_OPTS, ...options };
  const map: LanguageMap = {};
  if (!entries || !Array.isArray(entries)) return map;

  for (const e of entries) {
    const rawLocale = e?.locale ?? "";
    if (!rawLocale) continue;
    const locale = normalizeLocaleTag(rawLocale);

    map[locale] = e.path || ""; // last one wins
  }

  return map;
}
