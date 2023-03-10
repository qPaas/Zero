const babelConfig = require('./babel');
const serverConfig = require('./server');
const externalConfig = require('./external');
const { chainWebpackPlugins } = require('./plugin');
const { BaseProxies } = require('./BaseServerConfig');

const {
  router: { base: publicPath },
  server: { www },
  dev: { https },
} = serverConfig;

module.exports = {
  publicPath,
  babelConfig,
  externalConfig,
  chainWebpackPlugins,
  get globalConfig() {
    const {
      // eslint-disable-next-line comma-dangle
      router
    } = serverConfig;
    return {
      router,
    };
  },
  get devServer() {
    const {
      dev: { host, port, proxies },
    } = serverConfig;
    const userProxies = proxies ? proxies.concat(BaseProxies) : BaseProxies;
    const parseTarget = (target) => {
      if (/(http|https):\/\/([\w.]+\/?)\S*/.test(target)) {
        return target;
      }
      return https ? `https://${target}` : `http://${target}`;
    };
    const proxy = userProxies.reduce((result, { path, target = www }) => {
      result[path] = {
        target: parseTarget(target),
        secure: false,
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive',
        },
      };
      return result;
    }, {});
    return {
      disableHostCheck: true,
      host,
      port,
      proxy,
      https: https
        ? {
          spdy: {
            protocols: ['http1.1'], // 解决 JSON 响应过大被截断的问题：https://github.com/webpack/webpack-dev-server/issues/1574
          },
        }
        : false,
    };
  },
};
