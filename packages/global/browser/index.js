import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import MenuToggleButton from './menu-toggle-button.vue';
import NewsletterNub from './newsletter-nub.vue';
import SpecGuideTable from './spec-guide/table.vue';
import TopStoriesMenu from './top-stories-menu.vue';

export default (Browser) => {
  GTM(Browser);
  GAM(Browser);
  SocialSharing(Browser);

  Browser.register('GlobalMenuToggleButton', MenuToggleButton);
  Browser.register('GlobalNewsletterNub', NewsletterNub);
  Browser.register('CommonSpecGuideTable', SpecGuideTable);
  Browser.register('GlobalTopStoriesMenu', TopStoriesMenu);
};
