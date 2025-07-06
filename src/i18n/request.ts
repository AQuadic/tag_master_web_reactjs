import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

import arHero from "../../messages/ar/header.json";
import enHero from "../../messages/en/header.json";

import arachievements from '../../messages/ar/achievements.json'
import enachievements from '../../messages/en/achievements.json'

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: {
      hero: locale === "ar" ? arHero : enHero,
      achievements: locale === "ar" ? arachievements : enachievements
    }
  };
});
