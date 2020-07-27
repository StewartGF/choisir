<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto text-center relative text-black h-full align-middle px-8 pb-8 pt-2"
    >
      <div v-if="isFirstEntry" class="pt-4">
        <span class="font-black text-4xl">Versión Anime !💥</span>
        <span class="block mt-6 font-bold text-2xl">Repasemos...</span>
        <span
          class="block text-lg tracking-tighter text-gray-700"
        >El objetivo es que selecciones el anime que creas que tiene más rating/puntuación por la audiencia.</span>
        <span
          class="block mt-6 text-lg tracking-tighter text-gray-700"
        >Si estás listo, comencemos 🤓</span>
        <button
          class="border text-white bg-red-50 rounded-full mt-24 px-8 md:px-12 p-4 font-black hover:bg-red-20 duration-700 hover:text-white tracking-tigh focus:outline-none"
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
          <p class="text-xl font-black">Obtuviste {{puntuacionAnime}} puntos</p>
          <div class="text-sm mt-12">Inténtalo de nuevo 👇</div>
          <button
            class="border text-white w-3/2 mx-auto bg-red-50 rounded-full mt-4 px-8 md:px-12 p-4 font-black hover:bg-red-20 duration-700 hover:text-white tracking-tigh focus:outline-none"
            @click="resetInstance"
          >Jugar de nuevo</button>
        </div>
        <div v-else class="relative">
          <status :puntuacion="puntuacionAnime" />
          <div class="grid container grid-cols-1 sm:grid-cols-2 gap-2 md:mt-12 rounded">
            <div v-for="anime in animesToPlay" :key="anime.id+1" class="shadow-xl rounded">
              <div
                :id="anime.id"
                :class="[ anime.higher ? 'bg-green-500 text-white' : 'bg-white' , anime.lower ? 'bg-red-500 text-white' : 'bg-white']"
                class="group relative p-2 border-2 border-transparent hover:border-teal-50 w-full rounded cursor-pointer h-auto shadow-lg transition ease-out duration-500"
                @click="handleSelection(anime)"
              >
                <span
                  class="absolute font-bold text-base md:text-lg top-0 right-0 mr-5"
                  v-if="showScore"
                >⭐{{anime.score}}</span>
                <div class="overflow-hidden">
                  <img
                    loading="lazy"
                    class="w-full h-32 lg:h-64 object-contain duration-500 transform scale-100 group-hover:scale-125 md:group-hover:scale-110"
                    :src="anime.imageSmall ? anime.imageSmall : anime.imageLarge ? anime.imageLarge : anime.imageOriginal"
                    alt="animeimage"
                  />
                </div>
                <div class="px-1 py-0 lg:px-6 lg:py-4">
                  <div
                    class="font-bold text-xs md:text-lg mb-0 md:mb-2 w-full truncate lg:break-words"
                  >{{ anime.enName}}</div>
                  <p class="text-gray-700 text-xs font-black">
                    <span
                      class="border-2 border-full bg-gray-400 px-2 rounded-full"
                    >{{anime.jpName}}</span>
                  </p>
                  <p class="text-xs">Episodios: {{anime.episodeCount}}</p>
                  <p class="text-xs">Fecha de emisión:{{anime.startDate}}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="border text-white bg-red-50 rounded-full mt-4 px-8 md:px-12 p-4 font-black hover:bg-red-20 duration-700 hover:text-white tracking-tigh focus:outline-none"
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
        "https://media1.tenor.com/images/9a8399e7957c588732138a00ebf0998a/tenor.gif?itemid=15819739",
        "https://media1.tenor.com/images/40f50caa699d4fd0eb3a22b202146cc7/tenor.gif?itemid=5575883",
        "https://media1.tenor.com/images/4b29b985a1eaaa1274ed9c3d43d3a684/tenor.gif?itemid=14126077",
        "https://media1.tenor.com/images/0a1b232ab53d45991d021e995fc58e31/tenor.gif?itemid=14126294",
        "https://media1.tenor.com/images/2365198c1bdc692d6451e95edab472bf/tenor.gif?itemid=14397689",
        "https://media1.tenor.com/images/5ab219fa808997aedcdea635b147a698/tenor.gif?itemid=14366312",
      ],
      selectedImage: null,
    };
  },
  computed: {
    ...mapState(["animesToPlay", "isLoading", "puntuacionAnime", "lifes"]), // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
  },
  mounted() {
    this.$store.dispatch("getAnimeData");
  },
  methods: {
    handleSelection(anime) {
      if (!this.flagScore) {
        let ordenRanking = [];
        if (
          this.$store.state.animesToPlay[0].score >
          this.$store.state.animesToPlay[1].score
        ) {
          ordenRanking.push(this.$store.state.animesToPlay[0]);
          ordenRanking.push(this.$store.state.animesToPlay[1]);
        } else {
          ordenRanking.push(this.$store.state.animesToPlay[1]);
          ordenRanking.push(this.$store.state.animesToPlay[0]);
        }
        ordenRanking[0].higher = true;
        ordenRanking[1].lower = true;

        if (anime.id == ordenRanking[0].id) {
          this.$store.state.puntuacionAnime++;
        } else {
          this.$store.state.lifes.pop();
        }
        this.showScore = !this.showScore;

        this.flagScore = true; // para evitar bug de multiples clicks correctos
      } else {
        return;
      }
    },
    handleNext() {
      if (this.$store.state.puntuacionAnime == this.counting + 5) {
        this.counting = this.$store.state.puntuacionAnime;
        this.doReload = true;
      }

      if (this.doReload) {
        this.$store.dispatch("getAnimeData");
        this.showScore = !this.showScore;
        this.flagScore = false;
        this.doReload = false;
      } else {
        this.$store.dispatch("getAnimesToPlay");
        this.showScore = !this.showScore;
        this.flagScore = false;
      }
    },
    resetInstance() {
      this.$store.state.puntuacionAnime = 0;
      this.isFirstEntry = true;
      this.$store.state.lifes = ["♥", "♥", "♥", "♥", "♥"];
      this.$store.dispatch("getAnimesToPlay");
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
    this.$store.state.puntuacionAnime = 0;
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