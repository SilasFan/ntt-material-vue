<template>
    <div class="worksp" v-bind:style="{ height: workspHeight }">
        <img src="/deco.png" class="deco">
        <img src="/icon.png" class="icon">
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
    top: 0px;
    z-index: 1;
    position: absolute;
}

.icon {
    height: 50%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    opacity: 0.4;
}
</style>
