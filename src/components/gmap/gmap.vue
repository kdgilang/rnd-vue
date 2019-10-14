<template>
    <div :class="mapClass">
        <div class="g-map__inner">
            <div class="close g-map__close" @click="onClose">Close Map</div>
            <GmapMap
                :center="center"
                :zoom="3.4"
                map-type-id="roadmap">
            <GmapMarker
                v-for="(item, i) in markers"
                :key="i"
                :position="item"
                :clickable="true"
            />
            <!-- :draggable="true"
            @click="center=m.position" -->
            </GmapMap>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import PostListModel from '@/models/postlist';
@Component({})
export default class Gmap extends Vue {
    @Prop({ default: () => [] })
    private classes?: any;
    @Prop({ default: () => [] })
    private markers?: PostListModel[];
    @Prop({ default: () => ({lat: -6.5544559, lng: 81.3938074}) })
    private center?: any;

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