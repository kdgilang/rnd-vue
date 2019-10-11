import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

const GMAPKEY = process.env.VUE_APP_GMAP_KEY;

Vue.use(VueGoogleMaps, {
  load: {
    key: GMAPKEY,
    libraries: 'places',
  },
});
