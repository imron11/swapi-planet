import { action, observable, makeAutoObservable } from "mobx";
import { container } from "tsyringe";
import PlanetRestService from "../../service/rest/planet-rest.service";

class PlanetStore {
  private _planetRestService = container.resolve(PlanetRestService);

  constructor() {
    makeAutoObservable(this);
  }

  @observable dataPlanets: any = [];

  @action
  getListPlanets = () => {
    this.dataPlanets = [];
    this._planetRestService.getListPlanets().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

export default PlanetStore;