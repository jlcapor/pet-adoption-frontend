import { type MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/utils"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  }
}

export function formatDate(
    date: Date | string | number,
    options: Intl.DateTimeFormatOptions = {}
  ) {
    return new Intl.DateTimeFormat("en-US", {
      month: options.month ?? "long",
      day: options.day ?? "numeric",
      year: options.year ?? "numeric",
      ...options,
    }).format(new Date(date))
  }