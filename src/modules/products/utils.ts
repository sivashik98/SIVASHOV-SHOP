import { HOT_CATEGORIES, PREMIUM_PRODUCT_RATING_THRESHOLD, TG_APP_DEEP_LINK, TG_WEB_DEEP_LINK } from 'src/constants';
import { canOpenURL, openURL } from 'expo-linking';

export const isHotCategory = (category: string) => HOT_CATEGORIES.includes(category);

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const isPremiumProduct = (rating: number) => rating > PREMIUM_PRODUCT_RATING_THRESHOLD;

export const openTgApp = async () => {
  // Checking if the link is supported for links with custom URL scheme.
  const appLinkSupported = await canOpenURL(TG_APP_DEEP_LINK);

  if (appLinkSupported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await openURL(TG_APP_DEEP_LINK);
  } else {
    await openURL(TG_WEB_DEEP_LINK);
  }
};
