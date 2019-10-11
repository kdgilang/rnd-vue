<template>
  <div class="page page-404">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>404</h1>
          <h3>Pege Not Found</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class PageNotFound extends Vue {}
</script>

<style lang="scss" scoped>
h1,
h3 {
  text-align: center;
}
h1 {
    margin-top: 3rem;
}
</style>