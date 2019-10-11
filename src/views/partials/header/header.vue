<template>
  <header class="header">
    <div class="container header__container">
      <div class="row">
        <div class="col-md-7">
          <div class="header__left">
            <a class="logo header__logo" href="/">
              <img src="../../../assets/images/logo@2x.png" alt="TBB Logo" />
            </a>
            <Navigation class="nav header__nav"></Navigation>
          </div>
        </div>
        <div class="col-md-5">
          <div class="header__right">
            <StyledInput :value="inputValue" icon="magny1@2x.png" type="text" placeholder="Search"></StyledInput>
            <UserMenu></UserMenu>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '../navigation/navigation.vue';
import UserMenu from '@/components/usermenu/usermenu.vue';
import StyledInput from '@/components/styledinput/styledinput.vue';

@Component({
  components: {
    Navigation,
    UserMenu,
    StyledInput,
  },
})
export default class Header extends Vue {
  private inputValue!: string;
  constructor() {
    super();
    this.inputValue = '';
  }
}
</script>

<style lang="scss">
@import "header.scss";
</style>