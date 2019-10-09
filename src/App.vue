<template>
  <div id="app">
    <Header/>
    <main id="main-content" class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/views/partials/header/header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import "src/scss/style.scss";
</style>
