import { Dimensions } from 'react-native'

export const WIN = Dimensions.get('window');
export const W = WIN.width;
export const H = WIN.height;
export const responsive = {
    mobile5: W > 315 && W < 341,
    mobile8: W > 342 && W < 375,
    mobile8plus: W > 375 && W < 415,
    tablet: W < 990 && W > 415
};

export const BLUE = '#30d0fe';
export const WHITE = '#fff';