<template>
  <header class="header">
    <div class="container header__container">
      <div class="row">
        <div class="col-xs-12 col-md-4 col-lg-7">
          <div class="header__left">
            <MobileMenu class="header__menu__mobile" title="Menu" icon="menu@2x.png">
              <Navigation></Navigation>
            </MobileMenu>
            <router-link class="logo header__logo" :to="{name: 'front-page'}">
              <img src="../../../assets/images/logo@2x.png" alt="TBB Logo" />
            </router-link>
            <Navigation class="header__nav"></Navigation>
            <UserMenu class="hidden-md"></UserMenu>
            <MobileMenu class="header__search__mobile hidden-md" title="Search" icon="magny1@2x.png">
              <StyledInput :value="inputValue" icon="magny1@2x.png" type="text" placeholder="Search"></StyledInput>
            </MobileMenu>
          </div>
        </div>
        <div class="col-xs-12 col-md-8 col-lg-5 visible-md">
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
import MobileMenu from '@/components/mmenu/mmenu.vue';
@Component({
  components: {
    Navigation,
    UserMenu,
    StyledInput,
    MobileMenu,
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