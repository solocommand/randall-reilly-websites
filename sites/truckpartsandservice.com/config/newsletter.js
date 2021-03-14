const baseConfig = {
  action: 'https://randallreilly.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'tps_subscriptions' },
  ],
  href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=tps_subscriptions',
};

module.exports = {
  signupBanner: {
    ...baseConfig,
    description: 'Get the business tips, industry insights and trending news every dealer and distributor needs to know in the <em>TPS</em> newsletter.',
  },
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Get the business tips, industry insights and trending news every dealer and distributor needs to know in the <em>TPS</em> newsletter.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter Just for Dealers and Distributors',
    description: 'Get dealer and aftermarket news, plus safety recalls and product reviews — delivered straight to your inbox.',
  },
  pushdown: {
    ...baseConfig,
    imagePath: 'static/newsletter-pushdown/tps-half.png',
    name: 'Don’t Miss Out',
    description: 'Join 20,000 dealer and aftermarket professionals who get helpful insights and important news delivered straight to their inbox with the <em>Trucks, Parts, Service</em> newsletter.',
  },
};
