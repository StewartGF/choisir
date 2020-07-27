export const getGamesData = async ({ commit, dispatch }) => {
  let number = parseInt(Math.floor(Math.random() * 30) + 1);
  commit("SET_LOADING", true);
  const response = await fetch(
    `https://api.rawg.io/api/games?page_size=40&page=${number}`
  );
  if (response.status == 200) {
    const { results: data } = await response.json(); //saco results y lo llamo data
    commit("SET_GAMES_DATA", data);
    commit("SET_LOADING", false);
    dispatch("getGamesToPlay");
  }
};

export const getGamesToPlay = ({ state, commit }) => {
  let games = [];
  let tempId = 0;
  for (let i = 0; i < 2; ) {
    let number = parseInt(Math.floor(Math.random() * state.gamesData.length));
    let obj = {
      id: state.gamesData[number].id,
      score: state.gamesData[number].rating,
      image: state.gamesData[number].background_image,
      name: state.gamesData[number].name,
      genre: state.gamesData[number].genres[0].name,
      released: state.gamesData[number].released,
      higher: false,
      lower: false,
    };
    if (tempId != obj.id) {
      if (obj.score != 0) {
        tempId = obj.id;
        games.push(obj);
        i++;
      }
    }
  }
  commit("SET_GAMES_TO_PLAY", games);
};

export const getAnimeData = async ({ dispatch, commit }) => {
  commit("SET_LOADING", true);
  let number = parseInt(Math.floor(Math.random() * 300) + 1);
  const response = await fetch(
    `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${number}`
  );
  if (response.status == 200) {
    const { data } = await response.json();
    commit("SET_ANIME_DATA", data);
    commit("SET_LOADING", false);
    dispatch("getAnimesToPlay");
  }
};

export const getAnimesToPlay = ({ state, commit }) => {
  let animes = [];
  let temp = 0;
  for (let i = 0; i < 2; ) {
    let number = Math.floor(parseInt(Math.random() * state.animeData.length));
    const obj = {
      id: state.animeData[number].id,
      enName: state.animeData[number].attributes.titles.en_jp,
      jpName: state.animeData[number].attributes.titles.ja_jp,
      imageOriginal: state.animeData[number].attributes.posterImage.original,
      imageLarge: state.animeData[number].attributes.posterImage.large,
      imageSmall: state.animeData[number].attributes.posterImage.small,
      score: state.animeData[number].attributes.averageRating,
      startDate: state.animeData[number].attributes.startDate,
      status: state.animeData[number].attributes.status,
      showType: state.animeData[number].attributes.showType,
      episodeCount: state.animeData[number].attributes.episodeCount,
      higher: false,
      lower: false,
      selected: false,
    };

    if (temp != obj.id) {
      if (obj.score != null) {
        if (obj.showType == "TV") {
          if (obj.enName != undefined) {
            if (obj.jpName != undefined) {
              temp = obj.id;
              i++;
              animes.push(obj);
            }
          }
        }
      }
    }
  }
  commit("SET_ANIMES_TO_PLAY", animes);
};

export const getSeriesData = async ({ dispatch, commit }) => {
  commit("SET_LOADING", true);
  const response = await fetch(`https://api.tvmaze.com/shows`);
  if (response) {
    let data = await response.json();
    commit("SET_SERIES_DATA", data);
    commit("SET_LOADING", false);
    dispatch("getSeriesToPlay");
  }
};

export const getSeriesToPlay = ({ state, commit }) => {
  let series = [];
  let temp = 0;
  for (let i = 0; i < 2; ) {
    let number = Math.floor(parseInt(Math.random() * state.seriesData.length));
    const obj = {
      id: state.seriesData[number].id,
      score: state.seriesData[number].rating.average,
      image: state.seriesData[number].image.medium,
      name: state.seriesData[number].name,
      genres: state.seriesData[number].genres,
      released: state.seriesData[number].premiered,
      higher: false,
      lower: false,
    };
    if (temp != obj.id) {
      if (obj.score != null) {
        if (obj.image != null) {
          temp = obj.id;
          series.push(obj);
          i++;
        }
      }
    }
  }
  commit("SET_SERIES_TO_PLAY", series);
};
