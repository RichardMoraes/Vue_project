<template>
<div class="wrapper">
  <div class="input-group">
    <form @submit.prevent="search">
    <div name="icon-box">
    <input class="search" type="text" placeholder="Insira o nome da Música aqui" v-model="musica.name"><span class="bar"></span>
    </div>
    <br>
      <ul class="list-group" v-for="musica of musicas" :key="musica.result.id">
        <li class="list-group-item">Musica: {{musica.result.full_title}}</li>
        <li class="list-group-item">Artista: {{musica.result.primary_artist.name}}</li>
        <li class="list-group-item"><img :src="musica.result.header_image_url" style="margin-left: 30px; width: 50px;height: 50px;" alt="Album"></li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <br>
    </form>
  </div>
  <div class="disclaimer"><a href="https://lhenrique.com.br/" target="_blank">💙</a></div>
  </div>
</template>

<script>
import Buscar from './services/search'

export default {

data(){
  return {
    musica: {
      name: ''
    },
    musicas: []
  }
},

methods:{

search(){
var params = {
  q: this.musica
}
Buscar.search(params).then(retorno =>{
  this.musicas = retorno.data.response.hits
})
}
}
}

</script>

<style>
body {
  margin: 0px;
}
.wrapper {
  background: linear-gradient(45deg, #26547c 0%, #06d6a0 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.wrapper .disclaimer {
  bottom: 15px;
  position: absolute;
}

.input-group {
  position: relative;
}
.input-group .search {
  height: 15px;
  width: 15px;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #fff;
  outline: none;
  padding: 5px;
  position: relative;
  transition: all 150ms cubic-bezier(0.2, 0.6, 0.252, 1.2);
}
.input-group .search ~ .bar {
  height: 4px;
  width: 15px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  position: absolute;
  display: block;
  opacity: 1;
  right: -9px;
  top: 24px;
  transform: rotate(45deg);
  transition: opacity 150ms ease;
}
.input-group .search::-moz-placeholder {
  color: #fff;
}
.input-group .search:-ms-input-placeholder {
  color: #fff;
}
.input-group .search::placeholder {
  color: #fff;
}
.input-group .search:focus {
  height: 25px;
  width: 200px;
  border-radius: 3px;
  color: #26547c;
  cursor: initial;
}
.input-group .search:focus::-moz-placeholder {
  color: #a1a1a1;
}
.input-group .search:focus:-ms-input-placeholder {
  color: #a1a1a1;
}
.input-group .search:focus::placeholder {
  color: #a1a1a1;
}
.input-group .search:focus ~ .bar {
  box-shadow: none;
  opacity: 0;
  right: 0;
  top: 5px;
}
</style>
