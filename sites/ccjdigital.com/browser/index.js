import Browser from '@base-cms/marko-web/browser';
import Shared from '@randall-reilly/package-global/browser';
import Top250Table from './top250/table.vue';

Shared(Browser);
Browser.registerComponent('Top250Table', Top250Table);

export default Browser;
