<template>
    <ul v-if="isVisible" class="user-menu">
        <li class="user-menu__item"><a href="/login">Login</a></li>
        <li class="user-menu__item"><a href="/sign-up" class="button">Sign up</a></li>
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