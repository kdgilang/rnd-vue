<template>
  <div :class="cardLoaderClass" v-if="isVisible">
    <div class="card-loader__gradient"></div>
    <div class="card-loader__gradient"></div>
    <div class="card-loader__gradient"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class CardLoader extends Vue {
    @Prop({default: true})
    private visible!: boolean;
    private cardLoaderClass: any[];
    private isVisible: boolean;

    constructor() {
        super();
        this.cardLoaderClass = ['card-loader', (this.visible) && 'loading'];
        this.isVisible = this.visible;
    }

    @Watch('visible')
    private watchVisible(val: boolean, oldval: boolean) {
        if (!val) {
            this.cardLoaderClass = ['card-loader'];
        } else {
            this.isVisible = val;
        }
        setTimeout(() => {
            if (!val) {
                this.isVisible = val;
            } else {
                this.cardLoaderClass.push('loading');
            }
        }, 200);
    }
}
</script>

<style lang="scss">
@import "card-loader";
</style>