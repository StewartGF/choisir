<template>
  <div>
    <Navbar />
    <div
      class="container mx-auto relative text-center text-black h-screen align-middle px-8 pb-8 pt-2"
    >
      <span class="font-black text-4xl">Bienvenido 🤗</span>
      <section>¿Alguna vez te has preguntado que tan buenas son tus primeras impresiones?</section>
      <div class="mt-16">
        <span class="font-medium text-lg">Descúbrelo ahora 👀</span>
        <div class="container flex m-auto text-center mt-16">
          <router-link
            class="border border-blue-500 flex-1 rounded p-5 font-black hover:bg-blue-400 hover:text-white hover:border-black mr-16"
            to="/anime"
          >Anime</router-link>
          <router-link
            class="border border-blue-500 flex-1 rounded p-5 font-black hover:bg-blue-400 hover:text-white hover:border-black"
            to="/"
          >Películas</router-link>
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