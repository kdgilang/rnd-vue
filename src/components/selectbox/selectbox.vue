<template>
  <div :class="selectboxClass">
    <div class="selectbox__select" @click="isVisible = !isVisible">
      <span class="selectbox__caret">{{caret}}</span>
      <span class="selectbox__icon"></span>
    </div>
    <div class="dropdown selectbox__dropdown" v-if="data.length">
      <div class="dropdown__inner">
        <div v-for="(item, i) in data" :key="i" class="dropdown__item">
          <div :class="`dropdown__button${selectedValue.find((val) => (val && val.id === item.id)) ? ' selected' : ''}`" @click="onSelect(item)">
            <slot></slot>
            <span class="dropdown__label">{{item.label}}</span>
          </div>
        </div>
      </div>
    </div>
    <slot name="dropdown"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component({})
export default class Selectbox extends Vue {
  @Prop({ default: () => [] })
  private data!: any[];
  @Prop({ default: -1 })
  private defaultSelectedIndex?: number;
  @Prop({ default: '' })
  private label!: string;
  @Prop({ default: false })
  private openOnSelect!: boolean;
  @Prop({ default: false })
  private multipleSelect!: boolean;
  private selectedValue: any[];
  private isVisible: boolean;
  private caret: string;

  constructor() {
    super();
    const { label, data } = this;
    this.isVisible = false;
    this.selectedValue = [];
    if (this.defaultSelectedIndex && data[this.defaultSelectedIndex]) {
      this.selectedValue.push(data[this.defaultSelectedIndex]);
    }
    const defaultLabel = this.selectedValue && this.selectedValue[0] && this.selectedValue[0].label;
    this.caret = defaultLabel || label;
  }
  get selectboxClass(): any[] {
    return ['selectbox', this.isVisible && 'opened'];
  }
  private setSelected(val) {
    const { label, multipleSelect, selectedValue } = this;
    if (multipleSelect) {
      const duplicated = this.selectedValue.find((item) => (item.id === val.id));
      if (duplicated) {
        this.selectedValue = this.selectedValue.filter((item) => (item.id !== duplicated.id));
      } else {
        this.selectedValue.push(val);
      }
      this.caret = `${label}: ${this.selectedValue.length} selected`;
    } else {
      this.selectedValue = [val];
      this.caret = val && val.label;
    }
  }
  private onSelect(val: any): void {
    this.isVisible = this.openOnSelect;
    this.setSelected(val);
    this.emitOnSelect(this.selectedValue);
  }
  private created(): void {
    window.addEventListener('click', (e: any) => {
      if (!this.$el.contains(e.target)) {
        this.isVisible = false;
      }
    });
  }
  @Emit('onSelect')
  private emitOnSelect(val: any): void {
    const dev = 'gilang';
  }
  @Watch('data')
  private watchData(val: any[], oldval: any[]): void {
    const {multipleSelect, defaultSelectedIndex} = this;
    if (val && !multipleSelect) {
      this.selectedValue = [(defaultSelectedIndex && val && val[defaultSelectedIndex])];
      this.caret = this.selectedValue && this.selectedValue[0] && this.selectedValue[0].label;
    }
  }
}
</script>

<style lang="scss">
@import "selectbox";
</style>