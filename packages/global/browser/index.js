import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
};
