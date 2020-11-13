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
      { href: '/page/privacy-policy', label: 'Terms of User and Privacy Policy' },
      { href: '#', label: 'Point of Collection Notice' },
      { href: '#', label: 'Do Not Sell My Personal Information' },
      { href: '/contact-us', label: 'Contact Us' },
    ],

    topics,
    more: [
      { href: '/advertise', label: 'Advertise' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '#', label: 'Newsletters' },
    ],
    newsletter: {
      formAction: '/newsletters',
      cta: 'Sign up for the <strong>Truckers News Daily</strong> to keep up with ...',
    },
  },
  menu: [
    {
      modifiers: ['primary'],
      items: topics,
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      ],
    },
  ],
};
