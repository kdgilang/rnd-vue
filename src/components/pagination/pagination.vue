<template>
  <div class="pagination" v-if="items">
    <div class="pagination__inner visible-lg" v-if="paging">
      <div class="pagination__label">{{label}}</div>
      <div class="pagination__content" v-if="isPaged">
        <span class="pagination__item pagination__item_left"></span>
        <span
          v-for="val in paging"
          :key="val"
          :class="`pagination__item ${selectedIndexPage === val && 'active'}`"
        >{{val}}</span>
        <span class="pagination__item pagination__item_right"></span>
      </div>
    </div>
    <button class="button pagination__single hidden-lg">Load more</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PostListModel from '@/models/postlist';
@Component({})
export default class Pagination extends Vue {
  @Prop({ default: () => [] })
  private items!: PostListModel[];
  @Prop({ default: 5 })
  private itemsPerPage!: number;
  private selectedIndexPage: number;

  constructor() {
    super();
    this.selectedIndexPage = 1;
  }

  get paging(): number[] {
    const itemslen = this.items.length;
    const arr = itemslen / this.itemsPerPage;
    return Array.from({ length: arr }, (v, i) => i + 1);
  }
  get isPaged(): boolean {
    return this.items.length > this.itemsPerPage;
  }
  get label(): string {
    const itemslen = this.items.length;
    const perpage = this.isPaged ? this.itemsPerPage : itemslen;
    return `Viewing 1-${perpage} of ${itemslen} results`;
  }
}
</script>

<style lang="scss">
@import "pagination";
</style>