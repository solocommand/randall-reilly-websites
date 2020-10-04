const topics = [
  { href: '/equipment', label: 'Equipment' },
  { href: '/better-roads', label: 'Better Roads' },
  { href: '/dealer', label: 'Big Iron Dealer' },
  { href: '/business', label: 'Business' },
  { href: '/tech', label: 'Tech' },
  { href: '/workforce', label: 'Workforce' },
  { href: '/safety', label: 'Safety' },
];

module.exports = {
  primary: {
    items: topics,
  },
  secondary: {
    items: [
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: topics,
    },
    {
      label: 'Resources',
      items: [
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
