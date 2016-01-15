module.exports = {
  "proxies": null,
  "hooks": {},
  "paths": {
    "wwwDir": "www",
    "buildDir": "build",
    "buildJSDir": "js",
    "buildCSSDir": "css",
    "buildFontsDir": "fonts",
    "appDir": "app",
    "appSrcModule": "app.js",
    "appBuildBundle": "app.bundle.js",
    "appSassSrc": [
      "app.ios.scss",
      "app.md.scss"
    ],
    "appSassWatch": "**/*.scss",
    "ionicDir": "node_modules/ionic-framework",
    "ionicSassDir": "node_modules/ionic-framework",
    "ionicFontFiles": "fonts/**/*.ttf"
  },
  "autoPrefixerOpts": {
    "browsers": [
      "last 2 versions",
      "iOS >= 7",
      "Android >= 4",
      "Explorer >= 10",
      "ExplorerMobile >= 11"
    ],
    "cascade": false
  },
  "name": "TestingIonic2App"
}