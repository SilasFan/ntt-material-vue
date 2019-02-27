<template>
    <div class="home">
        <nav_bar1 v-bind:user="this.user"/>
        <nav_bar2 admin="admin"/>
        <workspace/>
        <bottom_bar/>
    </div>
</template>

<script>
import nav_bar1 from "../components/nav_bar1.vue";
import nav_bar2 from "../components/nav_bar2.vue";
import bottom_bar from "../components/bottom_bar.vue";
import workspace from "../components/workspace.vue";
import Vue from "vue";
import Router from "vue-router";
import { setTimeout } from "timers";
Vue.use(Router);

export default {
    name: "home",
    components: {
        nav_bar1,
        nav_bar2,
        bottom_bar,
        workspace
    },
    beforeCreate() {
        if (
            this.$route.params.login !== true ||
            this.$route.params.login === undefined
        ) {
            this.$router.push({ name: "login" });
        }
    },
    data() {
        return {
            user: "",
            admin: true
        };
    },
    mounted() {
        this.user = this.$route.params.user;
    }
};
</script>

<style>
.home {
    height: 100%;
    width: 100%;
}
</style>
