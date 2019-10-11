<template>
  <div class="styled-input">
    <span v-if="icon" class="icon styled-input__icon">
      <img :src="urlIcon" alt="icon">
    </span>
    <input class="styled-input__field" :value="localValue" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class StyledInput extends Vue {
  @Prop({ default: 'text' })
  public type!: string;

  @Prop({ default: '' })
  public value: any;

  @Prop({ default: '' })
  public placeholder?: string;

  @Prop({ default: '' })
  public icon?: string;

  private localValue: any;

  constructor() {
    super();
    this.localValue = '';
  }

  get urlIcon(): string {
    const { icon } = this;
    return require(`../../assets/images/icons/${icon}`);
  }

  @Watch('value')
  public watchValue(oldval: any, newval: any) {
    this.localValue = newval;
  }
}
</script>

<style lang="scss" scoped>
  @import "styledinput";
</style>
