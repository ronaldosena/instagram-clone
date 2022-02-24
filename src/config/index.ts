import Config from 'react-native-config';
import { Dimensions } from 'react-native';

export default {
  dimensions: {
    width: Dimensions.get('window').width,
    thirdWidht: Dimensions.get('window').width / 3,
  },
  images: {
    profilePic: 'https://lh3.googleusercontent.com/HksSmD-4HUTTqMY8DcmdHxLdAWCTnw2nq7DHqNYieA_TbghRmsUH7rB67ildQp98uKnQ-6LAz3ixGtoBCpMXa4sN',
    heartIcon: require('~/assets/heart.png'),
    chatIcon: require('~/assets/chat.png'),
    shareIcon: require('~/assets/share.png'),
  },
  styleConstants: {
    rowHeight: 50,
  },
  baseUrl: Config.API_URL,
  apiKey: Config.API_KEY,
  cloudinary: {
    baseUrl: Config.CLOUDINARY_BASEURL,
    upload_preset: Config.CLOUDINARY_UPLOAD_PRESET,
    api_key: Config.CLOUDINARY_API_KEY,
    url: Config.CLOUDINARY_URL,
    userId: Config.CLOUDINARY_USER_ID,
  },
};
