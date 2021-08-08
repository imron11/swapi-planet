import Realm from "realm";
import { SavedPlanet } from "../entity/planet.entity";

class PlanetSchema extends Realm.Object {
  static schema: { name: string; primaryKey: string; properties: { url: string, name: string, population: string, climate: string; }; };
}

PlanetSchema.schema = {
  name: "Planet",
  primaryKey: "url",
  properties: {
    url: "string",
    name: "string",
    population: "string",
    climate: "string"
  }
}

let realm = new Realm({ schema: [PlanetSchema], schemaVersion: 2 });

let getAllSavedPlanets = () => {
  return realm.objects<SavedPlanet>("Planet");
}

let getLengthSavedPlanets = () => {
  const savedPlanets = getAllSavedPlanets();
  return savedPlanets.length;
}

let getSavedPlanetByUrl = (_url: string) => {
  return realm.objects('Planet').filtered(`url = "${_url}"`);
}

let addPlanet = (_url: string, _name: string, _population: string, _climate: string) => {
  realm.write(() => {
    const planet = realm.create("Planet", {
      url: _url,
      name: _name,
      population: _population,
      climate: _climate
    });

    return planet;
  })
}

let deletePlanet = (_url: string) => {
  return realm.write(() => {
    realm.delete(getSavedPlanetByUrl(_url));
  });
}

export default realm;

export {
  getAllSavedPlanets,
  getLengthSavedPlanets,
  addPlanet,
  deletePlanet
}
