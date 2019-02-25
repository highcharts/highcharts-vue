import Vue from "vue";
export interface ChartOptions {
  tagName: string;
}
export class Chart extends Vue {
  public constructorType: string;
  public options: any;
  public callback: (event: any) => void;
  public updateArgs: boolean[];
}
export default function install(vue: typeof Vue, options?: ChartOptions): void;
