import { copyObject } from '../utils/tools'

const generateVueComponent = function (Highcharts) {
  return {
    template: '<div ref="chart"></div>',
    render: createElement => createElement('div', {
      ref: 'chart'
    }),
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
      },
      highcharts: {
        type: Object
      },
      deepCopyOnUpdate: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      options: {
        handler (newValue) {
          this.chart.update(copyObject(newValue, this.deepCopyOnUpdate), ...this.updateArgs)
        },
        deep: true
      }
    },
    mounted () {
      let HC = this.highcharts || Highcharts

      // Check wheather the chart configuration object is passed, as well as the constructor is valid
      if (this.options && HC[this.constructorType]) {
        this.chart = HC[this.constructorType](
          this.$refs.chart,
          copyObject(this.options, true), // Always pass the deep copy when generating a chart. #80
          this.callback ? this.callback : null
        )
      } else {
        (!this.options) ? console.warn('The "options" parameter was not passed.') : console.warn(`'${this.constructorType}' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.`)
      }
    },
    beforeDestroy () {
      // Destroy chart if exists
      if (this.chart) {
        this.chart.destroy()
      }
    }
  }
}
export default generateVueComponent
