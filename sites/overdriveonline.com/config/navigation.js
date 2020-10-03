const topics = [
  { href: '/news', label: 'News' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/life', label: 'Life' },
  { href: '/custom-rigs', label: 'Custom Rigs' },
  { href: '/equipment', label: 'Equipment' },
  { href: '/business', label: 'Business' },
  { href: '/regulations', label: 'Regulations' },
  { href: '/gear', label: 'Gear' },
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
