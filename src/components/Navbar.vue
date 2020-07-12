<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <router-link to="/" class="flex items-center flex-shrink-0 text-xl text-black mr-6">
        <span>{{randomEmoji}}</span>
        <span class="font-semibold text-xl tracking-wider font-black">Choisir</span>
      </router-link>
      <div class="block lg:hidden">
        <button
          @click="isOpen = !isOpen"
          class="flex items-center px-3 py-2 border rounded text-black border-blue-400 hover:text-black hover:border-gray"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/"
            class="block mt-4 font-medium lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Inicio</router-link>
          <router-link
            to="/anime"
            class="block mt-4 font-medium lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Anime</router-link>
          <router-link
            to="/anime"
            class="block mt-4 font-medium lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Películas</router-link>
          <router-link
            to="/anime"
            class="block mt-4 font-medium lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Juegos</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isOpen: false,
      emojis: [
        "🥰",
        "😎",
        "🧐",
        "🤔",
        "🤐",
        "🔥",
        "😏",
        "😁",
        "😌",
        "✌",
        "🤩",
        "🤗",
        "🙂",
        "😲",
        "😳",
        "🤭",
        "🤓",
        "👾",
        "🙊",
        "👀"
      ]
    };
  },
  computed: {
    randomEmoji: function() {
      return this.emojis[Math.floor(Math.random() * this.emojis.length)];
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>