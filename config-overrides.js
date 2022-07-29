/**   
 * CRA Developers did not account WebPack 5 (breaking) changes -
 * https://stackoverflow.com/questions/70712236/how-to-create-react-app-including-web3-using-create-react-app-i-am-getting-modu 
 * https://stackoverflow.com/a/71755681 
 * https://stackoverflow.com/questions/71749034/numerous-errors-when-importing-web3-into-app-js 
 * https://stackoverflow.com/questions/71744735/i-cant-fix-error-while-importing-web3-in-react 
 * https://github.com/facebook/create-react-app/issues/11756 
 * . 
 * `config-overrides.js` specific to `react-app-rewired`
*/
"use strict" ; 







const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, _env) { 
  /** 
   * CRA Developers did not account WebPack 5 (breaking) changes - 
   * https://stackoverflow.com/questions/70712236/how-to-create-react-app-including-web3-using-create-react-app-i-am-getting-modu 
   * https://stackoverflow.com/a/71755681 
   * https://stackoverflow.com/questions/71749034/numerous-errors-when-importing-web3-into-app-js 
   * https://stackoverflow.com/questions/71744735/i-cant-fix-error-while-importing-web3-in-react 
   * https://github.com/facebook/create-react-app/issues/11756 
   */
  config.plugins.push(
    new NodePolyfillPlugin({         
      excludeAliases: ["console"],
    })
  );
  return config;
};