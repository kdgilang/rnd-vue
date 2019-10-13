<template>
  <div class="m-menu">
    <button @click="isMenuOpened = true" class="button m-menu__button hidden-lg">
      <img :src="urlIcon" alt="icon menu" />
      <span class="label" v-if="label">{{label}}</span>
    </button>
    <div :class="containerClass">
        <div class="m-menu__inner">
            <h3 v-if="title"> {{title}} </h3>
            <button @click="isMenuOpened = false" class="m-menu__close">
                <img src="../../assets/images/icons/close@2x.png" alt="icon close" />
            </button>
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { getNavigations } from '@/services/navigation';

@Component({})
export default class MobileMenu extends Vue {
  @Prop({default: ''})
  private icon?: string;
  @Prop({default: ''})
  private label?: string;
  @Prop({default: ''})
  private title?: string;
  private navdata: any[];
  private isMenuOpened: boolean;
  private containerClass: string[];

  constructor() {
    super();
    this.navdata = [];
    this.isMenuOpened = false;
    this.containerClass = ['m-menu__container'];
  }
  get urlIcon(): string {
    const { icon } = this;
    return require(`../../assets/images/icons/${icon}`);
  }
  @Watch('isMenuOpened')
  private watchMenuOpened(val: boolean, oldval: boolean) {
    if (!val) {
      this.containerClass = ['m-menu__container'];
    } else {
      this.isMenuOpened = val;
    }
    setTimeout(() => {
      if (!val) {
        this.isMenuOpened = val;
      } else {
        this.containerClass.push('opened');
      }
    }, 200);
  }
  private mounted(): void {
    getNavigations().then((res: any[]) => {
      this.navdata = res;
    });
  }
}
</script>

<style lang="scss">
@import "mmenu";
</style>