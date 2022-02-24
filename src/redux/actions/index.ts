import constants from '~/redux/constants';

export default {
  userReceived: (user: any) => {
    return {
      type: constants.USER_RECEIVED,
      data: user,
    };
  },
};
