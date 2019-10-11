<template>
  <div class="form-subscribe">
    <h4 class="form-subscribe__title">Subscribe</h4>
    <span class="form-subscribe__label">To get the latest deals, news & more</span>
    <form class="form form-subscribe__form">
        <StyledInput type="email" :value="emailValue" placeholder="Add your email" />
        <button class="button button_primary">Subscribe</button>
    </form>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StyledInput from '@/components/styledinput/styledinput.vue';

@Component({
    components: {
        StyledInput,
    },
})
export default class FormSubscribe extends Vue {
    private emailValue: string;
    constructor() {
        super();
        this.emailValue = '';
    }
}
</script>

<style lang="scss">
@import "formsubscribe";
</style>