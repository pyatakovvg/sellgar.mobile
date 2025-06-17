const fs = require('fs');
const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const rootPackageJson = require('../../package.json');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    disableHierarchicalLookup: true,
    nodeModulesPaths: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, '../../node_modules')],
    extraNodeModules: {
      ...new Proxy(
        {},
        {
          get: (_, name) => path.join(__dirname, `node_modules/${name}`),
        },
      ),
    },
  },
  watchFolders: [
    path.resolve(__dirname),
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, '../../node_modules'),

    ...rootPackageJson.workspaces
      .map((pathLink) => path.resolve(__dirname, '../..', pathLink.replace(/\/\*$/, '')))
      .filter((pathLink) => fs.existsSync(pathLink)),
  ],
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
