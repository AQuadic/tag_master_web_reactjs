import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

import arHero from "../../messages/ar/header.json";
import enHero from "../../messages/en/header.json";

import arachievements from '../../messages/ar/achievements.json'
import enachievements from '../../messages/en/achievements.json'

import arhomeAboutUs from '../../messages/ar/homeAboutUs.json'
import enhomeAboutUs from '../../messages/en/homeAboutUs.json'

import arhomeServices from '../../messages/ar/homeServices.json'
import enhomeServices from '../../messages/en/homeServices.json'

import arhowItWorks from '../../messages/ar/howItWorks.json'
import enhowItWorks from '../../messages/en/howItWorks.json'

import arbestProducts from '../../messages/ar/bestProducts.json'
import enbestProducts from '../../messages/en/bestProducts.json'

import aruserPickes from '../../messages/ar/userPickes.json'
import enuserPickes from '../../messages/en/userPickes.json'

import ardownloadApp from '../../messages/ar/downloadApp.json'
import endownloadApp from '../../messages/en/downloadApp.json'

import arhomeblogs from '../../messages/ar/homeblogs.json'
import enhomeblogs from '../../messages/en/homeblogs.json'

import arfaq from '../../messages/ar/faq.json'
import enfaq from '../../messages/en/faq.json'

import arhomecontact from '../../messages/ar/homecontact.json'
import enhomecontact from '../../messages/en/homecontact.json'

import arfooter from '../../messages/ar/footer.json'
import enfooter from '../../messages/en/footer.json'

import arproducts from '../../messages/ar/products.json'
import enproducts from '../../messages/en/products.json'

import arprofile from '../../messages/ar/profile.json'
import enprofile from '../../messages/en/profile.json'

import arlogin from '../../messages/ar/login.json'
import enlogin from '../../messages/en/login.json'

import armaincart from '../../messages/ar/maincart.json'
import enmaincart from '../../messages/en/maincart.json'

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
      achievements: locale === "ar" ? arachievements : enachievements,
      homeAboutUs: locale === "ar" ? arhomeAboutUs : enhomeAboutUs,
      homeServices: locale === "ar" ? arhomeServices : enhomeServices,
      howItWorks: locale === "ar" ? arhowItWorks : enhowItWorks,
      bestProducts: locale === "ar" ? arbestProducts : enbestProducts,
      userPickes: locale === "ar" ? aruserPickes : enuserPickes,
      downloadApp: locale === "ar" ? ardownloadApp : endownloadApp,
      homeblogs: locale === "ar" ? arhomeblogs : enhomeblogs,
      faq: locale === "ar" ? arfaq : enfaq,
      homecontact: locale === "ar" ? arhomecontact : enhomecontact,
      footer: locale === "ar" ? arfooter : enfooter,
      products: locale === "ar" ? arproducts : enproducts,
      profile: locale === "ar" ? arprofile : enprofile,
      login: locale === "ar" ? arlogin : enlogin,
      maincart: locale === "ar" ? armaincart : enmaincart,
    }
  };
});
