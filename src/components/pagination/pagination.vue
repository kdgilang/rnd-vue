<template>
  <div class="pagination" v-if="items.length">
    <div class="pagination__inner visible-lg">
      <div class="pagination__label">{{label}}</div>
      <div class="pagination__content" v-if="isPaged">
        <span @click="onPagination('prev')" class="pagination__item pagination__item_left"></span>
        <span
          v-for="val in paging"
          :key="val"
          :class="`pagination__item ${selectedIndexPage === val && 'active'}`"
          @click="onPagination(val)"
        >{{val+1}}</span>
        <span @click="onPagination('next')" class="pagination__item pagination__item_right"></span>
      </div>
    </div>
    <button class="button pagination__single hidden-lg">Load more</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
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
    this.selectedIndexPage = 0;
  }

  get paging(): number[] {
    const { items, itemsPerPage } = this;
    const len = Math.ceil(items.length / itemsPerPage);
    return Array.from({ length: len }, (v, i) => i);
  }
  get isPaged(): boolean {
    return this.items.length > this.itemsPerPage;
  }
  get label(): string {
    const { isPaged, items, itemsPerPage, selectedIndexPage } = this;
    const cpage = selectedIndexPage ? selectedIndexPage * itemsPerPage : 1;
    const lpage =
      (selectedIndexPage + 1) * itemsPerPage > items.length
        ? items.length
        : (selectedIndexPage + 1) * itemsPerPage;
    return `Viewing ${cpage}-${lpage} of ${items.length} results`;
  }
  private onPagination(val): void {
    const { items, itemsPerPage, paging } = this;
    const len = paging.length - 1;
    if (val === 'prev' && this.selectedIndexPage > 0) {
      this.selectedIndexPage--;
    }
    if (val === 'next' && this.selectedIndexPage < len) {
      this.selectedIndexPage++;
    }
    if (typeof val === 'number') {
      this.selectedIndexPage = val;
    }
    const cpage = this.selectedIndexPage * itemsPerPage;
    const lpage = (this.selectedIndexPage + 1) * itemsPerPage;
    const pagedItems = items.slice(cpage, lpage);
    this.emitPagination(pagedItems, this.selectedIndexPage);
  }
  @Emit('onPagination')
  private emitPagination(items: PostListModel[], index: number): void {
    const dev = 'gilang';
  }
}
</script>

<style lang="scss">
@import "pagination";
</style>