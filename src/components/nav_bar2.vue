<template>
    <div class="nav_bar2">
        <div class="left_area">
            <p class="p1">华南理工大学学生会</p>
            <p class="p2">物资管理系统</p>
        </div>

        <img src="/SUlogo.png" width="110px" height="55px">

        <ul class="menu">
            <li>
                <router-link to="/home/borrow">物资借出</router-link>
            </li>
            <li>
                <router-link to="/home/return">物资归还</router-link>
            </li>
            <li>
                <router-link to="/home/query">
                    记录查询
                    <span>5</span>
                </router-link>
            </li>
            <li>
                <router-link to="/home/repository">物品管理</router-link>
            </li>
            <li>
                <router-link to="/home/usermanage" v-if="admin">用户管理</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "nav_bar2",
    props: {
        admin: Boolean
    }
};
</script>

<style>
.nav_bar2 {
    overflow: hidden;
    background-image: url("/headbar.png");
    background-size: 100%;
    float: left;
    width: 100%;
    box-shadow: 0px 10px 5px #888888;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    z-index: 7;
}

.nav_bar2 img {
    float: left;
    margin-top: 7px;
}

.left_area {
    overflow: hidden;
    float: left;
    margin-left: 10px;
}

.p1 {
    font-size: 17px;
    font-weight: 500;
    color: #f1fbcf;
    text-align: left;
    margin-bottom: 1px;
    margin-top: 3px;
}
.p2 {
    font-size: 27px;
    margin-left: 30px;
    margin-top: 0px;
    margin-bottom: 4px;
    color: white;
}

.menu {
    float: right;
    overflow: hidden;
    list-style-type: none;
    margin: 0;
}
.menu li {
    float: left;
    border-color: #5db875;
}
.menu a {
    font-size: 20px;
    text-decoration: none;
    padding: 22px;
    display: flex;
}
.menu a:hover:not(.active) {
    color: white;
    background-color: #339941;
    opacity: 0.8;
}
.a_active {
    color: white;
    background-color: #339941;
    opacity: 0.8;
}
.router-link-active {
    color: white;
    background-color: #339941;
    opacity: 0.8;
}
.menu a:not(.router-link-active) {
    color: green;
}

.nav_bar2 span {
    font-size: 14px;
    color: white;
    background-color: red;
    height: 17px;
    width: 17px;
    border-radius: 12px;
    position: relative;
    top: -5px;
    left: 4px;
    display: inline-block;
}
</style>
