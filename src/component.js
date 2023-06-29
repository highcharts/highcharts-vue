import { copyObject } from '../utils/tools'
import { h, ref, shallowRef, watch, onMounted, onBeforeUnmount } from 'vue'

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
      render: (createElement) => createElement('div', { ref: 'chart' }),
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
    render () { return h('div', { ref: 'chartContainer' }) },
    setup(props) {
      const chartContainer = ref(null),
        chart = shallowRef({});

      onMounted(() => {
        let HC = props.highcharts || Highcharts;

        if (props.options && HC[props.constructorType]) {
          chart.value = HC[props.constructorType](
            chartContainer.value,
            copyObject(props.options, true), // #80
            props.callback ? props.callback : null
          )
        } else if (!props.options) {
          console.warn('The "options" parameter was not passed.');
        } else {
          console.warn(`'${props.constructorType}' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.`);
        }
      })

      watch(() => props.options, (options, prevOptions) => {
        chart.value.update(copyObject(options, props.deepCopyOnUpdate), ...props.updateArgs)
      }, { deep: true });

      onBeforeUnmount(() => {
        if (chart.value) {
          chart.value.destroy()
        }
      });

      return { chart, chartContainer, props };
    }
  }
}

export default generateVueComponent;
