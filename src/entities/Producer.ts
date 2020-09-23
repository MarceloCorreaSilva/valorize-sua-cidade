// Entities / Props
import { Product } from "./Product";

export interface Producer {
  id: number;
  updated_at: string;
  type: string;
  name: string;
  owner: string;
  state_registration: string;
  employees: number;
  total_area: number;
  vegetable_garden_area: number;
  orchard_area: number;
  irrigated: boolean;
  covered_planting: boolean;
  vehicles: number;
  commercialization: string[];
  lat: number;
  lng: number;
  products: Product[];
}
