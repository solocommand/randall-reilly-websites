const baseConfig = {
  action: 'https://randallreilly.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'hwt_subscriptions' },
  ],
  href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=hwt_subscriptions',
};

module.exports = {
  signupBanner: {
    ...baseConfig,
    description: 'Get the business tips, industry insights and trending news every truck owner needs to know in the <em>Hard Working Trucks</em> newsletter.',
  },
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every truck owner needs to know in the <em>Hard Working Trucks</em> newsletter.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Hardworking Trucks Daily',
    description: 'Sign up for the <span class="newsletter-name">Hardworking Trucks Daily</span> to keep up with...',
  },
  pushdown: {
    ...baseConfig,
    imagePath: 'static/newsletter-pushdown/hwt-half.png',
    name: 'Newsletter Just for Truck Owners',
    description: 'Get news you need to know about pickups, commercial vans and Class 3-8 trucks — delivered straight to your inbox.',
  },
};
