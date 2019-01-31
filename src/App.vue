<template>
    <div id="app">
        <nav_bar1/>
        <nav_bar2/>
        <workspace/>
        <bottom_bar/>
    </div>
</template>

<script>
import nav_bar1 from "./components/nav_bar1.vue";
import nav_bar2 from "./components/nav_bar2.vue";
import bottom_bar from "./components/bottom_bar.vue";
import workspace from "./components/workspace.vue";

export default {
    name: "app",
    components: {
        nav_bar1,
        nav_bar2,
        bottom_bar,
        workspace
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
    position: relative;
    overflow-y: hidden;
}
body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    overflow-y: hidden;
}
</style>
