import { mount } from '@vue/test-utils'
import generateVueComponent from '../src/component'
import Highcharts from 'highcharts'

const Chart = generateVueComponent(Highcharts)

const propsData = {
  options: {
    series: [{
      name: 'Series',
      data: [1, 2, 3]
    }]
  },
  callback: function () {
    this.wasCallbackInvoked = true
  }
}

describe('highcharts-vue tests', () => {
  const wrapper = mount(Chart, { propsData })
  const chart = Highcharts.charts[0]

  test('Wrapper should be a Vue instance.', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Only one chart should be created.', () => {
    expect(Highcharts.charts.length).toBe(1)
  })

  test('Chart data should be set correctly.', () => {
    expect(
      wrapper.props().options.series[0].data
    ).toEqual(
      chart.series[0].yData
    )
  })

  test('Callback should be invoked.', () => {
    expect(chart.wasCallbackInvoked).toBeTruthy()
  })

  test('Chart data should be copied.', () => {
    wrapper.setProps({
      options: {
        series: [{
          name: 'Series',
          data: [1, 2, 3, 9]
        }]
      }
    })

    expect(
      wrapper.props('options').series[0].data === chart.series[0].userOptions.data
    ).not.toBeTruthy()
  })

  test('Chart data should not be copied.', () => {
    wrapper.setProps({
      deepCopyOnUpdate: false,
      options: {
        series: [{
          data: [12, 10, 5, 6, 10]
        }]
      }
    })

    expect(
      wrapper.props('options').series[0].data === chart.series[0].userOptions.data
    ).toBeTruthy()
  })

  test('Chart should be destroyed when component is destroyed.', () => {
    wrapper.destroy()
    expect(Highcharts.charts[0]).not.toBeTruthy()
  })
})
