import Realm from "realm";

class PlanetSchema extends Realm.Object {
  static schema: { name: string; primaryKey: string; properties: { url: string, population: string, climate: string; }; };
}

PlanetSchema.schema = {
  name: "Planet",
  primaryKey: "url",
  properties: {
    url: "string",
    population: "string",
    climate: "string"
  }
}

let realm = new Realm({ schema: [PlanetSchema], schemaVersion: 1 });

let getAllSavedPlanets = () => {
  return realm.objects("Planet");
}

let getSavedPlanetByUrl = (_url: string) => {
  return realm.objects('Planet').filtered(`url = ${_url}`);
}

let addPlanet = (_url: string, _population: string, _climate: string) => {
  realm.write(() => {
    const planet = realm.create("Planet", {
      url: _url,
      population: _population,
      climate: _climate
    });

    return planet;
  })
}

let deletPlanet = (_url: string) => {
  return realm.write(() => {
    realm.delete(getSavedPlanetByUrl(_url));
  });
}

export default realm;

export {
  getAllSavedPlanets,
  addPlanet,
  deletPlanet
}
