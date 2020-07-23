export const getGamesData = async ({ commit, dispatch }) => {
  let number = Math.floor(Math.random() * 10) + 1;
  commit("SET_LOADING", true);
  const response = await fetch(
    `https://api.rawg.io/api/games?page_size=40&page=${number}`
  );
  if (response.status == 200) {
    const { results: data } = await response.json(); //saco results y lo llamo data
    console.log(data);
    commit("SET_GAMES_DATA", data);
    commit("SET_LOADING", false);
    dispatch("getGamesToPlay");
  }
};

export const getGamesToPlay = ({ state, commit }) => {
  let games = [];
  for (let i = 0; i < 2; ) {
    let num = Math.floor(Math.random() * 40);
    let obj = {
      id: state.gamesData[num].id,
      score: state.gamesData[num].rating,
      image: state.gamesData[num].background_image,
      name: state.gamesData[num].name,
      genre: state.gamesData[num].genres[0].name,
      released: state.gamesData[num].released,
      higher: false,
      lower: false,
    };
    games.push(obj);
    i++;
  }
  commit("SET_GAMES_TO_PLAY", games);
};

export const getAnimeData = async ({ commit }) => {
  let payload = [];
  commit("SET_LOADING", true);
  for (let i = 0; i < 2; ) {
    let number = Math.floor(Math.random() * 12062) + 1;
    const response = await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=1&page[offset]=${number}`
    );
    if (response.status == 200) {
      const { data } = await response.json();
      const obj = {
        id: data[0].id,
        enName: data[0].attributes.titles.en_jp,
        jpName: data[0].attributes.titles.ja_jp,
        imageOriginal: data[0].attributes.posterImage.original,
        imageLarge: data[0].attributes.posterImage.large,
        score: data[0].attributes.averageRating,
        startDate: data[0].attributes.startDate,
        status: data[0].attributes.status,
        showType: data[0].attributes.showType,
        episodeCount: data[0].attributes.episodeCount,
        higher: false,
        lower: false,
        selected: false,
      };
      if (obj.score != null) {
        if (obj.showType == "TV") {
          if (obj.enName != undefined) {
            if (obj.jpName != undefined) {
              i++;
              payload.push(obj);
            }
          }
        }
      }
    }
  }
  commit("SET_ANIME_DATA", payload);
  commit("SET_LOADING", false);
};

export const getSeries = async ({ commit }) => {
  let payload = [];
  commit("SET_LOADING", true);
  for (let i = 0; i < 2; i++) {
    let letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${letter}`
    );
    console.log(response);
    if (response) {
      const dataLength = response.length;
      let index = Math.floor(Math.random() * dataLength) + 0;
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
