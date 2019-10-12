<template>
  <div v-if="data" :class="selectboxClass">
    <div class="selectbox__select" @click="onSelectClick">
      <span class="selectbox__caret">{{selectLabel}}</span>
      <span class="selectbox__icon"></span>
    </div>
    <div class="dropdown selectbox__dropdown">
      <div class="dropdown__inner">
        <div v-for="item in data" :key="item.id" class="dropdown__item">
          <div class="dropdown__button" @click="onSelect(item)">
            <slot></slot>
            <span class="dropdown__label">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Selectbox extends Vue {
  @Prop({ default: () => [] })
  private data?: any[];
  @Prop()
  private defaultValue?: number;
  @Prop({ default: '' })
  private label?: string;
  @Prop({ default: true })
  private closeOnSelect?: boolean;
  private selectedValue: any;
  private caret: string;
  private isVisible: boolean;

  constructor() {
    super();
    this.caret = '';
    this.isVisible = false;
  }
  get defaultCaret(): string {
    if (this.defaultValue && this.defaultValue >= 0) {
      this.selectedValue = (this.data && this.data[this.defaultValue]) || {};
      return this.selectedValue && this.selectedValue.label;
    }
    return '';
  }
  get selectboxClass(): any[] {
    return ['selectbox', this.isVisible && 'opened'];
  }
  get selectLabel(): string {
    return this.caret;
  }
  set selectLabel(val) {
    this.caret = val;
  }
  private onSelectClick(): void {
    this.isVisible = (this.selectboxClass.indexOf('opened') < 0) && true;
  }
  private onSelect(val: any): void {
    this.isVisible = this.closeOnSelect ? false : false;
    const { label } = val;
    this.selectLabel = label;
    this.selectedValue = val;
  }
  private created(): void {
    window.addEventListener('click', (e: any) => {
    // close dropdown when clicked outside
    if (!this.$el.contains(e.target)) {
      this.isVisible = false;
    }
  });
  }
}
</script>

<style lang="scss">
@import "selectbox";
</style>