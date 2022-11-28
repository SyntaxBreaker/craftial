export interface IOffer {
  _id: string;
  name: string;
  location: string;
  price: string;
  email: string;
  phoneNumber: string;
  description: string;
  createdAt: string;
  images: IImage[];
}

export interface IOffers {
  offers: IOffer[];
}

export interface IForm {
  name: string;
  location: string;
  price: string;
  email: string;
  phoneNumber: string;
  description: string;
  images: string[];
}

export interface IImage {
  _id?: string;
  id: string;
  url: string;
}

export interface IImages {
  images: IImage[];
}

export interface IOptions {
  method: string;
  headers: {
    Accept: string;
    "Content-Type": string;
  };
  body: any;
}
