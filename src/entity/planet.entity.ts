export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string,
	population: string,
  created: string;
  url: string;
}

export type PlanetResponse = {
  count: number,
  results: Planet[]
}

export interface SavedPlanet {
  url: string;
  name: string;
  population: string;
  climate: string;
}
