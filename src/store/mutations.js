export const SET_LOADING = (state, payload) => {
  state.isLoading = payload;
};
export const SET_GAMES_DATA = (state, payload) => {
  state.gamesData = state.gamesData.concat(payload);
};
export const SET_GAMES_TO_PLAY = (state, payload) => {
  state.gamesToPlay = payload;
};
export const SET_ANIME_DATA = (state, payload) => {
  state.animeData = state.animeData.concat(payload);
};
export const SET_ANIMES_TO_PLAY = (state, payload) => {
  state.animesToPlay = payload;
};
export const SET_SERIES_DATA = (state, payload) => {
  state.seriesData = payload;
};
