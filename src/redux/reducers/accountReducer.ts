import constants from '~/redux/constants';

let initialState = {};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case constants.USER_RECEIVED:
      console.log(action);
      return state;

    default:
      return state;
  }
};
