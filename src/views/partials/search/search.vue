<template>
  <div class="search">
    <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <form class="form search__form">
              <StyledInput :value="searchval" icon="magny2@2x.png" placeholder="Search deals: dining, spa, hotel, etc..."/>
              <StyledInput :value="locationval" icon="pin@2x.png" placeholder="Location"/>
              <button class="button button_primary form__button">Search Deals</button>
            </form>
          </div>
        </div>
    </div>
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
export default class Search extends Vue {
  private searchval!: string;
  private locationval!: string;
  constructor() {
    super();
    this.searchval = '';
    this.locationval = 'All Bali';
  }
}
</script>

<style lang="scss">
    @import "search";
</style>