<template>
    <nav :class="classname" v-if="navdata">
        <a v-for="item in navdata" :key="item.slug" :href="item.url" class="nav__item">{{item.title}}</a>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { getNavigations } from '@/services/navigation';

@Component({})
export default class Navigation extends Vue {
  @Prop({default: 'nav'})
  private classname?: string;
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