import en_us from '../localization/en-us.json';

type StringSet = {
  [key in keyof typeof en_us]: string;
};

export default StringSet;
