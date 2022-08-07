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

export const API = {
	checkAPIAvailability: async () => {
		const response = await fetch('https://api.spacexdata.com/v4/company');
		if (response.ok) return response.ok;
		throw new Error('API is not available');
	},
	getRockets: async (): Promise<Rocket[]> => {
		const response = await fetch('https://api.spacexdata.com/v4/rockets');
		const data = await response.json();
		return data;
	},
	getCrew: async (): Promise<Crew[]> => {
		const response = await fetch('https://api.spacexdata.com/v4/crew');
		const data = await response.json();
		return data;
	},
};
