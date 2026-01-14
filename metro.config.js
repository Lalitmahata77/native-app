const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
/** `@type` {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Do not disable CSS support when using Tailwind.
  isCSSEnabled: true,
});
module.exports = withNativeWind(config, {input: "./app/global.css", output: "./app/"});