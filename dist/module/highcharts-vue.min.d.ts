import * as Highcharts from 'highcharts';
import Vue from 'vue';

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Chart> {
        constructorType: string;
        options: Highcharts.Options;
    }
}

declare function install (v: Vue, options: ChartInstallOptionsObject): void;

export default install;

export interface Chart extends Vue  {
    props: ChartPropsObject;
    template: string;
    watch: ChartWatchObject;
    beforeDestroy: () => void;
    mounted: () => void;
    render: (createElement) => Highcharts.HTMLDOMElement;
}

export interface ChartPropsObject {
    constructorType: ChartPropsOptionsObject;
    options: ChartPropsOptionsObject;
    updateArgs: ChartPropsOptionsObject;
    callback: () => void;
}

export interface ChartPropsOptionsObject {
    default: any;
    required: any;
    type: any;
}

export interface ChartWatchObject {
    options: ChartWatchOptionsObject;
}

export interface ChartWatchOptionsObject {
    deep: boolean;
    handler: () => void;
}

export interface ChartInstallOptionsObject {
    options: ChartInstallOptionsOptionsObject;
}

export interface ChartInstallOptionsOptionsObject {
    tagName: string;
}
