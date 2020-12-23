const topics = {
  primary: [
    { href: '/business', label: 'Business' },
    { href: '/workforce', label: 'Workforce' },
    { href: '/economic-trends', label: 'Economic Trends' },
    { href: '/maintenance', label: 'Maintenance' },
    { href: '/products', label: 'Products' },
  ],
  expanded: [
  ],
  secondary: [
  ],
};

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: '/newsletters', label: 'Newsletters' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: '/newsletters', label: 'Newsletters' },
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
    newsletter: {
      formAction: '/newsletters',
      cta: 'Sign up for the TPS Daily to keep up with ...',
    },
  },
};
