import generateVueComponent from './component'
import Highcharts from 'highcharts'
import Vue, { version } from 'vue'

export const Chart = generateVueComponent(Highcharts, version || Vue.version)

export default function install (Vue, options = {}) {
  Vue.component(
    options.tagName || 'highcharts',
    generateVueComponent(options.highcharts || Highcharts, Vue.version)
  )
}
