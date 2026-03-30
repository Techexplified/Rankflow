'use strict';
import SeoChecker from './admin/src/components/SeoChecker';

export default {
  register(app) {
    // 1. Register the plugin
    app.registerPlugin({
      id: 'seo-tools',
      name: 'SEO Tools',
    });

    // 2. Inject the component into the Content Manager's right sidebar
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: 'seo-checker-preview',
      Component: SeoChecker,
    });
  },
  bootstrap(app) {},
};