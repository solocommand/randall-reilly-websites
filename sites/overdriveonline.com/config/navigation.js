const topics = [
  { href: '/equipment', label: 'Equipment' },
  { href: '/business', label: 'Business' },
  { href: '/regulation', label: 'Regulation' },
  { href: '/custom-rigs', label: 'Custom Rigs' },
  { href: '/gear', label: 'Gear' },
];

module.exports = {
  primary: {
    items: [],
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
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
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      ],
    },
  ],
};
