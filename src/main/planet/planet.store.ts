import { makeAutoObservable, toJS } from "mobx";
import { container } from "tsyringe";
import PlanetRestService from "../../service/rest/planet-rest.service";
import { Planet } from "../../entity/planet.entity";
import RootStore from "../root.store";

class PlanetStore {
  root: RootStore;
  private _planetRestService = container.resolve(PlanetRestService);

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  dataPlanets: Planet[] = null;
  dataDetailPlanet: Planet = null;

  //for infinite scroll
  isLoadData: boolean = false;
  pageNumber: number = 1;

  resetPlanets = () => {
    this.dataPlanets = null;
    this.dataDetailPlanet = null;
    this.pageNumber = 1;
  }

  getListPlanets = () => {
    this.dataPlanets = null;
    this.isLoadData = true;
    this._planetRestService.getListPlanets(this.pageNumber)
    .finally(() => {
      this.isLoadData = false;
    })
    .subscribe(
      (response) => {
        this.setDataPlanets(response.results)
      }
    );
  }

  getMorePlanets = () => {
    this.pageNumber += 1;
    if (this.pageNumber <= 6) {
      this.isLoadData = true;
      this._planetRestService.getListPlanets(this.pageNumber)
      .finally(() => {
        this.isLoadData = false;
      })
      .subscribe(
        (response) => {
          const currentPlanets = toJS(this.dataPlanets);
          const allPlanets = currentPlanets.concat(response.results);

          this.setDataPlanets(allPlanets);
        }
      );
    }
  }

  getDetailPlanet = async (url) => {
    this._planetRestService.getDetailPlanet(url).subscribe(
      (response) => {
        this.setDetailPlanet(response);
      }
    )
  }

  setDataPlanets = (planets) => {
    this.dataPlanets = planets;
  }

  setDetailPlanet = (planet) => {
    this.dataDetailPlanet = planet;
  }
}

export default PlanetStore;