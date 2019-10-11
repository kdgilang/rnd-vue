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

  private selectboxClass: string[];
  private selectedValue: any;
  private caret: string;

  constructor() {
    super();
    this.selectboxClass = ['selectbox'];
    this.caret = '';
  }
  get defaultCaret(): string {
    if (this.defaultValue && this.defaultValue >= 0) {
      this.selectedValue = (this.data && this.data[this.defaultValue]) || {};
      return this.selectedValue && this.selectedValue.label;
    }
    return '';
  }
  get selectLabel(): string {
    return this.caret;
  }
  set selectLabel(val) {
    this.caret = val;
  }
  private onSelectClick(): void {
    if (this.selectboxClass.indexOf('opened') < 0) {
      this.selectboxClass.push('opened');
    } else {
      this.selectboxClass = ['selectbox'];
    }
  }
  private onSelect(val: any): void {
    if (this.closeOnSelect) {
      this.selectboxClass = ['selectbox'];
    }
    const { label } = val;
    this.selectLabel = label;
    this.selectedValue = val;
  }
}
</script>

<style lang="scss">
@import "selectbox";
</style>