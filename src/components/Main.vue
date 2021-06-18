<template>
<div class="wrapper">
  <div class="input-group">
    <input class="search" type="text" placeholder="Searching for something?"/><span class="bar"></span>
  </div>
  <div class="disclaimer"><a href="https://lhenrique.com.br/" target="_blank">💙</a></div>
</div>
</template>

<script>
export default {
  name: 'App',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
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
