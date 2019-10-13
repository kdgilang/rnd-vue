<template>
    <div class="filter">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-5 col-lg-6">
                    <div class="filter__left">
                        <Selectbox label="Area" />
                        <Selectbox label="Budget" />
                    </div>
                </div>
                <div class="col-xs-12 col-md-7 col-lg-6">
                    <div class="filter__right">
                        <div class="filter-sort">
                            <span class="label">Sort By</span>
                            <Selectbox />
                        </div>
                        <button class="button" @click="toggleMap(true)">See Map</button>
                        <Gmap v-if="isMapVisible" :visible="isMapVisible" :classes="mapClass" @onClose="toggleMap(false)" />
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
    private mapClass: string[];

    constructor() {
        super();
        this.isMapVisible = false;
        this.mapClass = [];
    }
    private toggleMap(val: boolean): void {
        if (!val) {
            const index = this.mapClass.indexOf('opened');
            this.mapClass.splice(index, 1);
        } else {
            this.isMapVisible =  val;
        }
        setTimeout(() => {
            if (!val) {
                this.isMapVisible = val;
            } else {
                this.mapClass.push('opened');
            }
        }, 200);
    }
}
</script>

<style lang="scss">
@import "filter.scss";
</style>