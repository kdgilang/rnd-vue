<template>
    <div class="filter">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-5 col-lg-6">
                    <div class="filter__left">
                        <Selectbox label="Area" />
                        <Selectbox label="Budget" />
                    </div>
                </div>
                <div class="col-xs-12 col-md-7 col-lg-6">
                    <div class="filter__right">
                        <div class="filter-sort">
                            <span class="label">Sort By</span>
                            <Selectbox :data="sortData" label="Sort By" defaultSelectedIndex="0" openOnSelect="true">
                                <span class="bullet"></span>
                            </Selectbox>
                        </div>
                        <button class="button" @click="toggleMap(true)">See Map</button>
                        <Gmap v-if="isMapVisible" 
                            :visible="isMapVisible" 
                            :markers="markers" 
                            :classes="mapClass" 
                            @onClose="toggleMap(false)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Selectbox from '@/components/selectbox/selectbox.vue';
import Gmap from '@/components/gmap/gmap.vue';
import { mapGetters } from 'vuex';
import PostListModel, {MapModel} from '@/models/postlist';
import PostModel from '@/models/post';

@Component({
    components: {
       Selectbox,
       Gmap,
    },
    computed: {
        ...mapGetters(['posts']),
    },
})
export default class FilterBlock extends Vue {
    private isMapVisible: boolean;
    private mapClass: string[];
    private sortData: any[];
    private posts?: PostModel;

    constructor() {
        super();
        this.isMapVisible = false;
        this.mapClass = [];
        this.sortData = [{id: 1111, label: 'Most Popular'}, {id: 1211, label: 'Latest Deals'}, {id: 1311, label: 'Lowest Price'}, {id: 1411, label: 'Highest Price'}];
    }
    get markers(): any[] {
        const arr: MapModel[] = [];
        if (this.posts && this.posts.list) {
            this.posts.list.map((val: PostListModel) => (arr.push(val.map)));
        }
        return arr;
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
@import "filter.scss";
</style>