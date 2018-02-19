import Chart from './component'

export default function install (Vue, options) {
  let tagName = (options && options.tagName) || 'highcharts'
  Vue.component(tagName, Chart)
}
export {Chart}
