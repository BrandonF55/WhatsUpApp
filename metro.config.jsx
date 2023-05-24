const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  'cjs'
);

module.exports = config;
// this component was added because in the Udemy course there was a issue with install firebase and this fixed it in the video. I added it just in case it was needed but i didn't get the error on my side with firebase.