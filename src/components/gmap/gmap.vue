<template>
    <div :class="mapClass">
        <div class="close gmap__close"></div>
        <div class="g-map__inner">
            <GmapMap
            :center="{lat:-8.3883447, lng: 115.1594523}"
            :zoom="10"
            map-type-id="roadmap"
        >
            <!-- <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
            /> -->
        </GmapMap>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class Gmap extends Vue {
    @Prop({ default: false })
    private visible?: boolean;
    private isMapVisible: boolean;
    private mapClass: any[];

    constructor() {
        super();
        this.mapClass = ['g-map', (this.visible) && 'opened'];
        this.isMapVisible = false;
    }

    @Watch('visible')
    private watchVisible(val: boolean, oldval: boolean): void {
        if (!val) {
            this.mapClass = ['g-map'];
        } else {
            this.isMapVisible = val;
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

<style lang="scss" scoped>
@import "gmap";
</style>