'use strict';

module.exports = () => {
  return {
    register() {},
    bootstrap() {},
    destroy() {},
    config: { default: {}, validator() {} },
    routes: [],
    controllers: {},
    services: {},
    contentTypes: {},
    policies: {},
    middlewares: {},
  };
};