<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="footer__left">
            <StyledList :data="expListData" />
          </div>
          <div class="separator footer__separator hidden-md"></div>
          <div class="footer__center">
            <StyledList :data="othListData" />
          </div>
          <div class="separator footer__separator hidden-md"></div>
          <div class="footer__right">
            <FormSubscribe>
              <div class="social-link">
                <a href="https://facebook.com" target="_blank" class="social-link__fb">
                  <img src="../../../assets/images/icons/fb@2x.png" alt="facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" class="social-link__ig">
                  <img src="../../../assets/images/icons/ig@2x.png" alt="instagram" />
                </a>
              </div>
            </FormSubscribe>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="separator footer__separator"></div>
        </div>
      </div>
      <div class="row footer__bottom">
        <div class="col-xs-12 hidden-md">
            <Selectbox :data="currencyData" label="Currency" defaultSelectedIndex="5"/>
        </div>
        <div class="col-xs-12 col-md-10 col-lg-9">
          <router-link class="logo footer__logo" :to="{name: 'front-page'}">
            <img src="../../../assets/images/footer-logo@2x.png" alt="TBB Logo" />
          </router-link>
          <router-link class="logo logo-two footer__logo" :to="{name: 'front-page'}">
            <img src="../../../assets/images/logo-afta@2x.png" alt="TBB Logo" />
          </router-link>
          <div class="footer__summary">
            <span>
              The Bali Bible is a part of the TRAVLR GROUP.
              <br />© 2018 TRAVLR Pty Ltd. All Rights Reserved.
            </span>
          </div>
        </div>
        <div class="col-md-2 col-lg-3 visible-md">
            <Selectbox :data="currencyData" label="Currency" defaultSelectedIndex="5"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StyledList from '@/components/styledlist/styledlist.vue';
import { getExploreLocations, getOtherStuff } from '@/services/navigation';
import { getCurrency } from '@/services/currency';
import FormSubscribe from '@/components/formsubscribe/formsubscribe.vue';
import Selectbox from '@/components/selectbox/selectbox.vue';

@Component({
  components: {
    StyledList,
    FormSubscribe,
    Selectbox,
  },
})
export default class Footer extends Vue {
  private expListData: any[];
  private othListData: any[];
  private currencyData: any[];

  constructor() {
    super();
    this.expListData = [];
    this.othListData = [];
    this.currencyData = [];
  }
  private mounted() {
    getExploreLocations().then((res: any[]) => {
      this.expListData = res;
    });
    getOtherStuff().then((res: any[]) => {
      this.othListData = res;
    });
    getCurrency().then((res: any[]) => {
      this.currencyData = res;
    });
  }
}
</script>

<style lang="scss">
@import "footer";
</style>