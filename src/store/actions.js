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
    if (tempId != 0) {
      if (tempId == state.gamesData[number].id) {
        continue;
      }
    }
    tempId = state.gamesData[number].id;
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
    if (obj.score != 0) {
      games.push(obj);
      i++;
    }
  }
  commit("SET_GAMES_TO_PLAY", games);
};

export const getAnimeData = async ({ dispatch, commit }) => {
  commit("SET_LOADING", true);
  let number = parseInt(Math.floor(Math.random() * 100) + 1);
  console.log("llamada a offset", number);
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
  let tempId = 0;

  for (let i = 0; i < 2; ) {
    let number = Math.floor(parseInt(Math.random() * state.animeData.length));
    console.log("number", number, "vuelta", i);
    if (tempId != 0) {
      if (tempId == state.animeData[number].id) {
        continue;
      }
    }
    tempId = state.animeData[number].id;
    const obj = {
      id: state.animeData[number].id,
      enName: state.animeData[number].attributes.titles.en_jp,
      jpName: state.animeData[number].attributes.titles.ja_jp,
      imageOriginal: state.animeData[number].attributes.posterImage.original,
      imageLarge: state.animeData[number].attributes.posterImage.large,
      score: state.animeData[number].attributes.averageRating,
      startDate: state.animeData[number].attributes.startDate,
      status: state.animeData[number].attributes.status,
      showType: state.animeData[number].attributes.showType,
      episodeCount: state.animeData[number].attributes.episodeCount,
      higher: false,
      lower: false,
      selected: false,
    };
    if (obj.score != null) {
      if (obj.showType == "TV") {
        if (obj.enName != undefined) {
          if (obj.jpName != undefined) {
            i++;
            animes.push(obj);
          }
        }
      }
    }
  }
  commit("SET_ANIMES_TO_PLAY", animes);
};

export const getSeries = async ({ commit }) => {
  let payload = [];
  commit("SET_LOADING", true);
  for (let i = 0; i < 2; i++) {
    let letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${letter}`
    );
    if (response) {
      const dataLength = response.length;
      let index = parseInt(Math.floor(Math.random() * dataLength) + 0);
      const data = await response.json();
      const obj = {
        name: data[index].show.name,
        image: data[index].show.image.original,
        score: data[index].score,
      };
      payload.push(obj);
    }
  }
  commit("SET_SERIES_DATA", payload);
  commit("SET_LOADING", false);
};
