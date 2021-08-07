import BaseRestService from "./base-rest.service";
import { Observable } from "rxjs";
import { injectable } from "tsyringe";
import APP_CONSTANT from "../../config/app.constant";
import { HttpClientService } from "../../core/http/http-client.service";

@injectable()
class PlanetRestService extends BaseRestService {

  private get http() {
    return new HttpClientService(APP_CONSTANT.BASE_URL);
  }

  public getListPlanet(): Observable<any> {
    return this.wrapError(this.http.get("planets"))
  }

}

export default PlanetRestService;