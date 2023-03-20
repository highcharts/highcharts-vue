import { copyObject } from '../utils/tools'
import { h, ref, watch, onMounted, onBeforeUnmount } from 'vue'

const CommonComponentProperties = {
  template: '<div ref="chart"></div>',
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
}

const generateVueComponent = function (Highcharts, VueVersion) {
  const VUE_MAJOR = VueVersion.split('.')[0];

  // return component compatible with Vue2
  if (VUE_MAJOR < 3) {
    return {
      ...CommonComponentProperties,
      render: (createElement) => createElement('div', {
        ref: 'chart'
      }),
      beforeDestroy() {
        if (this.chart) {
          this.chart.destroy()
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
        let HC = this.highcharts || Highcharts;
    
        if (this.options && HC[this.constructorType]) {
          this.chart = HC[this.constructorType](
            this.$refs.chart,
            copyObject(this.options, true), // #80
            this.callback ? this.callback : null
          )
        } else {
          (!this.options) ? console.warn('The "options" parameter was not passed.') : console.warn(`'${this.constructorType}' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.`)
        }
      }
    }
  }

  // otherwise, return a component for Vue3
  return {
    ...CommonComponentProperties,
    render () { return h('div', { ref: 'chart' }) },
    setup(props) {
      const chart = ref(null);

      let HighchartsChart;

      onMounted(() => {
        let HC = props.highcharts || Highcharts;

        if (props.options && HC[props.constructorType]) {
          HighchartsChart = HC[props.constructorType](
            chart.value,
            copyObject(props.options, true), // #80
            props.callback ? props.callback : null
          )
        } else {
          (!props.options) ? console.warn('The "options" parameter was not passed.') : console.warn(`'${props.constructorType}' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.`)
        }
      })

      watch(() => props.options, (options, prevOptions) => {
        HighchartsChart.update(copyObject(options, props.deepCopyOnUpdate), ...props.updateArgs)
      }, { deep: true });

      onBeforeUnmount(() => {
        if (HighchartsChart) {
          HighchartsChart.destroy()
        }
      });

      return { chart, props };
    }
  }
}

export default generateVueComponent;
