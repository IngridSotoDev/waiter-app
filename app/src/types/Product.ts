interface Ingredients {
  name: string;
  icon: string;
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredients[]
}


