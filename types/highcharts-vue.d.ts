import _Vue, { VNode, PropOptions, WatchOptionsWithHandler, WatchHandler, CreateElement } from "vue";
import * as Highcharts from "highcharts"

export type ChartUpdateArgs = [boolean, boolean, Highcharts.AnimationOptionsObject]

declare module 'vue/types/options' {
    interface ComponentOptions<V extends _Vue> {
        constructorType?: string;
        options?: Highcharts.Options;
        callback?: Highcharts.ChartCallbackFunction;
        updateArgs?: Array<ChartUpdateArgs>;
        highcharts?: typeof Highcharts;
        deepCopyOnUpdate?: boolean;
    }
}

export interface ChartOptions {
    tagName?: string;
    highcharts?: typeof Highcharts;
}

export interface ChartPropsObject {
    constructorType: PropOptions;
    options: PropOptions;
    updateArgs: PropOptions;
    callback: () => void;
}

export interface ChartWatchObject {
    options: WatchOptionsWithHandler<any>;
}

export class Chart extends _Vue {
    props: ChartPropsObject;
    template: string;
    watch: ChartWatchObject;
    beforeDestroy: () => void;
    mounted: () => void;
    render: (createElement: CreateElement) => VNode;
}

export default function install(vue: typeof _Vue, options?: ChartOptions): void;