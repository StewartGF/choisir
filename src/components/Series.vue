<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto text-center relative text-black h-full align-middle px-8 pb-8 pt-2"
    >
      <div v-if="isFirstEntry" class="pt-16">
        <span class="font-black text-4xl">Versión series 💣 !</span>
        <span class="block mt-6 font-bold text-2xl">Repasemos...</span>
        <span
          class="block text-lg tracking-tighter text-gray-700"
        >El objetivo es que selecciones la serie que creas que tiene más rating/puntuación entregado por la audiencia.</span>
        <span
          class="block mt-6 text-lg tracking-tighter text-gray-700"
        >Si estás listo, comencemos 🤓</span>
        <button
          class="border text-white bg-red-50 rounded-full mt-32 px-8 md:px-12 p-4 font-black hover:bg-red-20 hover:text-white tracking-tigh focus:outline-none"
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
          <div class="text-sm mt-12">Inténtalo de nuevo 👇</div>
          <button
            class="border text-white w-3/2 mx-auto bg-red-50 rounded-full mt-4 px-8 md:px-12 p-4 font-black hover:bg-red-20 duration-700 hover:text-white tracking-tigh focus:outline-none"
            @click="resetInstance"
          >Jugar de nuevo</button>
        </div>
        <div v-else class="relative">
          <status :puntuacion="puntuacionSeries" />
          <div class="grid container grid-cols-1 sm:grid-cols-2 gap-4 md:mt-12">
            <div v-for="serie in seriesToPlay" :key="serie.id" class="shadow-xl">
              <div
                :id="serie.id"
                :class="[serie.higher ? 'bg-green-500 text-white' : 'bg-white' , serie.lower ? 'bg-red-500 text-white' : 'bg-white']"
                class="group relative border-2 hover:border-4 hover:border-teal-50 p-2 w-full rounded overflow-hidden h-auto shadow-lg transition ease-out duration-500"
                @click="handleSelection(serie)"
              >
                <span
                  class="absolute font-bold text-lg top-0 right-0 mr-2 mt-2"
                  v-if="showScore"
                >⭐{{serie.score}}</span>
                <img
                  loading="lazy"
                  class="w-full p-2 h-32 lg:h-64 object-contain md:object-contain"
                  :src="serie.image"
                  alt="Sunset in the mountains"
                />
                <div class="px-1 py-1 lg:px-6 lg:py-4">
                  <div class="font-bold text-xl mb-2 w-full truncate lg:break-words">{{ serie.name}}</div>
                  <p class="text-base">Fecha de lanzamiento:{{serie.released}}</p>
                  <p class="text-gray-700 text-base font-black">
                    <span
                      v-for="genre in serie.genres"
                      :key="genre"
                      class="border group-hover:border-2 text-xs mx-1 border-full bg-gray-400 px-2 rounded-full"
                    >{{genre}}</span>
                  </p>
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
        "https://thumbs.gfycat.com/ViciousAnimatedBillygoat-size_restricted.gif",
        "https://media1.tenor.com/images/cb9e84863ed52388802d8580cf5b49c7/tenor.gif?itemid=17060644",
        "https://i.pinimg.com/originals/2a/97/4c/2a974c2ce8b18dc0d5e9b8ec357fec85.gif",
        "https://media1.tenor.com/images/b1c3e4a34c329e35f6a30f50fff9f668/tenor.gif?itemid=5428995",
        "https://media1.giphy.com/media/mQi5Hz0AdGOA/giphy.gif",
        "https://media0.giphy.com/media/l0HlweKafsHmQihJC/giphy.gif",
      ],
      selectedImage: null,
    };
  },
  computed: {
    ...mapState([
      "seriesData",
      "isLoading",
      "seriesToPlay",
      "puntuacionSeries",
      "lifes",
    ]), // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
  },
  mounted() {
    this.$store.dispatch("getSeriesData");
  },
  methods: {
    handleSelection(serie) {
      if (!this.flagScore) {
        let ordenRanking = [];
        if (
          this.$store.state.seriesToPlay[0].score >
          this.$store.state.seriesToPlay[1].score
        ) {
          ordenRanking.push(this.$store.state.seriesToPlay[0]);
          ordenRanking.push(this.$store.state.seriesToPlay[1]);
        } else {
          ordenRanking.push(this.$store.state.seriesToPlay[1]);
          ordenRanking.push(this.$store.state.seriesToPlay[0]);
        }
        ordenRanking[0].higher = true;
        ordenRanking[1].lower = true;
        this.showScore = !this.showScore;
        if (serie.id == ordenRanking[0].id) {
          this.$store.state.puntuacionSeries++;
        } else {
          this.$store.state.lifes.pop();
        }
        this.flagScore = true; // para evitar bug de multiples clicks correctos
      } else {
        return;
      }
    },
    handleNext() {
      this.$store.dispatch("getSeriesToPlay");
      this.showScore = !this.showScore;
      this.flagScore = false;
    },
    resetInstance() {
      this.$store.state.puntuacionSeries = 0;
      this.isFirstEntry = true;
      this.$store.state.lifes = ["♥", "♥", "♥", "♥", "♥"];
      this.$store.dispatch("getSeriesToPlay");
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
    this.$store.state.puntuacionSeries = 0;
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