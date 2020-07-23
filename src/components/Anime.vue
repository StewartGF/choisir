<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto text-center relative text-black h-full align-middle px-8 pb-8 pt-2"
    >
      <div v-if="isFirstEntry">
        <span class="font-black text-4xl">Versión Anime !💥</span>
        <span class="block mt-6 font-bold text-2xl">Repasemos...</span>
        <span
          class="block text-lg tracking-tighter text-gray-700"
        >El objetivo es que selecciones el anime que creas que tiene más rating/puntuación por la audiencia.</span>
        <span
          class="block mt-6 text-lg tracking-tighter text-gray-700"
        >Si estás listo, comencemos 🤓</span>
        <button
          class="border text-white bg-blue-500 rounded-full mt-32 px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tigh focus:outline-none"
          @click="isFirstEntry = !isFirstEntry"
        >OK !</button>
      </div>
      <div v-else>
        <div v-if="isLoading" class="container mt-16">
          <loading-spinner />
        </div>
        <div v-else class="relative">
          <span class="float-left top-0 my-4 font-black">Puntuación: {{puntuacionAnime}}</span>
          <div class="grid container grid-cols-1 sm:grid-cols-2 gap-4 md:mt-12">
            <div v-for="anime in animeData" :key="anime.enName" class>
              <div
                :id="anime.id"
                :class="[ anime.higher ? 'bg-green-500 text-white' : 'bg-white' , anime.lower ? 'bg-red-500 text-white' : 'bg-white']"
                class="group relative border-2 hover:border-4 hover:border-blue-700 p-2 w-full rounded overflow-hidden h-auto shadow-lg transition ease-out duration-500"
                @click="handleSelection(anime)"
              >
                <span
                  class="absolute font-bold text-xl top-0 right-0 mr-5"
                  v-if="showScore"
                >⭐{{anime.score}}</span>
                <img
                  loading="lazy"
                  class="w-full h-32 lg:h-64 object-contain md:object-contain"
                  :src="anime.imageLarge"
                  alt="Sunset in the mountains"
                />
                <div class="px-1 py-1 lg:px-6 lg:py-4">
                  <div
                    class="font-bold text-xl mb-2 w-full truncate lg:break-words"
                  >{{ anime.enName}}</div>
                  <p class="text-gray-700 text-base font-medium">
                    <span
                      class="border group-hover:border-2 text-xs border-full bg-gray-400 px-2 rounded-full"
                    >{{anime.jpName}}</span>
                  </p>
                  <p class="text-base">Episodios: {{anime.episodeCount}}</p>
                  <p class="text-base">Fecha de emisión:{{anime.startDate}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="border text-white bg-blue-500 rounded-full mt-4 px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tigh focus:outline-none"
          @click="handleNext"
          v-if="showScore"
        >Siguiente</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {
      isFirstEntry: true,
      showScore: false,
      flagScore: false
    };
  },
  computed: {
    ...mapState(["animeData", "isLoading", "puntuacionAnime"]) // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
  },
  mounted() {
    this.$store.dispatch("getAnimeData");
  },
  methods: {
    handleSelection(anime) {
      if (!this.flagScore) {
        let ordenRanking = [];
        if (
          this.$store.state.animeData[0].score >
          this.$store.state.animeData[1].score
        ) {
          ordenRanking.push(this.$store.state.animeData[0]);
          ordenRanking.push(this.$store.state.animeData[1]);
        } else {
          ordenRanking.push(this.$store.state.animeData[1]);
          ordenRanking.push(this.$store.state.animeData[0]);
        }
        ordenRanking[0].higher = true;
        ordenRanking[1].lower = true;
        this.showScore = !this.showScore;

        if (anime.id == ordenRanking[0].id) {
          this.$store.state.puntuacionAnime++;
        }
        this.flagScore = true; // para evitar bug de multiples clicks correctos
      } else {
        return;
      }
    },
    handleNext() {
      this.$store.dispatch("getAnimeData");
      this.showScore = !this.showScore;
      this.flagScore = false;
    }
  },
  components: {
    Navbar,
    LoadingSpinner
  }
};
</script>

<style lang="css" scoped>
</style>