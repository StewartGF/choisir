<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Lato";
  /* Remueve el fondo azul cuando clickeas algo en la pagina  https://stackoverflow.com/a/45050338/12533883*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* Remueve el fondo azul cuando clickeas algo en la pagina  https://stackoverflow.com/a/45050338/12533883*/
  box-sizing: border-box;
}
body {
  transition: background 0.25s ease-in-out;
  font-size: 14px;
}
</style>
