<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-xl text-black mr-6">
        <span>{{randomEmoji}}</span>
        <span class="font-semibold text-xl tracking-tight font-black">Choisir</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-black border-blue-400 hover:text-black hover:border-gray"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/"
            class="block mt-4 font-medium lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Inicio</router-link>
          <router-link
            to="/anime"
            class="block mt-4 font-medium lg:inline-block lg:mt-0 text-black hover:text-blue-400 mr-4"
          >Anime</router-link>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Download</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
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