<template>
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="category__content">
            <div v-for="item in showedCatList" :key="item.id" class="category__list">
              <span class="category__label">{{item.title}}</span>
            </div>
            <div v-if="showMore" class="category__list">
              <div class="category__label">
                More
                <img
                  class="category__icon"
                  src="../../../assets/images/icons/arrow-down@2x.png"
                  alt="icon"
                />
              </div>
              <div class="dropdown">
                <div class="dropdown__inner">
                  <div v-for="item in hiddenCatList" :key="item.id" class="dropdown__item">
                    <div class="dropdown__button">
                      <span class="dropdown__label">{{item.title}}</span>
                    </div>
                  </div>
                </div>
              </div>
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
  private categories: any;

  constructor() {
    super();
    this.categories = [];
  }
  private mounted() {
    getCategories().then((res: any) => {
      this.categories = res;
    });
  }
  get showedCatList(): any[] {
    return this.catList.filter((val: any, i: number) => (i < 6 && val) );
  }
  get hiddenCatList(): any[] {
    return this.catList.filter((val: any, i: number) => (i > 5 && val) );
  }
  get showMore(): boolean {
    const list = (this.categories && this.categories.list) || [];
    return list.length > 6;
  }
  get catList(): any[] {
    const list = (this.categories && this.categories.list) || [];
    return list;
  }
}
</script>

<style lang="scss" scoped>
@import "category";
</style>