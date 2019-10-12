<template>
  <div class="card">
    <div class="card__head">
      <img @load="imageLoaded" @error="imageLoaded" :src="imgsrc" alt="image" />
      <span class="card__head__label">{{tagLabel}}</span>
    </div>
    <div class="card__body">
      <h3 class="card__title">{{ title }}</h3>
      <div class="card__meta">
        <div class="card__left">
          <div class="card__name">{{companyName}}</div>
          <div class="card__label">{{ locationLabel }}</div>
        </div>
        <div class="card__right">
          <div class="card__label">From</div>
          <div class="card__price">{{priceLabel}}</div>
        </div>
      </div>
    </div>
    <CardLoader :visible="showLoader"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PostModel from '@/models/post';
import CardLoader from './cardloader.vue';

@Component({
    components: {
        CardLoader,
    },
})
export default class Card extends Vue {
  @Prop({ default: {} })
  private data?: PostModel;
  private showLoader: boolean;

  constructor() {
      super();
      this.showLoader = true;
  }

  get title(): string {
    return (this.data && this.data.title) || '';
  }
  get priceLabel(): string {
    return (this.data && this.data.priceLabel) || '';
  }
  get tagLabel(): string {
    return (this.data && this.data.tagLabel) || '';
  }
  get locationLabel(): string {
    return (this.data && this.data.locationLabel) || '';
  }
  get companyName(): string {
    return (this.data && this.data.companyName) || '';
  }
  get imgsrc(): string {
    return (this.data && this.data.imgsrc) || '';
  }
  private imageLoaded(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 600);
  }
}
</script>

<style lang="scss">
@import "card";
</style>