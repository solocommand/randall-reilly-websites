import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import IdentityX from '@base-cms/marko-web-identity-x/browser';
import BlockLoader from './block-loader.vue';
import MenuToggleButton from './menu-toggle-button.vue';
import NewsletterNub from './newsletter-nub.vue';
import WufooForm from './wufoo-form.vue';
import SpecGuideTable from './spec-guide/table.vue';
import TopStoriesMenu from './top-stories-menu.vue';
import CommentToggleButton from './comment-toggle-button.vue';

export default (Browser) => {
  GTM(Browser);
  GAM(Browser);
  SocialSharing(Browser);
  IdentityX(Browser);

  Browser.register('GlobalBlockLoader', BlockLoader);
  Browser.register('GlobalMenuToggleButton', MenuToggleButton);
  Browser.register('GlobalNewsletterNub', NewsletterNub);
  Browser.register('CommonSpecGuideTable', SpecGuideTable);
  Browser.register('GlobalTopStoriesMenu', TopStoriesMenu);
  Browser.register('GlobalCommentToggleButton', CommentToggleButton);
  Browser.register('WufooForm', WufooForm);
};
