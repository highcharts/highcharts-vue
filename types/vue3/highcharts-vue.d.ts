// Types for Vue3
import { DefineComponent, App } from 'vue';
import * as Highcharts from 'highcharts';

export type ChartUpdateArgs = [boolean, boolean, Highcharts.AnimationOptionsObject];

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        highcharts?: typeof Highcharts;
    }
}

export interface ChartComponentOptions {
    constructorType?: string;
    options?: Highcharts.Options;
    callback?: Highcharts.ChartCallbackFunction;
    updateArgs?: ChartUpdateArgs;
    highcharts?: typeof Highcharts;
    deepCopyOnUpdate?: boolean;
}

export interface ChartProps {
    constructorType?: string;
    options: Highcharts.Options;
    updateArgs?: ChartUpdateArgs;
    callback?: Highcharts.ChartCallbackFunction;
}

export const Chart: DefineComponent<ChartProps>;

export default function install(app: App, options?: ChartComponentOptions): void;