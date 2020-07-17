<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto text-center relative text-black h-full align-middle px-8 pb-8 pt-2"
    >
      <div id="firstblock" class="h-auto">
        <span class="font-black text-5xl lg:text-6xl tracking-tighter">Bienvenido 🤗</span>
        <div class="mt-6 lg:mt-16">
          <span
            class="text-gray-700 font-bold text-lg block tracking-tighter"
          >¿Alguna vez te has preguntado que tan buenas son tus primeras impresiones?</span>
          <span class="text-gray-700 font-bold text-xl tracking-tighter">Descúbrelo ahora 👀</span>
          <div class="container flex justify-around m-auto text-center mt-6 lg:mt-16">
            <router-link
              class="border text-white bg-blue-500 rounded-full px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tight"
              to="/anime"
            >Anime</router-link>
            <router-link
              class="border text-white bg-blue-500 rounded-full px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tight"
              to="/series"
            >Series</router-link>
            <router-link
              class="border text-white bg-blue-500 rounded-full px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tight"
              to="/juegos"
            >Juegos</router-link>
          </div>
        </div>
        <div
          id="two-block-one"
          class="grid mt-16 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold tracking-tighter text-gray-700"
        >
          <div class="self-center text-div w-full text-center lg:text-left px-8 lg:px-12">
            <span
              class="block text-left text-black font-black tracking-tight text-xl lg:text-3xl"
            >Si estás preparado, ¿Comenzamos?</span>
            <span
              class="tracking-tighter text-gray-700"
            >Sólo tómate tu tiempo, este es un proyecto hecho para pasar el rato 🙂, así que, relájate y veamos qué tal te va.</span>
          </div>
          <div class="image-div relative">
            <img
              loading="lazy"
              class="h-48 w-full text-left"
              src="@/assets/undraw_relax.svg"
              alt="relax"
            />
          </div>
        </div>
      </div>
      <div id="secondblock" class="h-auto">
        <div
          id="two-block-two"
          class="grid gap-4 mt-12 py-16 lg:py-32 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold tracking-tight"
        >
          <div class="image-div">
            <img
              loading="lazy"
              class="w-full text-left"
              src="@/assets/people_opinion.svg"
              alt="opinion"
            />
          </div>
          <div class="self-center h-auto text-div w-full text-center lg:text-left px-12 lg:px-8">
            <span class="block text-5xl font-bold tracking-tight">Sin sesgo</span>
            <span class="tracking-tighter text-gray-700">
              Los puntajes y rating son obtenidos de opinión de la gente y son calculados en promedio de cada una de ellas. Usamos estas plataformas
              especializadas en los diferentes rubros para tener una información que sea justa y así hacerlo más entretenido.
            </span>
            <span
              class="inline-block mt-8 tracking-tighter text-gray-700"
            >Te mostraremos portadas y deberás escoger cuál, según tú, tiene mejor puntaje promedio...simple, ¿ no ? 🤔</span>
            <span class="block tracking-tighter text-gray-700 mt-4">Inténtalo !</span>
            <button
              @click="locationHref"
              class="mt-12 border text-white bg-blue-500 rounded-full px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tight"
            >Démosle</button>
          </div>
        </div>
        <div
          id="two-block-three"
          class="grid py-24 lg:mt-2 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold"
        >
          <div class="self-center text-div w-full text-center lg:text-left px-12 lg:px-8">
            <span class="block text-5xl font-bold tracking-tight">Información y Rankings</span>
            <span
              class="inline-block mt-4 tracking-tighter text-gray-700"
            >Si te interesa saber más, por favor dirígete a las páginas web de Kitsu, Rawg y TVMazes para ver sus contenidos 🥰</span>
            <span
              class="inline-block mt-4 tracking-tighter text-gray-700"
            >Kitsu se especializa en Anime, Rawg en Juegos y TVAmaze en Series, échales un vistazo !</span>
            <div class="grid grid-cols-3 mt-2 mb-4 lg:mt-8 m-auto text-center">
              <div class="flex m-auto">
                <a href="https://kitsu.io/explore/anime" target="_blank">
                  <img
                    loading="lazy"
                    class="rounded-full w-20 h-20 lg:w-32 lg:h-32 border border-blue-500 object-contain"
                    src="@/assets/kitsu.png"
                    alt
                  />
                </a>
              </div>
              <div class="flex m-auto">
                <a href="https://rawg.io/" target="_blank">
                  <img
                    loading="lazy"
                    class="rounded-full w-20 h-20 lg:w-32 lg:h-32 border border-blue-500 object-contain"
                    src="@/assets/rawg.png"
                    alt
                  />
                </a>
              </div>
              <div class="flex m-auto">
                <a href="https://www.tvmazes.com/" target="_blank">
                  <img
                    loading="lazy"
                    class="rounded-full w-20 h-20 lg:w-32 lg:h-32 border border-blue-500 object-scale-down"
                    src="@/assets/tvmazes.png"
                    alt
                  />
                </a>
              </div>
            </div>
            <span
              class="block w-full mt-4 tracking-tighter text-gray-700"
            >Entonces, ¿te tinca jugar ahora?</span>
            <button
              @click="locationHref"
              class="mt-6 block border text-white bg-blue-500 rounded-full px-8 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white tracking-tight"
            >Jugar</button>
          </div>
          <div class="image-div order-first md:order-last">
            <img loading="lazy" class="w-full text-left" src="@/assets/all_data.svg" alt="relax" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  methods: {
    locationHref() {
      location.href = "#firstblock";
    }
  }
};
</script>

<style lang="css" scoped>
</style>