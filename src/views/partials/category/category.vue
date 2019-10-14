<template>
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="category__content">
            <div v-for="item in showedCatList" :key="item.id" @click="onCatSelect(item)" :class="`category__item${selectedCat.id === item.id ? ' active' : ''}`">
              <span class="category__label">{{item.title}}</span>
            </div>
            <div v-if="showMore" class="category__item">
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
                  <div v-for="item in hiddenCatList" :key="item.id" @click="onCatSelect(item)" class="dropdown__item">
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
import { mapGetters } from 'vuex';
import PostModel from '@/models/post';
import PostListModel from '@/models/post';
import CategoryModel from '@/models/category';
import { SET_POSTS, SET_ROOTPOSTS } from '@/store/types';
import _ from 'lodash';

@Component({
  computed: {
    ...mapGetters(['rootPosts', 'posts']),
  },
})
export default class Category extends Vue {
  private categories: CategoryModel[];
  private rootPosts?: PostModel;
  private posts?: PostModel;
  private selectedCat: CategoryModel;

  constructor() {
    super();
    this.selectedCat = new CategoryModel();
    this.categories = [];
  }
  get showedCatList(): CategoryModel[] {
    if (this.categories) {
      return this.categories.filter((val: CategoryModel, i: number) => (i < 6 && val) );
    } else {
      return [];
    }
  }
  get hiddenCatList(): CategoryModel[] {
    if (this.categories) {
      return this.categories.filter((val: CategoryModel, i: number) => (i > 5 && val) );
    } else {
      return [];
    }
  }
  get showMore(): boolean {
    return this.categories && this.categories.length > 6 || false;
  }
  private onCatSelect(val: any): void {
    const root = _.cloneDeep(this.rootPosts);
    const list = root && root.list;
    this.selectedCat = val;
    if (val.id !== 1) {
      const arr = root.list.filter((item) => (item.catIds.indexOf(val.id) > -1));
      const posts = _.cloneDeep(this.posts);
      posts.list = [...arr];
      this.$store.dispatch(SET_POSTS, posts);
    } else {
      this.$store.dispatch(SET_POSTS, root);
    }
  }
  private mounted() {
    getCategories().then((res: CategoryModel[]) => {
      this.categories = res;
    });
  }
}
</script>

<style lang="scss" scoped>
@import "category";
</style>