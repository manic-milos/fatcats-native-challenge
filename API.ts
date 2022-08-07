/* eslint-disable camelcase */
export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  flickr_images: [string];
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage_reusable: boolean;
  rocket_mass: number;
  second_stage_engines: number;
  second_stage_fuel_amount_tons: number;
  second_stage_burn_time_sec: number;
  thruster_type: string;
  thruster_amount: number;
  thruster_power: number;
  thruster_power_rating: number;
  thruster_engine_loss_max: number;
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
