const baseConfig = {
  action: 'https://randallreilly.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'tlc_subscriptions' },
  ],
};

module.exports = {
  signupBanner: {
    ...baseConfig,
    description: 'Get the business tips, industry insights and trending news every landscaping professional needs to know in the <em>TLC</em> newsletter. ',
  },
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every landscaping professional needs to know in the <em>TLC</em> newsletter. ',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter Just for Landscapers',
    description: 'Get landscaping news and insights, plus how-to guides and equipment reviews — delivered straight to your inbox.',
  },
  pushdown: {
    ...baseConfig,
    imagePath: 'static/newsletter-pushdown/tlc-half.png',
    name: 'Don’t Miss Out',
    description: 'Join 14,000 landscaping professionals who get helpful insights and important news delivered straight to their inbox with the <em>Total Landscape Care</em> newsletter.',
  },
};
