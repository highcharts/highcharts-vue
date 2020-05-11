import generateVueComponent from './component'
import Highcharts from 'highcharts'

const Chart = generateVueComponent(Highcharts)

const Features = Object.freeze({
  async stockChart () {
    const { default: stockInit } = await import('highcharts/modules/stock')
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

install.use = function (feature, options = {}) {
  if (typeof Highcharts === 'object' && SupportedFeatures.includes(feature)) {
    return Features[feature](options)
  }
}

export { Chart }
