<template>
  <div class="grid grid-cols-2">
    <div class="font-black flex justify-end">Puntuación:</div>
    <div class="font-black flex m-auto">{{puntuacion}}</div>
    <div class="font-black flex justify-end">Vidas:</div>
    <div class="flex flex-wrap m-auto">
      <img
        v-for="(life, index) in lifes"
        :key="index"
        loading="lazy"
        class="h-4 w-4 md:h-6 md:w-6 mx-1"
        src="@/assets/corazon.svg"
        alt="relax"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["lifes", "puntuacionAnime"]),
  },
  props: ["puntuacion"],
};
</script>

<style lang="scss" scoped>
</style>