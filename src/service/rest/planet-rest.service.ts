import BaseRestService from "./base-rest.service";
import { Observable } from "rxjs";
import { injectable } from "tsyringe";
import APP_CONSTANT from "../../config/app.constant";
import { HttpClientService } from "../../core/http/http-client.service";
import { PlanetResponse, Planet } from "../../entity/planet.entity";

@injectable()
class PlanetRestService extends BaseRestService {

  private get httpBase() {
    return new HttpClientService(APP_CONSTANT.BASE_URL);
  }

  private get http() {
    return new HttpClientService("");
  } 

  public getListPlanets(): Observable<PlanetResponse> {
    return this.wrapError(this.httpBase.get("planets"));
  }

  public getDetailPlanet(url): Observable<Planet> {
    return this.wrapError(this.http.get(url));
  }

}

export default PlanetRestService;