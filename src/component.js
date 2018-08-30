import Highcharts from 'highcharts'

const HighchartsVueComponent = {
  template: '<div ref="chart"></div>',
  render: createElement => createElement('div', { ref: 'chart' }),
  props: {
    constructorType: {
      type: String,
      default: 'chart'
    },
    options: {
      type: Object,
      required: true
    },
    callback: Function,
    updateArgs: {
      type: Array,
      default: () => [true, true]
    }
  },
  watch: {
    options: {
      handler (newValue) {
        this.chart.update(Object.assign({}, newValue), ...this.updateArgs)
      },
      deep: true
    }
  },
  mounted () {
    // Check wheather the chart configuration object is passed, as well as the constructor is valid
    if (this.options && Highcharts[this.constructorType]) {
      this.chart = Highcharts[this.constructorType](
        this.$refs.chart,
        Object.assign({}, this.options),
        this.callback ? this.callback : null
      )
    } else {
      (!this.options) ? console.warn('The "options" parameter was not passed.') : console.warn(`'${this.constructorType}' constructor-type is incorrect. Sometimes this error is casued by the fact, that the corresponding module wasn't imported.`)
    }
  },
  beforeDestroy () {
    // Destroy chart if exists
    if (this.chart) {
      this.chart.destroy()
    }
  }
}
export default HighchartsVueComponent
