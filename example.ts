import { Service } from "./types/Service";

const route = new Dyno("/", {
  group: ["Dashboard", "Account"],
  service: Service,
});