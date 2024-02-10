import productData from '../utils/data/products.json';

export type AuthStackParameterList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

export type AppStackParameterList = {
  About: undefined;
  Analytics: undefined;
  Profile: undefined;
  Home: undefined;
  Settings: undefined;
};

export type CommonStackParameterList = {
  ProductList: undefined;
  Product: {item: (typeof productData.products)[0]};
};
