const { set } = require('lodash');

class ChangeExtension {
  constructor(options = {}) {
    this.extensions = options.extensions || [ 'js', 'css' ];
    this.compressionMethod = options.compressionMethod || 'gz';
  }

  Change(htmlData) {
    this.extensions.map((extension) =>
      set(
        htmlData,
        `assets[${ extension }]`,
        htmlData.assets[extension].map((name) => `${ name }.${ this.compressionMethod }`)
      )
    );
  }

  apply(compiler) {
    return compiler.plugin(
      'compilation',
      (compilation) =>
        compilation.plugin(
          'html-webpack-plugin-before-html-processing',
          (htmlPluginData, callbackHTMLData) =>
            callbackHTMLData(null, this.Change(htmlPluginData))
        )
    );
  }
}

module.exports = ChangeExtension;
