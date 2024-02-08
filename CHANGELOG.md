# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.0](https://github.com/highcharts/highcharts-vue/pull/258) (2024-02-08)
* ‼️ **From `highcharts-vue@2.0.0`, this package will only be compatible with Vue 3.** ‼️
* Added full TypeScript support for Vue 3.
* Created a Vue 3-specific demo example.
* Updated all the dev dependencies to the most recent versions.
* Got rid of Vue 2-related dependencies and potential security vulnerabilites.
* Got rid of Vue 2-specific code (and thus, reduced the bundle size).

### [1.4.3](https://github.com/highcharts/highcharts-vue/compare/v1.4.2...v1.4.3) (2023-07-03)
* **chart update bugfix:** Fixed #239, chart object was reactive. ([076b6de](https://github.com/highcharts/highcharts-vue/pull/240/commits/076b6debef5c6b7c7a6f14685838972a7dbb1850))
* **Highcharts version updated in demos:** ([56bed69](https://github.com/highcharts/highcharts-vue/pull/241/commits/56bed694382839fd632cf7ada765997e4b183d9b))

### [1.4.2](https://github.com/highcharts/highcharts-vue/compare/v1.4.1...v1.4.2) (2023-06-01)
* **chart object bugfix:** Fixed #235, chart object is now accessible again through ref. ([594d51c](https://github.com/highcharts/highcharts-vue/commit/c4d0f79cbf689a704fa9e27394c21b8a77ca7813))

## [1.4.1](https://github.com/highcharts/highcharts-vue/compare/v1.4.0...v1.4.1) (2023-04-20)

### Features
* **composition-api:** Added support for the Composition API. ([18532db](https://github.com/highcharts/highcharts-vue/pull/229/commits/18532db4dbb78c5a1fd89c0d79bc1579f50a20fe))
* **eslint update:** Updated Eslint version.


## [1.4.0](https://github.com/highcharts/highcharts-vue/compare/v1.3.5...v1.4.0) (2021-05-26)


### Features

* **demo-v3:** Added demo-v3 scripts. ([f969c0a](https://github.com/highcharts/highcharts-vue/commit/f969c0a020bdd964f8fca75ed309ba4aabf6e979))
* **docs:** Updated the docs. ([d51b1f8](https://github.com/highcharts/highcharts-vue/commit/d51b1f814b40d3f7cbe4799699e37f1316c700ba))
* **vue:** Added support for Vue v3 apps. ([268aef1](https://github.com/highcharts/highcharts-vue/commit/268aef1ce1b41a642540ebfa4aa0c8fb58351ef8))


### Bug Fixes

* **tests:** Fixed tests, and get rid of Jest deprecation warnings. ([886187a](https://github.com/highcharts/highcharts-vue/commit/886187a335df84e40f1f5bba5dc9ba2d37e32994))

<a name="1.3.5"></a>
## [1.3.5](https://github.com/highcharts/highcharts-vue/compare/v1.3.4...v1.3.5) (2019-05-29)


### Bug Fixes

* **typescript:** Fixed TS1192 error, imported all from Highcharts package. Closes [#85](https://github.com/highcharts/highcharts-vue/issues/85) ([56defb6](https://github.com/highcharts/highcharts-vue/commit/56defb6))
* Fixed TypeScript definitions. ([e24dcce](https://github.com/highcharts/highcharts-vue/commit/e24dcce))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/highcharts/highcharts-vue/compare/v1.3.3...v1.3.4) (2019-05-22)


### Bug Fixes

* **tests:** Added pre-commit tests running. Files field added to package.json. ([aed1af4](https://github.com/highcharts/highcharts-vue/commit/aed1af4))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/highcharts/highcharts-vue/compare/v1.3.2...v1.3.3) (2019-05-22)


### Features

* **tests:** Jest tests added. ([c6c88c7](https://github.com/highcharts/highcharts-vue/commit/c6c88c7))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/highcharts/highcharts-vue/compare/v1.3.1...v1.3.2) (2019-05-21)


### Bug Fixes

* **husky:** Including actual build in pre-commit hook. ([962d706](https://github.com/highcharts/highcharts-vue/commit/962d706))
* Infinite loop on init, when series.allAreas is set to true on map charts, closes [#80](https://github.com/highcharts/highcharts-vue/issues/80). ([9d4cf40](https://github.com/highcharts/highcharts-vue/commit/9d4cf40))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/highcharts/highcharts-vue/compare/v1.3.0...v1.3.1) (2019-05-09)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/highcharts/highcharts-vue/compare/v1.2.0...v1.3.0) (2019-05-09)


### Bug Fixes

* **#43, #49:** Webpack and Babel updated in demo app, worldmap structure changed. ([2a74914](https://github.com/highcharts/highcharts-vue/commit/2a74914)), closes [#43](https://github.com/highcharts/highcharts-vue/issues/43) [#49](https://github.com/highcharts/highcharts-vue/issues/49)


### Features

* Added 'deepCopyOnUpdate property.' ([2f87156](https://github.com/highcharts/highcharts-vue/commit/2f87156))
* Added ability to indicate a specific Highcharts instance for component. ([6392791](https://github.com/highcharts/highcharts-vue/commit/6392791))
* Added TypeScript support. Closed [#48](https://github.com/highcharts/highcharts-vue/issues/48) ([859f3f7](https://github.com/highcharts/highcharts-vue/commit/859f3f7))
* Webpack configuration and output files unified. ([e63c2bd](https://github.com/highcharts/highcharts-vue/commit/e63c2bd))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/highcharts/highcharts-vue/compare/v1.1.0...v1.2.0) (2018-08-30)


### Bug Fixes

* **update:** Fixed errors on updating, caused by mutating data. ([276df46](https://github.com/highcharts/highcharts-vue/commit/276df46))


### Features

* **husky:** Husky added. ([17c0b9d](https://github.com/highcharts/highcharts-vue/commit/17c0b9d))



<a name="1.1.0"></a>
# 1.1.0 (2018-08-27)


### Features

* **changelog:** Added changelog. ([62da229](https://github.com/highcharts/highcharts-vue/commit/62da229))