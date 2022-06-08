module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: ["js",'json', "vue"],
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.vue$": "<rootDir>/node_modules/vue-jest"
    },
    "collectCoverage": true,
    collectCoverageFrom: [
        "src/**/*.{js,vue}",
    ],
    coveragePathIgnorePatterns: [
        "App.vue",
        "main.js",
        "axios.js",
        "Shop.js"
    ],
};
