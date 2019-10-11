<template>
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="category__content">
            <div v-for="item in catList" :key="item.id"  class="category__list">
              <span class="category__label">{{item.title}}</span>
            </div>
            <div v-if="showMore" class="category__list">
              <span class="category__label">More
                <img class="category__icon" src="../../../assets/images/icons/arrow-down@2x.png" alt="icon">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getCategories } from '@/services/category';

@Component({})
export default class Category extends Vue {
  private catlist: any[];
  private categories: any;

  constructor() {
    super();
    this.catlist = [];
    this.categories = [];
  }
  private mounted() {
    getCategories().then((res: any) => {
      this.categories = res;
    });
  }
  get showMore(): boolean {
    const list  = (this.categories && this.categories.list) || [];
    return list.length > 6;
  }
  get catList(): any[] {
    const list  = (this.categories && this.categories.list) || [];
    this.catlist = list;
    return list;
  }
  set catList(val: any[]) {
    this.catlist = val;
  }
}
</script>

<style lang="scss" scoped>
@import "category";
</style>