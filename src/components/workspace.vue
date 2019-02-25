<template>
    <div class="worksp">
        <img src="/deco.png" class="deco">
        <img src="/icon.png" class="icon">
        <div class="views">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: "workspace"
};
</script>

<style scoped>
.worksp {
    width: 100%;
    float: left;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100% - 127.4px);
    height: -moz-calc(100% - 127.4px);
    height: -webkit-calc(100% - 127.4px);
    position: relative;
    background-color: #eef9e1;
}

img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.deco {
    height: 50%;
    right: 0px;
    top: 96.2px;
    z-index: 0;
    position: fixed;
}

.icon {
    height: 50%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    opacity: 0.4;
    z-index: 0;
}

.views {
    position: absolute;
    top: 3%;
    left: 10%;
    width: 80%;
}
</style>
