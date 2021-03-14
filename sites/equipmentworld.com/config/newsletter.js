const baseConfig = {
  action: 'https://randallreilly.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'eqw_subscriptions' },
  ],
  href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=eqw_subscriptions',
};

module.exports = {
  signupBanner: {
    ...baseConfig,
    description: 'Get the business tips, industry insights and trending news every contractor needs to know in the <span class="newsletter-name">Equipment World</span> newsletter.',
  },
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every contractor needs to know in the <span class="newsletter-name">Equipment World</span> newsletter.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter Just for Contractors',
    description: 'Get construction news and insights, plus project tips and equipment reviews — delivered straight to your inbox.',
  },
  pushdown: {
    ...baseConfig,
    imagePath: 'static/newsletter-pushdown/eqw-half.png',
    name: 'Don’t Miss Out',
    description: 'Join 55,000 construction professionals who get helpful insights and important news delivered straight to their inbox with the <span class="newsletter-name">Equipment World</span> newsletter.',
  },
};
