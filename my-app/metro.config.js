const { getSentryExpoConfig } = require("@sentry/react-native/metro");

//** @type {import('expo/metro-config').MetroConfig} */

module.exports = (() => {
  // eslint-disable-next-line no-undef
  const config = getSentryExpoConfig(__dirname);

  const { transformer, resolver } = config;

  config.resetCache = true;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg", "mjs", "cjs"],
  };

  return config;
})();
