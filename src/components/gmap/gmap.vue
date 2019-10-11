<template>
    <div :class="mapClass">
        <div class="g-map__inner">
            <div class="close g-map__close" @click="onClose">Close Map</div>
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
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class Gmap extends Vue {
    @Prop({ default: () => [] })
    private classes?: any;

    get mapClass(): any[] {
        return ['g-map', ...this.classes];
    }

    @Emit('onClose')
    private onClose(): void {
        const dev = 'gilang';
    }
}
</script>

<style lang="scss" scoped>
@import "gmap";
</style>