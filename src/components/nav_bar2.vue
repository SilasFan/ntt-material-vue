//目前还没做的：1.各个a标签的onclick跳转；2.长时间active的元素修改（在onclick上绑定）（用JS直接数组绑定修改class a_active）
import Vue from 'vue';

<template>
    <div class="nav_bar2">
        <div class="left_area">
            <p class="p1">华南理工大学学生会</p>
            <p class="p2">物资管理系统</p>
        </div>

        <img src="/SUlogo.png" width="110px" height="55px">

        <ul class="menu">
            <li>
                <router-link to="/home/main/borrow">物资借出</router-link>
            </li>
            <li>
                <router-link to="/home/main/return">物资归还</router-link>
            </li>
            <li>
                <a href="url_recordQuery">记录查询</a>
            </li>
            <li>
                <a href="store_query">存量查询</a>
            </li>
            <li>
                <a href="url_ddlRemind">逾期提醒</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "nav_bar2"
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
</style>
