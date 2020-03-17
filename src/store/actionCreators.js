import * as actionTypes from './actions';

export const onGameCompleted = game => {
  return {
    type: actionTypes.GAME_RESULTS,
    game: game
  };
};
