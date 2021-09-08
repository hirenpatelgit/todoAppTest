"jest": {
    "preset": "react-native",
    "setupFiles": [
      "<rootDir>/__tests__/jest-setup.js"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js",
      "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!@react-native|react-native)"
    ],
    "verbose": true
  }


  "transform": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js"
    },