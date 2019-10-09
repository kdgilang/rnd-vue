<template>
    <nav :class="classname" v-if="navigations">
        <a v-for="item in navigations" :key="item.slug" :href="item.url" class="nav__item">{{item.title}}</a>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { SET_NAVIGATIONS } from '@/store/types';

@Component({
  computed: {
    ...mapGetters(['navigations'])
  }
})
export default class Navigation extends Vue {
  @Prop({default: 'nav'})
  private classname?: string;

  constructor() {
    super();
  }
  private mounted() {
    this.$store.dispatch(SET_NAVIGATIONS);
  }
}
</script>

<style lang="scss" scoped>
  @import "navigation.scss";
</style>