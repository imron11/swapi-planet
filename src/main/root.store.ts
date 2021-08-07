import PlanetStore from "./planet/planet.store";

export default class RootStore {
  planetStore: PlanetStore;

  constructor() {
    this.planetStore = new PlanetStore(this);
  }
}