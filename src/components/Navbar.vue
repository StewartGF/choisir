<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-white p-4">
      <router-link to="/" class="flex items-center flex-shrink-0 text-xl text-black mr-6">
        <span class="text-xl lg:text-2xl tracking-thight font-black">Choisir</span>
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
            class="block mt-4 font-bold lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Inicio</router-link>
          <router-link
            to="/anime"
            class="block mt-4 font-bold lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Anime</router-link>
          <router-link
            to="/series"
            class="block mt-4 font-bold lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Series</router-link>
          <router-link
            to="/juegos"
            class="block mt-4 font-bold lg:px-6 tracking-wide lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Juegos</router-link>
          <a
            href="https://github.com/StewartGF"
            target="_blank"
            class="group inline-block mt-4 font-bold border-2 border-black rounded-full py-2 px-4 lg:px-2 lg:py-2 tracking-wide lg:inline-block lg:mt-0 text-black hover:border-blue-700 mr-4 hover:bg-blue-500 hover:text-white hover:border-2"
          >
            <span class="inline-block align-middle group-hover:bg-blue-500 group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-github stroke-current text-black group-hover:bg-blue-500 group-hover:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
                />
              </svg>
            </span> Github
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isOpen: false
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