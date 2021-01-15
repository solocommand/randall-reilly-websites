const topics = {
  primary: [
    { href: '/trucks', label: 'Trucks' },
    { href: '/business', label: 'Business' },
    { href: '/technology', label: 'Technology' },
    { href: '/workforce', label: 'Workforce' },
    { href: '/products', label: 'Products' },
    { href: '/perspectives', label: 'Perspectives' },
    { href: '/ccj-top-250', label: 'CCJ Top 250' },
  ],
  expanded: [
  ],
  secondary: [
    { href: '/maintenance', label: 'Maintenance' },
    { href: '/economic-trends/indicators', label: 'Indicators' },
    { href: '/test-drives', label: 'Test Drives' },
    { href: '/preventable-or-not', label: 'Preventable or Not?' },
    { href: '/ccj-innovators', label: 'CCJ Innovators' },
    { href: '/ccj-symposiums', label: 'CCJ Symposiums' },
    { href: '/white-papers', label: 'White Papers' },
  ],
};

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=ccj_subscriptions', label: 'Newsletters', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=ccj_subscriptions', label: 'Newsletters', target: '_blank' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: topics.primary,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/termsandprivacy', label: 'Terms of User and Privacy Policy' },
      { href: '/collection', label: 'Point of Collection Notice' },
      { href: 'https://privacyportal-cdn.onetrust.com/dsarwebform/49a9a972-547e-4c49-b23c-4cc77554cacb/cddab1bc-7e58-4eca-a20d-be42716734cf.html', label: 'Do Not Sell My Personal Information', target: '_blank' },
      { href: '/page/contact-us', label: 'Contact Us' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
