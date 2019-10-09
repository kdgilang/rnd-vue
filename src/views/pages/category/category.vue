<template>
    <div class="page page-category">
        <FilterBlock/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterBlock from '@/views/partials/filter/filter.vue';

@Component({
    components: {
        FilterBlock,
    }
})
export default class CategoryPage extends Vue {

}
</script>