module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@services': './src/services',
            '@storage': './src/storage',
          },
        },
      ],
    ],
  }
}
