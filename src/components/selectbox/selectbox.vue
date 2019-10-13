<template>
  <div v-if="data" :class="selectboxClass">
    <div class="selectbox__select" @click="isVisible = !isVisible">
      <span class="selectbox__caret">{{caret}}</span>
      <span class="selectbox__icon"></span>
    </div>
    <div class="dropdown selectbox__dropdown">
      <div class="dropdown__inner">
        <div v-for="item in data" :key="item.id" class="dropdown__item">
          <div :class="`dropdown__button${item.id === selectedValue.id ? ' selected' : ''}`" @click="onSelect(item)">
            <slot></slot>
            <span class="dropdown__label">{{item.label}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class Selectbox extends Vue {
  @Prop({ default: () => [] })
  private data?: any[];
  @Prop({ default: -1 })
  private defaultSelectedIndex?: number;
  @Prop({ default: '' })
  private label?: string;
  @Prop({ default: false })
  private openOnSelect?: boolean;
  private selectedValue: any;
  private isVisible: boolean;
  private caret: string;

  constructor() {
    super();
    this.selectedValue = this.defaultSelectedIndex && this.data && this.data[this.defaultSelectedIndex];
    this.isVisible = false;
    const label  = this.selectedValue && this.selectedValue.label;
    this.caret = label || this.label || '';
  }
  get selectboxClass(): any[] {
    return ['selectbox', this.isVisible && 'opened'];
  }
  private onSelect(val: any): void {
    this.isVisible = this.openOnSelect || false;
    this.selectedValue = val;
    const label  = this.selectedValue && this.selectedValue.label;
    this.caret = label;
  }
  private created(): void {
    window.addEventListener('click', (e: any) => {
      if (!this.$el.contains(e.target)) {
        this.isVisible = false;
      }
    });
  }
  @Watch('data')
  private watchLabel(val: string, oldval: string): void {
    if (val) {
      this.selectedValue = this.defaultSelectedIndex && val && val[this.defaultSelectedIndex];
      const label  = this.selectedValue && this.selectedValue.label;
      this.caret = label;
    }
  }
}
</script>

<style lang="scss">
@import "selectbox";
</style>