const baseConfig = {
  action: 'https://randallreilly.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'ccj_subscriptions' },
  ],
};

module.exports = {
  signupBanner: {
    ...baseConfig,
    description: 'Get the business tips, industry insights and trending news every trucking professional needs to know in the CCJ newsletter.',
  },
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every trucking professional needs to know in the CCJ newsletter.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter Just for Trucking Professionals',
    description: 'Get trucking news and insights, plus management tips and regulation updates — delivered straight to your inbox.',
  },
  pushdown: {
    ...baseConfig,
    imagePath: 'static/newsletter-pushdown/ccj-half.png',
    name: 'Don’t Miss Out',
    description: 'Join 80,000 trucking professionals who get helpful insights and important news delivered straight to their inbox with the CCJ newsletter.',
  },
};
