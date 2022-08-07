/* eslint-disable camelcase */
export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  description: string;
}

export interface Crew {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: [string];
  status: string;
  id: string;
}
/**
 * object that fetches data from the SpaceX API.
 * * @see {@link https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs}
 *
 */
export const API = {
	/**
     * checks if the API is available, by making a request to the /company endpoint.
     * @memberof API
     * @example API.checkAPIAvailability().then((ok) => { console.log(ok); });
     * @returns {Promise<boolean>} true if the API is available, false otherwise.
     */
	checkAPIAvailability: async () => {
		const response = await fetch('https://api.spacexdata.com/v4/company');
		if (response.ok) return response.ok;
		throw new Error('API is not available');
	},
	/**
     *
     * fetches the list of rockets from the SpaceX API.
     * @memberof API
     * @example API.getRockets().then((rockets) => { console.log(rockets); });
     * @returns {Promise<Rocket[]>} a promise that resolves to the list of rockets.
     */
	getRockets: async (): Promise<Rocket[]> => {
		const response = await fetch('https://api.spacexdata.com/v4/rockets');
		const data = await response.json();
		return data;
	},
	/**
     * fetches the list of crew members from the SpaceX API.
     * @memberof API
     * @example API.getCrew().then((crew) => { console.log(crew); });
     * @returns {Promise<Crew[]>} a promise that resolves to the list of crew members.
     */
	getCrew: async (): Promise<Crew[]> => {
		const response = await fetch('https://api.spacexdata.com/v4/crew');
		const data = await response.json();
		return data;
	},
};
