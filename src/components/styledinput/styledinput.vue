<template>
  <div class="styled-input">
    <button class="button styled-input__button">
      <img src="../../assets/images/icons/magny1@2x.png" alt="">
    </button>
    <input class="styled-input__field" :value="localValue" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class StyledInput extends Vue {
  @Prop({ default: "text" })
  public type!: string;

  @Prop({ default: "" })
  public value: any;

  @Prop({ default: "" })
  public placeholder?: string;

  private localValue: any;

  @Watch("value")
  watchValue(oldval: any, newval: any) {
    this.localValue = newval;
  }
}
</script>

<style lang="scss" scoped>
  @import "styledinput";
</style>
