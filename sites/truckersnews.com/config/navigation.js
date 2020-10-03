const topics = [
  { href: '/trucks', label: 'Trucks' },
  { href: '/news', label: 'News' },
  { href: '/features', label: 'Features' },
  { href: '/fun', label: 'Fun' },
  { href: '/whats-hot', label: 'Whats Hot' },
  { href: '/videos', label: 'Videos' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/she-drives', label: 'She Drives' },
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
