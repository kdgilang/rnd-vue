<template>
  <div v-if="data" class="styled-list">
    <h4 v-if="title" class="styled-list__title">{{title}}</h4>
    <ul v-if="content" class="styled-list__content">
        <li v-for="(item, i) in content" :key="i" class="styled-list__item"><router-link to="/">{{item.title}}</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class StyledList extends Vue {
    @Prop({default: ''})
    private data?: any;

    get title(): string {
        const { title } = this.data;
        return title;
    }
    get content(): any[] {
        const { list } = this.data;
        return list;
    }
}
</script>

<style lang="scss" scoped>
@import "styledlist";
</style>