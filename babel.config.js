module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            _assets: "./src/assets",
            _components: "./src/components",
            _constants: "./src/constants",
            _contexts: "./src/contexts",
            _hooks: "./src/hooks",
            _interfaces: "./src/interfaces",
            _routes: "./src/routes",
            _screens: "./src/screens",
            _services: "./src/services",
            _storage: "./src/storage",
            _theme: "./src/theme",
            _types: "./src/@types",
            _utils: "./src/utils",
            _i18n: "./src/i18n",
          },
        },
      ],
    ],
  };
};
