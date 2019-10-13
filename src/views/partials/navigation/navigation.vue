<template>
    <nav class="nav" v-if="navdata">
        <router-link v-for="item in navdata" :key="item.slug" :to="item.url" class="nav__item">{{item.title}}</router-link>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getNavigations } from '@/services/navigation';

@Component({})
export default class Navigation extends Vue {
  private navdata: any[];

  constructor() {
    super();
    this.navdata = [];
  }
  private mounted(): void {
    getNavigations().then((res: any[]) => {
      this.navdata = res;
    });
  }
}
</script>

<style lang="scss" scoped>
  @import "navigation.scss";
</style>