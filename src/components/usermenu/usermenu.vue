<template>
    <ul v-if="isVisible" class="user-menu">
        <li class="user-menu__item"><router-link to="/login">Login</router-link></li>
        <li class="user-menu__item"><router-link to="/sign-up" class="button button_secondary">Sign up</router-link></li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class UserMenu extends Vue {
    @Prop({default: true})
    private visible?: boolean;
    constructor() {
        super();
    }
    get isVisible() {
        return this.visible;
    }
}
</script>
<style lang="scss" scoped>
    @import "usermenu.scss";
</style>