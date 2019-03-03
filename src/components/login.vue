<template>
    <div class="login">
        <img class="deco_1" src="/deco.png">
        <img class="deco_2" src="/deco_2.png">
        <div class="log">
            <div class="llog">
                <form>
                    用户名
                    <input type="text" v-model="userID">
                    <br>
                    <br>密 码
                    <input type="password" v-model="pswd" style="margin-left:20px;">
                    <br>
                    <p v-if="errorDisplay">出错啦！</p>
                </form>
            </div>
            <button type="button" value="23333" v-on:click="login"></button>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Router from "vue-router";
import { json } from "body-parser";
Vue.use(Router);

export default {
    name: "login",
    data() {
        return {
            userID: "",
            pswd: "",
            isLogin: false,
            errorDisplay: false
        };
    },
    methods: {
        userLogin() {
            if (this.isLogin) {
                this.$router.push({
                    name: "borrow",
                    params: { login: true, user: this.userID }
                });
            } else {
                this.errorDisplay = true;
            }
        },
        login() {
            let str = {
                query: `query{
					login(id:"${this.userID}",passwd:"${this.pswd}")
				}`,
                variables: null
            };
            let result = false;

            //用fetch请求
            fetch("http://localhost:4000/graphql", {
                method: "POST",
                body: JSON.stringify(str)
            })
                .then(res =>
                    res
                        .json()
                        .then(data => {
                            this.isLogin = data.data.login;
                        })
                        .catch(e => (this.isLogin = false))
                )
                .then(() => this.userLogin())
                .catch(e => (this.isLogin = false));
        }
    }
};
</script>

<style scoped>
.login {
    background-image: url("/loginbg.png");
    background-size: 100%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
}

h1 {
    margin: 0px;
}

.deco_1 {
    height: 45%;
    right: 0px;
    top: 0px;
    z-index: 0;
    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.deco_2 {
    height: 45%;
    left: 0px;
    bottom: 0px;
    z-index: 0;
    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.log {
    position: fixed;
    z-index: 2;
    background-image: url("/login.png");
    background-size: 100%;
    height: 280px;
    width: 448px;
    top: 25%;
    left: calc(50% - 224px);
}

.llog {
    position: absolute;
    z-index: 2;
    top: 120px;
    left: 65px;
    font-size: 17px;
    color: #208146;
}

.llog input {
    border: none;
    color: #208146;
    background-color: #f5f7f4;
    border-bottom: #208146 solid 2px;
    margin-left: 7px;
    width: 250px;
}

button {
    width: 200px;
    height: 48px;
    position: absolute;
    bottom: 0px;
    border: 0px;
    padding: 0px;
    left: 124px;
    z-index: 2;
    font-size: 15px;
    opacity: 0;
    cursor: pointer;
}

p {
    margin-top: 12px;
    text-align: left;
    color: white;
    background-color: #ed4014;
}
</style>
