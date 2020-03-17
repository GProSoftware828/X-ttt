import * as actionTypes from './actions';

export const initialState = {
  gameResults: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_RESULTS:
      return {
        gameResults: action.game
      };
  }
};
