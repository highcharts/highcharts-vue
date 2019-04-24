import generateVueComponent from './component'
import Highcharts from 'highcharts'

const Chart = generateVueComponent(Highcharts)

export default function install (Vue, options = {}) {
  Vue.component(
    options.tagName || 'highcharts',
    generateVueComponent(options.highcharts || Highcharts)
  )
}
export {Chart}
