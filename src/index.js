import generateVueComponent from './component'
import Highcharts from 'highcharts'

const Chart = generateVueComponent(Highcharts)

const Features = Object.freeze({
  exporting () {
    const { default: exportingInit } = require('highcharts/modules/exporting')
    exportingInit(Highcharts)
    return { featureAdded: 'exporting' }
  },
  mapChart ({ mapName, mapData }) {
    const { default: mapInit } = require('highcharts/modules/map')
    mapInit(Highcharts)
    if (mapName && mapData) {
      Highcharts.maps[mapName] = mapData
    }
    return { featureAdded: 'mapChart', maps: Highcharts.maps }
  },
  stockChart () {
    const { default: stockInit } = require('highcharts/modules/stock')
    stockInit(Highcharts)
    return { featureAdded: 'stockChart' }
  }
})
const SupportedFeatures = Object.keys(Features)

export default function install (Vue, options = {}) {
  Vue.component(
    options.tagName || 'highcharts',
    generateVueComponent(options.highcharts || Highcharts)
  )
}

Object.defineProperty(install, 'use', {
  writable: false,
  value (feature, options = {}) {
    if (typeof Highcharts === 'object' && SupportedFeatures.includes(feature)) {
      return Features[feature](options)
    }
  }
})

export { Chart }
