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
        <div class="grid container grid-cols-1 sm:grid-cols-2 gap-4 md:mt-12">
          <div v-for="anime in animeData" :key="anime.enName">
            <div
              class="group border-2 hover:border-4 hover:bg-blue-500 hover:text-white hover:border-blue-700 p-2 w-full rounded overflow-hidden h-auto shadow-lg"
              @click="alert(anime)"
            >
              <img
                loading="lazy"
                class="w-full h-56 lg:h-64 object-contain md:object-contain"
                :src="anime.imageOriginal ? anime.imageOriginal : anime.imageLarge"
                alt="Sunset in the mountains"
              />
              <div class="px-1 py-1 lg:px-6 lg:py-4">
                <div class="font-bold text-xl mb-2 w-full">{{ anime.enName}}</div>
                <p class="text-gray-700 text-base font-medium">
                  <span
                    class="border group-hover:border-2 text-xs border-full bg-gray-400 px-2 rounded-full"
                  >{{anime.jpName}}</span>
                </p>
                <p
                  class="text-gray-700 text-base group-hover:text-white"
                >Episodios: {{anime.episodeCount}}</p>
                <p
                  class="text-gray-700 text-base group-hover:text-white"
                >Fecha de emisión:{{anime.startDate}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {
      isFirstEntry: true
    };
  },
  computed: {
    ...mapState(["animeData"]) // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
  },
  mounted() {
    this.$store.dispatch("getAnimeData");
  },
  methods: {
    alert(obj) {
      alert("clickea3" + obj);
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="css" scoped>
</style>