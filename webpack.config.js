import { fileURLToPath } from 'url';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'production',
    entry: {
        'highcharts-vue': './src/index.js',
        'highcharts-vue.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'HighchartsVue',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist')
    },
    externals: {
        highcharts: {
            root: 'Highcharts',
            commonjs: 'highcharts',
            commonjs2: 'highcharts',
            amd: 'highcharts'
        },
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({ include: /\.min\.js$/ })]
    }
};
