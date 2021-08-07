import { makeAutoObservable } from "mobx";
import { container } from "tsyringe";
import PlanetRestService from "../../service/rest/planet-rest.service";
import { PlanetResponse } from "../../entity/planet.entity";
import RootStore from "../root.store";

class PlanetStore {
  root: RootStore;
  private _planetRestService = container.resolve(PlanetRestService);

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  dataPlanets: PlanetResponse = null;

  getListPlanets = async () => {
    this.dataPlanets = null;
    this._planetRestService.getListPlanets().subscribe(
      (response) => {
        this.setDataPlanets(response)
      }
    );
  }

  setDataPlanets = (planets) => {
    this.dataPlanets = planets;

    console.log(this.dataPlanets);
  }
}

export default PlanetStore;