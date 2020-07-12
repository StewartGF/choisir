<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto text-center relative text-black h-full align-middle px-8 pb-8 pt-2"
    >
      <div id="firstblock" class="h-auto">
        <span class="font-black text-4xl tracking-wider">Bienvenido 🤗</span>
        <div class="mt-6 lg:mt-16">
          <section>¿Alguna vez te has preguntado que tan buenas son tus primeras impresiones?</section>
          <span class="font-medium text-lg">Descúbrelo ahora 👀</span>
          <div class="container flex justify-around m-auto text-center mt-6 lg:mt-16">
            <router-link
              class="border border-blue-500 rounded px-4 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white hover:border-black"
              to="/anime"
            >Anime</router-link>
            <router-link
              class="border border-blue-500 rounded px-4 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white hover:border-black"
              to="/series"
            >Series</router-link>
            <router-link
              class="border border-blue-500 rounded px-4 md:px-12 p-4 font-black hover:bg-blue-400 hover:text-white hover:border-black"
              to="/juegos"
            >Juegos</router-link>
          </div>
        </div>
        <hr class="text-blue-500 mt-12" />
        <div
          id="two-block-one"
          class="grid mt-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold"
        >
          <div
            class="self-center text-div w-full text-center lg:text-left px-12 lg:px-0 lg:ml-32 xl:ml-32"
          >
            <span>Sólo tómate tu tiempo, este es un proyecto hecho para pasar el rato 🙂, así que, relájate y veamos qué tal te va.</span>
            <span
              class="block pt-16 text-right text-blue-500 font-black"
            >Si estás preparado, ¿Comenzamos?</span>
          </div>
          <div class="image-div">
            <img class="h-48 w-full text-left" src="@/assets/undraw_relax.svg" alt="relax" />
          </div>
        </div>
      </div>
      <div id="secondblock" class="h-auto">
        <div
          id="two-block-two"
          class="grid mt-12 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold"
        >
          <div class="image-div">
            <img class="h-48 w-full text-left" src="@/assets/people_opinion.svg" alt="relax" />
          </div>
          <div
            class="self-center text-div w-full text-center lg:text-left px-12 lg:px-0 lg:mr-32 xl:mr-32"
          >
            <span>Los puntajes y rating son obtenidos de opinión de la gente, ningun resultado está manipulado por nosotros 🙅‍♂️</span>
            <span
              class="inline-block mt-8"
            >Te mostraremos portadas y deberás escoger cuál, según tú, tiene mejor puntaje promedio...</span>
          </div>
        </div>
        <hr class="text-blue-500 mt-12" />
        <div
          id="two-block-three"
          class="grid mt-6 lg:mt-12 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold"
        >
          <div
            class="self-center text-div w-full text-center lg:text-left px-12 lg:px-0 lg:mr-32 xl:mr-32"
          >
            <span>Toda la información la obtuvimos desde páginas relacionadas y dedicadas a cada tema.</span>
            <span
              class="inline-block mt-8"
            >Si te interesa saber más, por favor dirígete a las páginas web de Kitsu, Rawg y TVMazes para ver sus contenidos 🥰</span>
            <div class="grid grid-cols-3 mt-2 mb-4 lg:mt-8 m-auto text-center">
              <div class="flex m-auto">
                <a href="https://kitsu.io/explore/anime" target="_blank">
                  <img
                    class="rounded-full w-24 h-24 lg:w-32 lg:h-32 border border-blue-500 object-contain"
                    src="@/assets/kitsu.png"
                    alt
                  />
                </a>
              </div>
              <div class="flex m-auto">
                <a href="https://rawg.io/" target="_blank">
                  <img
                    class="rounded-full w-24 h-24 lg:w-32 lg:h-32 border border-blue-500 object-contain"
                    src="@/assets/rawg.png"
                    alt
                  />
                </a>
              </div>
              <div class="flex m-auto">
                <a href="https://www.tvmazes.com/" target="_blank">
                  <img
                    class="rounded-full w-24 h-24 lg:w-32 lg:h-32 border border-blue-500 object-scale-down"
                    src="@/assets/tvmazes.png"
                    alt
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="image-div order-first md:order-last">
            <img class="h-48 w-full text-left" src="@/assets/all_data.svg" alt="relax" />
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
  }
};
</script>

<style lang="css" scoped>
</style>