import productData from '../utils/data/products.json';

export type AuthStackParameterList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

export type AppStackParameterList = {
  BottomTabs: undefined;
  ProductList: undefined;
  Product: {item: (typeof productData.products)[0]};
  BasicAnimation: undefined;
  PanGuestureHandler: undefined;
  InterpolateScrollView: undefined;
  InterpolateColors: undefined;
  PinchGestureHandler: undefined;
};

export type BottomTabStackParameterList = {
  About: undefined;
  Analytics: undefined;
  Profile: undefined;
  Home: undefined;
  Settings: undefined;
};
