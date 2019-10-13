<template>
  <div class="search">
    <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <form class="form search__form visible-md" @submit.prevent="">
              <StyledInput :value="searchval" icon="magny2@2x.png" placeholder="Search deals: dining, spa, hotel, etc..."/>
              <StyledInput :value="locationval" icon="pin@2x.png" placeholder="Location"/>
              <button class="button button_primary form__button">Search Deals</button>
            </form>
            <div class="search__mobile hidden-md">
              <div class="search__mobile__left">
                <MobileMenu icon="magny3@2x.png" label="Search Deals..." title="Search Deals">
                  <form class="form search__form" @submit.prevent="">
                    <StyledInput :value="searchval" icon="magny2@2x.png" placeholder="Search deals: dining, spa, hotel, etc..."/>
                    <StyledInput :value="locationval" icon="pin@2x.png" placeholder="Location"/>
                    <button class="button button_primary form__button">Search</button>
                  </form>
                </MobileMenu>
              </div>
              <div class="search__mobile__right">
                <MobileMenu title="Filter" icon="filter@2x.png">

                </MobileMenu>
                <button class="button button_map" @click="toggleMap(true)">
                  <img src="../../../assets/images/icons/map-white@2x.png" alt="">
                </button>
                <Gmap v-if="isMapVisible" :classes="mapClass" :visible="isMapVisible" @onClose="toggleMap(false)" />
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StyledInput from '@/components/styledinput/styledinput.vue';
import MobileMenu from '@/components/mmenu/mmenu.vue';
import Gmap from '@/components/gmap/gmap.vue';
@Component({
  components: {
    StyledInput,
    MobileMenu,
    Gmap,
  },
})
export default class Search extends Vue {
  private searchval!: string;
  private locationval!: string;
  private isMapVisible: boolean;
  private mapClass: string[];
  constructor() {
    super();
    this.searchval = '';
    this.locationval = 'All Bali';
    this.isMapVisible = false;
    this.mapClass = [];
  }
  private toggleMap(val: boolean): void {
    if (!val) {
        const index = this.mapClass.indexOf('opened');
        this.mapClass.splice(index, 1);
    } else {
        this.isMapVisible =  val;
    }
    setTimeout(() => {
        if (!val) {
            this.isMapVisible = val;
        } else {
            this.mapClass.push('opened');
        }
    }, 200);
  }
}
</script>

<style lang="scss">
    @import "search";
</style>