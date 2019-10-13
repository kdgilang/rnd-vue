<template>
  <div class="page page-category">
    <SearchBlock />
    <Category />
    <FilterBlock class="visible-md"/>
    <div class="page-category__content">
      <div class="container" v-if="dataPosts">
        <div class="row">
          <div v-for="(item, i) in dataPosts" :key="i" class="col-xs-12 col-md-6 col-lg-4">
            <Card :data="item"/>
          </div>
        </div>
        <Pagination :items="dataPosts" :itemsPerPage="perPage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { SET_POSTS } from '@/store/types';
import PostModel from '@/models/post';
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
    ...mapGetters(['posts', 'filterPosts']),
  },
})
export default class CategoryPage extends Vue {
  private posts: any;

  constructor() {
    super();
  }

  get dataPosts(): PostModel[] {
    return (this.posts && this.posts.list) || '';
  }

  get perPage(): number {
    return (this.posts && this.posts.post_per_page) || 0;
  }

  private mounted() {
    document.title = this.$route.meta.title;
    this.$store.dispatch(SET_POSTS);
  }
}
</script>

<style lang="scss" scoped>
@import "category";
</style>