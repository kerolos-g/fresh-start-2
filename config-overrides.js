/* ./config-overrides.js */

const {
  override,
  addBabelPresets,
  addWebpackAlias,
  useBabelRc,
} = require("customize-cra");
// const path = require("path");
const presets = addBabelPresets(["@babel/preset-env"], ["@babel/preset-react"]);

const aliase = addWebpackAlias({
  "react-native-maps": "react-native-web-maps",
});

module.exports = override(); //override(presets, aliase);

