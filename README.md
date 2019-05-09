# Highcharts-Vue

Official Highcharts wrapper for Vue framework

## Table of Contents

1. [Getting started](#getting-started)
    1. [Requirements](#requirements)
    2. [Installation](#installation)
2. [Using](#using)
	1. [Registering globally as a plugin](#registering-globally-as-a-plugin)
	2. [Registering locally in your component](#registering-locally-in-your-component)
	3. [Implementing stockChart and mapChart](#implementing-stockchart-and-mapchart)
	4. [Loading maps](#loading-maps)
	5. [Changing global component tag name](#changing-global-component-tag-name)
	6. [Chart callback parameter](#chart-callback-parameter)
  7. [Chart object reference](#chart-object-reference)
	8. [Using a specific Highcharts instance](#using-a-specific-highcharts-instance)
3. [Demo app](#demo-app)
4. [Component Parameters](#component-parameters)
5. [Useful links](#useful-links)

## Getting started

### Requirements

- **Node.JS**, **NPM** installed globally in your OS
- **Vue**, **Highcharts** libraries (updated) installed in your project

### Installation

Install `highcharts-vue` package by:

```cli
npm install highcharts-vue
```
### Using
There are two ways of adding Highcharts-Vue wrapper to your project:

#### Registering globally as a plugin
The way described below is recommended when wanted to make a wrapper component available from everywhere in your app. In your main app file should have Vue and Highcharts-Vue packages imported:

```js
import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
```
Next, you can register it as a plugin in your Vue object:
```js
Vue.use(HighchartsVue)
```

#### Registering locally in your component
This option is recommended for direct use in specific components of your app. First, you should import the Chart component object from Highcharts-Vue package in your component file:

```js
import {Chart} from 'highcharts-vue'
```
Then, you've to register it in your Vue instance configuration, namely in `components`  section:

```js
{
  components: {
    highcharts: Chart 
  }
}
```
*NOTE:*
*If you would like to use Highcharts-Vue wrapper by attaching it using `<script>` tag in your `<head>` section of HTML document, of course it is possible and you should use one of .js files from `dist` of this package directory. After that, the `HighchartsVue` object should be available from `window` scope. Here is the example with this way of implementation: [JSFiddle example](https://jsfiddle.net/BlackLabel/ukc2kqnb/)*

### Configure

#### Options parameter
If you've done one of the above (importing and registering the wrapper), it allows you to use the Highcharts-Vue component in your app, just by adding `<highcharts>` html element, and passing chart configuration object by its `:options` parameter, which is **required**:

```html
<highcharts :options="chartOptions"></highcharts>
```
for example:
```js
new Vue({
  data() {
    return {
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }
  }
})
```
#### Importing Highcharts modules

To use any of Highcharts modules, you're obligated to import  that module to your file, as well as Highcharts package itself and add that module by passing Highcharts to it, for example:

```js
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)
```
#### Implementing stockChart and mapChart

Highcharts-Vue wrapper uses `chart` constructor by default, so if you need to implement `stockChart` or `mapChart`,  just add `stock` or `map` module as described above and use `:constructor-type` parameter in your html component element:
```js
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)
```
```html
<highcharts :constructor-type="'stockChart'" :options="chartOptions"></highcharts>
```
#### Loading maps

There are two ways of loading maps and using them with wrapper. You can install the [@highcharts/map-collection`](https://www.npmjs.com/package/@highcharts/map-collection) npm package with all maps included, and then import that maps which you would like to use in your project:

```js
import Highcharts from 'highcharts'
import mapData from '@highcharts/map-collection/custom/world.geo.json'

Highcharts.maps['myMapName'] = mapData
```

If you won't install a package with all maps, there is an option to choose necessary map from [Highmaps collection](https://code.highcharts.com/mapdata/) collection and copy a map data into a new file in your project. Then just import it wherever you want, and use it in the same way like above.

*The [Demo app](#demo-app) included in this repostory shows the second approach.*

#### Changing global component tag name
If you would like to use global component tag name other than `<highcharts>`, you could achieve that by passing object with `tagName: [TAG_NAME]` pair as an option argument when registering the plugin, for example:
```js
import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue, {tagName: 'charts']})
``` 
It allows you to use:
```html
<charts :options="chartOptions"></charts>
```
#### Chart callback parameter
If you need to use callback from `Highcharts.chart(renderTo, options [, callback])` function, you could pass it by `:callback` parameter through HTML component element:
```html
<highcharts :options="chartOptions" :callback="someFunction">
```
Then, `someFunction` will be called when chart is loaded.

#### Chart object reference

You can access the Chart object instance if necessary (e.g when need to get some data or use any of `Chart.prototype` functions), by calling specific Vue component instance `chart` field, but it is *not supported* to update the chart using its built-in functions, because that could cause a problems with data synchronization between your app and the chart itself (it disturbs conception of using wrappers). The most recommended way of implementing it, is to use it in the way presented in demo app.

#### Using Highcharts `setOptions()` method

If you would like to use `Highcharts.setOptions()` method to define some parameters which would be set globally on all of charts, we recommend you to use it in the main file of your app, although there should be Highcharts package imported before.

```js
import Highcharts from 'highcharts';

Highcharts.setOptions({
  // options here
})
```

 #### Using a specific Highcharts instance

Occasionally you'll want to create your charts basing on specific Highcharts version for some reason. Then you can set it up in two different ways, depending on your individual needs.

The **first one** is by setting a Highcharts instance while registering a wrapper component as a global plugin, by passing it through the `options` of Vue's install function, as below:

```js
import Vue from 'vue'
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'

Vue.use(HighchartsVue, {
	highcharts: Highcharts
})
```

After doing it, all charts will be generated basing on passed instance.

A **second way** is to pass the Highcharts instance through the props of `highcharts` component. Then, as a result, only that chart will be generated basing on passed instance:

```html
<highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
```

```js
import Highcharts from 'highcharts'

export default {
	name: 'app',
	data() {
		return {
			hcInstance: Highcharts,
			chartOptions: {
				series: [{
					data: [1, 2, 3]
				}]
			}
		}
	}
}
```

*Note that both ways of usage are **optional**, because wrapper automatically uses available Highcharts instance by default from peer dependency.*

## Demo app

If you would like to play with live app created with Highcharts Vue wrapper, or just want to see how it everything should looks like, this repository includes the demo example, which you can simply run locally on your machine. To achieve that, clone this repository, open terminal/console and enter these two commands from the repo directory level:

```cli
npm run build:app
npm run app
```
Server runs at `http://localhost:8080`

## Component Properties

Here is the list of all allowed props allowed to pass directly to your `<highcharts>` component instance, which wrapper is able to handle.

| Parameter | Type | Required | Description |
| --------- | :----: | :--------: | ----------- |
| `:options` | Object | yes | Highcharts chart configuration object |
| `:constructor-type` | String | no | Chart constructor type using to init specific chart. Allowed options: `'chart'`, `'stockChart'`, `'mapChart'`. First one is set for default. | 
| `:callback` | Function | no | Function passed as a callback during chart init, and triggered when chart is loaded.
| `:updateArgs` | Array | no | Array of `update()`'s function optional arguments. Parameters should be defined in the same order like in native Highcharts function: `[redraw, oneToOne, animation]`. [Here](https://api.highcharts.com/class-reference/Highcharts.Chart#update) is a more specific description of the parameters. |
| `:highcharts` | Object | no | A specific Highcharts instance. It's useful when required to build charts using different Highcharts versions. |
| `:deepCopyOnUpdate` | Boolean | no | Whether to make a deep copy of object passed to `Chart.update()` function. In order to avoid passing references of arrays, it's set to **true** by default. <br><br> ***NOTE:** That can cause a decrease of performance while processing a big amount of data, because copying source data is much expensive, and then it's recommended to disable that option by setting it to `false`.* |

## Useful links

[Highcharts General Documentation](https://www.highcharts.com/docs)
[Highcharts API](https://api.highcharts.com/highcharts/)