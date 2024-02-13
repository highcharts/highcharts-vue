// Types for Vue3
import { DefineComponent, App } from 'vue';
import * as Highcharts from 'highcharts';

declare module '@vue/runtime-cor' {
    export interface GlobalComponents {
        [key: string]: DefineComponent<ChartProps, {}, {}>
    }
}

export type ChartUpdateArgs = [boolean, boolean, Highcharts.AnimationOptionsObject];

export interface ChartProps {
    constructorType?: string;
    options: Highcharts.Options;
    callback?: Highcharts.ChartCallbackFunction;
    updateArgs?: ChartUpdateArgs;
    highcharts?: typeof Highcharts;
    deepCopyOnUpdate?: boolean;
}

export const Chart: DefineComponent<ChartProps>;

export interface HCVueInstallOptions {
    tagName?: string;
    highcharts?: typeof Highcharts;
}

export default function install(app: App, options?: HCVueInstallOptions): void;