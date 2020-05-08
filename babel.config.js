module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            root: '.',
            src: './src',
            assets: './assets',
            components: './src/components',
            services: './src/services',
            navigation: './src/navigation',
            lib: './src/lib',
            types: './src/types',
            constants: './src/constants',
            screens: './src/screens',
            stores: './src/stores',
            sagas: './src/sagas'
          },
        },
      ],
    ],    
  };
};
