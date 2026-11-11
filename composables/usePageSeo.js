const defaultImage = "/images/christian-min.png"

export function usePageSeo({ title, description, path, image = defaultImage, type = "website" }) {
  const { public: publicConfig } = useRuntimeConfig()
  const siteUrl = publicConfig.siteUrl.replace(/\/$/, "")
  const canonicalUrl = new URL(path, `${siteUrl}/`).toString()
  const imageUrl = new URL(image, `${siteUrl}/`).toString()
  const imageAlt = "Christian Amoakohene, software engineer behind KrisOps"

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: canonicalUrl,
    ogSiteName: "KrisOps",
    ogLocale: "en_GH",
    ogImage: imageUrl,
    ogImageAlt: imageAlt,
    ogImageWidth: 1080,
    ogImageHeight: 1080,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
    twitterImageAlt: imageAlt,
    robots: "index, follow",
  })

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  })

  return { canonicalUrl, imageUrl }
}
