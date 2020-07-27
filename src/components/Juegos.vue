<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto text-center relative text-black h-full align-middle px-8 pb-8 pt-2"
    >
      <div v-if="isFirstEntry" class="pt-4">
        <span class="font-black text-4xl">Versión Juegos 🎮!</span>
        <span class="block mt-6 font-bold text-2xl">Repasemos...</span>
        <span
          class="block text-lg tracking-tighter text-gray-700"
        >El objetivo es que selecciones el juego que creas que tiene más rating/puntuación entregado por la audiencia.</span>
        <span
          class="block mt-6 text-lg tracking-tighter text-gray-700"
        >Si estás listo, comencemos 🤓</span>
        <button
          class="border text-white bg-red-50 rounded-full mt-24 px-8 md:px-12 p-4 font-black hover:bg-red-20 hover:text-white tracking-tigh focus:outline-none"
          @click="isFirstEntry = !isFirstEntry"
        >OK !</button>
      </div>
      <div v-else>
        <div v-if="isLoading" class="container mt-16">
          <loading-spinner />
        </div>
        <div v-else-if="lifes==0" class="grid grid-cols-1 w-full pt-12 gap-4">
          <div class="text-lg font-black">oh no.... Perdiste:(</div>
          <img :src="selectedImage" alt=":c" width="400" height="400" class="m-auto" />
          <p class="text-xl font-black">Obtuviste {{puntuacionGames}} puntos</p>
          <div class="text-sm mt-12">Inténtalo de nuevo 👇</div>
          <button
            class="border text-white w-3/2 mx-auto bg-red-50 rounded-full mt-4 px-8 md:px-12 p-4 font-black hover:bg-red-20 duration-700 hover:text-white tracking-tigh focus:outline-none"
            @click="resetInstance"
          >Jugar de nuevo</button>
        </div>
        <div v-else class="relative">
          <status :puntuacion="puntuacionGames" />
          <div class="grid container grid-cols-1 sm:grid-cols-2 gap-4 md:mt-12">
            <div v-for="game in gamesToPlay" :key="game.id" class="shadow-xl rounded">
              <div
                :id="game.id"
                :class="[game.higher ? 'bg-green-500 text-white' : 'bg-white' , game.lower ? 'bg-red-500 text-white' : 'bg-white']"
                class="group relative border-2 border-transparent hover:border-2 hover:border-teal-50 p-2 w-full rounded overflow-hidden h-auto shadow-lg transition ease-out duration-500"
                @click="handleSelection(game)"
              >
                <span
                  class="absolute font-bold text-base md:text-md top-0 right-0 mr-2 mt-2"
                  v-if="showScore"
                >⭐{{game.score}}</span>
                <div class="overflow-hidden w-2/3 m-auto">
                  <img
                    loading="lazy"
                    class="w-full p-0 md:p-8 h-32 lg:h-64 object-contain duration-500 transform scale-100 group-hover:scale-125 md:group-hover:scale-110"
                    :src="game.image"
                    alt="imagen"
                  />
                </div>
                <div class="px-1 py-1 lg:px-6 lg:py-4">
                  <div
                    class="font-bold text-xs md:text-lg mb-2 w-full truncate lg:break-words"
                  >{{ game.name}}</div>
                  <p class="text-gray-700 font-medium">
                    <span
                      class="border-2 text-xs border-full bg-gray-400 px-2 rounded-full"
                    >{{game.genre}}</span>
                  </p>
                  <p class="text-base">Lanzamiento:{{game.released}}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="border text-white bg-red-50 rounded-full mt-4 px-8 md:px-12 p-4 font-black hover:bg-red-20 hover:text-white tracking-tigh focus:outline-none"
            @click="handleNext"
            v-if="showScore"
          >Siguiente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import Status from "./Status.vue";
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      isFirstEntry: true,
      showScore: false,
      flagScore: false,
      counting: 0,
      doReload: false,
      images: [
        "https://media1.giphy.com/media/joxThEgTJuSBO/200.gif",
        "https://24.media.tumblr.com/f0f30f5c19c05f6dac880bd04cf6474d/tumblr_mnqi7wp3QG1st1qmso1_500.gif",
        "https://66.media.tumblr.com/00fde2ac678bd0029828dd5c3137fda6/tumblr_pydh7piLSr1xscx7go1_500.gif",
        "https://media1.tenor.com/images/6b85c056bac3c0f852e509dc447ed1f8/tenor.gif?itemid=8028477",
        "https://i.gifer.com/2kl1.gif",
        "https://media1.tenor.com/images/8a7dc66315e99c4332d76a02feedae58/tenor.gif?itemid=13443909",
        "https://pa1.narvii.com/6889/af8a870f7167f836762bef0af49b617ec3a5140fr1-500-260_hq.gif",
        "https://media1.tenor.com/images/f6a401f2a0973c59c838f035d271a56a/tenor.gif?itemid=12394354",
        "https://media1.tenor.com/images/1bc416a26ff4381e645691b6e7c5212b/tenor.gif?itemid=12873427",
      ],
      selectedImage: null,
    };
  },
  computed: {
    ...mapState([
      "gameData",
      "isLoading",
      "gamesToPlay",
      "puntuacionGames",
      "lifes",
    ]), // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
  },
  mounted() {
    this.$store.dispatch("getGamesData");
  },
  methods: {
    handleSelection(game) {
      if (!this.flagScore) {
        let ordenRanking = [];
        if (
          this.$store.state.gamesToPlay[0].score >
          this.$store.state.gamesToPlay[1].score
        ) {
          ordenRanking.push(this.$store.state.gamesToPlay[0]);
          ordenRanking.push(this.$store.state.gamesToPlay[1]);
        } else {
          ordenRanking.push(this.$store.state.gamesToPlay[1]);
          ordenRanking.push(this.$store.state.gamesToPlay[0]);
        }
        ordenRanking[0].higher = true;
        ordenRanking[1].lower = true;
        this.showScore = !this.showScore;
        if (game.id == ordenRanking[0].id) {
          this.$store.state.puntuacionGames++;
        } else {
          this.$store.state.lifes.pop();
        }
        this.flagScore = true; // para evitar bug de multiples clicks correctos
      } else {
        return;
      }
    },
    handleNext() {
      if (this.$store.state.puntuacionGames == this.counting + 10) {
        this.counting = this.$store.state.puntuacionGames;
        this.doReload = true;
      }

      if (this.doReload) {
        this.$store.dispatch("getGamesData");
        this.showScore = !this.showScore;
        this.flagScore = false;
        this.doReload = false;
      } else {
        this.$store.dispatch("getGamesToPlay");
        this.showScore = !this.showScore;
        this.flagScore = false;
      }
    },
    resetInstance() {
      this.$store.state.puntuacionGames = 0;
      this.isFirstEntry = true;
      this.$store.state.lifes = ["♥", "♥", "♥", "♥", "♥"];
      this.$store.dispatch("getGamesToPlay");
      this.showScore = !this.showScore;
      this.flagScore = false;
    },
  },
  components: {
    Navbar,
    LoadingSpinner,
    Status,
  },
  beforeDestroy() {
    this.$store.state.puntuacionGames = 0;
    this.$store.state.lifes = ["♥", "♥", "♥", "♥", "♥"];
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  },
};
</script>

<style lang="css" scoped>
</style>