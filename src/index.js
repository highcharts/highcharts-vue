import generateVueComponent from './component';
import Highcharts from 'highcharts';

export const Chart = generateVueComponent(Highcharts);

export function install(app, options = {}) {
    app.component(
        options.tagName || 'highcharts',
        generateVueComponent(options.highcharts || Highcharts)
    );
}

export default install;
