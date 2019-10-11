<template>
    <div class="filter">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-6">
                    <div class="filter__left">
                        <Selectbox label="Area" />
                        <Selectbox label="Budget" />
                    </div>
                </div>
                <div class="col-xs-12 col-lg-6">
                    <div class="filter__right">
                        <div class="filter-sort">
                            <span class="label">Sort By</span>
                            <Selectbox />
                        </div>
                        <button class="button" @click="isMapVisible=!isMapVisible">See Map</button>
                        <Gmap :visible="isMapVisible" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Selectbox from '@/components/selectbox/selectbox.vue';
import Gmap from '@/components/gmap/gmap.vue';

@Component({
    components: {
       Selectbox,
       Gmap,
    },
})
export default class FilterBlock extends Vue {
    private isMapVisible: boolean;

    constructor() {
        super();
        this.isMapVisible = false;
    }
}
</script>

<style lang="scss" scoped>
@import "filter.scss";
</style>