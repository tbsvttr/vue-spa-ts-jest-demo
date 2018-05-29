module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "vue"],
  moduleNameMapper: {
    "^!/(.*)$": "<rootDir>/$1",
    "^%/(.*)$": "<rootDir>/tests/$1",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest"
  },

  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
  ]
};
