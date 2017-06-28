# ChangeExtensionPlugin

```
This plugin helps changing extensions of assets and scripts 
in order to use HtmlWebpackPlugin (https://github.com/jantimon/html-webpack-plugin)
and CompressionWebpackPlugin (https://github.com/webpack-contrib/compression-webpack-plugin) together
```
Installation: `yarn add change-extension-plugin` or `npm install change-extension-plugin --save` (You'll need a recent version of lodash also)
Include in your project like `const ChangeExtensionPlugin = require('change-extension-plugin');`
Use like this:
```
plugins: [
  new CompressionPlugin(
      {
        algorithm: 'gzip',
        threshold: 10240,
        deleteOriginalAssets: true,
      }
    ),
    new HTMLWebpackPlugin(
      {
        template: './public/index.html',
        filename: './views/index.html',
      }
    ),
    new ChangeExtrensionPlugin(
      {
        /**
         * These are the extensions of files that
         * will be changed after html is processed.
         */
        extensions: ['js', 'css'],
        /**
         * This is the extension of the compression method you'll use.
         * 'gz' by default
         */
        compressionMethod: 'gz',
      }
    ),
]
```

That's all!


