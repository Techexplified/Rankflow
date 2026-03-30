'use strict';

module.exports = {
  register(app) {
    app.registerPlugin({
      id: 'seo-tools',
      name: 'SEO Tools',
    });
  },
  bootstrap(app) {},
};