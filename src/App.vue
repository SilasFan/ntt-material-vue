<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default {
    name: "app",
    data() {
        return {
            login: false
        };
    },
    mounted() {
        if (!this.login) {
            this.$router.push({ name: "login" });
        }
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
