import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './js/worldmap'

stockInit(Highcharts)
mapInit(Highcharts)
addWorldMap(Highcharts)

const app = createApp(App);

app.use(HighchartsVue)
app.mount("#app");
