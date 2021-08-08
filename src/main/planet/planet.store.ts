import { makeAutoObservable, toJS } from "mobx";
import { container } from "tsyringe";
import PlanetRestService from "../../service/rest/planet-rest.service";
import { Planet, SavedPlanet } from "../../entity/planet.entity";
import RootStore from "../root.store";
import { getAllSavedPlanets } from "../../database/planet.database";
import Realm from "realm";

class PlanetStore {
  root: RootStore;
  private _planetRestService = container.resolve(PlanetRestService);

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  dataPlanets: Planet[] = null;
  dataDetailPlanet: Planet = null;

  dataSavedPlanets: Realm.Results<SavedPlanet> = null;

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
        this.setIsLoadData();
      })
      .subscribe(
        (response) => {
          this.setDataPlanets(response.results)
        }
      );
  }

  getSavedPlanets = async () => {
    const savedPlanets = await getAllSavedPlanets();
    this.setSavedPlanets(savedPlanets);
  }

  getMorePlanets = () => {
    this.pageNumber += 1;
    if (this.pageNumber <= 6) {
      this.isLoadData = true;
      this._planetRestService.getListPlanets(this.pageNumber)
        .finally(() => {
          this.setIsLoadData();
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

  setSavedPlanets = (savedPlanets) => {
    this.dataSavedPlanets = savedPlanets;
  }

  setIsLoadData = () => {
    this.isLoadData = false;
  }
}

export default PlanetStore;