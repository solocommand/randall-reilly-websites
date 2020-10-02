import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';
import PhotoSwipe from '@base-cms/marko-web-photoswipe/browser';
import Inquiry from '@base-cms/marko-web-inquiry/browser';
import Common from '@randall-reilly/package-common/browser';
import ContactUs from '@randall-reilly/package-contact-us/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import IdentityX from '@base-cms/marko-web-identity-x/browser';
import Radix from '@base-cms/marko-web-radix/browser';

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  RevealAd(Browser);
  Inquiry(Browser);
  PhotoSwipe(Browser);
  SocialSharing(Browser);
  Common(Browser);
  ContactUs(Browser);
  IdentityX(Browser);
  Radix(Browser);
};
