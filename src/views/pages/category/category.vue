<template>
  <div class="page page-category">
    <SearchBlock />
    <Category />
    <FilterBlock class="visible-md" />
    <div class="page-category__content">
      <div class="container" v-if="thePagedPosts">
        <div class="row">
          <div v-for="(item, i) in thePagedPosts" :key="i" class="col-xs-12 col-md-6 col-lg-4">
            <Card :data="item" />
          </div>
        </div>
        <Pagination :items="dataPosts" :itemsPerPage="perPage" @onPagination="onPagination" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { INIT_POSTS } from '@/store/types';
import PostModel from '@/models/post';
import PostListModel from '@/models/post';
import SearchBlock from '@/views/partials/search/search.vue';
import Category from '@/views/partials/category/category.vue';
import Card from '@/components/card/card.vue';
import Pagination from '@/components/pagination/pagination.vue';
import FilterBlock from '@/views/partials/filter/filter.vue';

@Component({
  components: {
    SearchBlock,
    FilterBlock,
    Pagination,
    Category,
    Card,
  },
  computed: {
    ...mapGetters(['posts']),
  },
})
export default class CategoryPage extends Vue {
  private posts?: PostModel;
  private pagedPosts: PostListModel[];

  constructor() {
    super();
    this.pagedPosts = Array<PostListModel>();
  }

  get dataPosts(): PostListModel[] {
    return (this.posts && this.posts.list) || [];
  }

  get perPage(): number {
    return (this.posts && this.posts.postPerPage) || 0;
  }

  get thePagedPosts(): PostListModel[] {
    return this.pagedPosts;
  }

  set thePagedPosts(val: PostListModel[]) {
    this.pagedPosts = val;
  }

  private onPagination(pagedPosts: PostListModel[]): void {
    this.thePagedPosts = pagedPosts;
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  private mounted() {
    document.title = this.$route.meta.title;
    this.$store.dispatch(INIT_POSTS);
  }

  @Watch('dataPosts')
  private watchPosts(val: PostListModel[], oldval: PostListModel[]) {
    if (val) {
      const { dataPosts, perPage } = this;
      const cpage = 0;
      const lpage = (cpage + 1) * perPage;
      this.thePagedPosts = val.slice(cpage, lpage);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "category";
</style>