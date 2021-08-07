import BaseRestService from "./base-rest.service";
import { Observable } from "rxjs";
import { injectable } from "tsyringe";
import APP_CONSTANT from "../../config/app.constant";
import { HttpClientService } from "../../core/http/http-client.service";
import { PlanetResponse } from "../../entity/planet.entity";

@injectable()
class PlanetRestService extends BaseRestService {

  private get http() {
    return new HttpClientService(APP_CONSTANT.BASE_URL);
  }

  public getListPlanets(): Observable<PlanetResponse> {
    return this.wrapError(this.http.get("planets"))
  }

}

export default PlanetRestService;