interface Restaurant {
  id: string;
  name: string;
  image: string;
  url: string;
  price: number;
  tags: string[];
}

export interface RestaurantsData {
  neighborhood: string;
  restaurants: Restaurant[];
}
