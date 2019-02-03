<template>
    <div class="home">
        <nav_bar1/>
        <nav_bar2/>
        <router-view/>
        <bottom_bar/>
    </div>
</template>

<script>
import nav_bar1 from "../components/nav_bar1.vue";
import nav_bar2 from "../components/nav_bar2.vue";
import bottom_bar from "../components/bottom_bar.vue";
import workspace from "../components/workspace.vue";

export default {
    name: "home",
    components: {
        nav_bar1,
        nav_bar2,
        bottom_bar,
        workspace
    }
};
</script>

<style>
.home {
    height: 100%;
    width: 100%;
}
</style>
