<template>
    <div class="worksp" v-bind:style="{ height: workspHeight }">
        <img src="/deco.png" class="deco">
        <img src="/icon.png" class="icon">
        <div class="views">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: "workspace",
    computed: {
        workspHeight: () => document.body.clientHeight - 127.4 + "px",
        bdHeight: () => document.body.clientHeight
    }
};
</script>

<style scoped>
.worksp {
    width: 100%;
    float: left;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
}

.deco {
    height: 50%;
    right: 0px;
    top: 96.2px;
    z-index: -1;
    position: fixed;
}

.icon {
    height: 50%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    opacity: 0.4;
    z-index: -1;
}

.views {
    position: absolute;
    top: 10%;
    left: 10%;
}
</style>
