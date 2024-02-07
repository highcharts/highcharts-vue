import generateVueComponent from './component'
import Highcharts from 'highcharts'

export const Chart = generateVueComponent(Highcharts)

export default function install (Vue, options = {}) {
  Vue.component(
    options.tagName || 'highcharts',
    generateVueComponent(options.highcharts || Highcharts)
  );
};
