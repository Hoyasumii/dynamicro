import { Constructor } from "./Constructor";

export interface DynoConfig<ServiceType extends object> {
  groups: Array<string>;
  service: Constructor<ServiceType>;
}
