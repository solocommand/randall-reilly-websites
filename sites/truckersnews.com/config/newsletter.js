const baseConfig = {
  action: 'https://randallreilly.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'tn_subscriptions' },
  ],
  href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=tn_subscriptions',
};

module.exports = {
  signupBanner: {
    ...baseConfig,
    description: 'Get the job alerts, industry insights and trending news every truck driver needs to know in the <em>Truckers News</em> newsletter. ',
  },
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Get the job alerts, industry insights and trending news every truck driver needs to know in the <em>Truckers News</em> newsletter. ',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter Just for Truck Drivers',
    description: 'Get trucking news and insights, plus job alerts and trending gear — delivered straight to your inbox.',
  },
  pushdown: {
    ...baseConfig,
    imagePath: 'static/newsletter-pushdown/tn-half.png',
    name: 'Don’t Miss Out',
    description: 'Join 40,000 company drivers who get helpful insights and important news delivered straight to their inbox with the <em>Truckers News</em> newsletter.',
  },
};
