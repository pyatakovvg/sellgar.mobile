module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@config/env',
        path: '.env',
        safe: false, // если true, требует наличия всех переменных
        allowUndefined: true,
      },
    ],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['@babel/plugin-proposal-dynamic-import'],
    ['babel-plugin-transform-typescript-metadata'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
