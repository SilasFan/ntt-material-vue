<template>
    <div class="repo">
        <div class="header">
            <h2>用户管理</h2>
            <input
                type="text"
                v-model="searchKey"
                placeholder="Search by name..."
                v-on:input="search"
            >
        </div>
        <table cellspacing="0">
            <tr>
                <th>ID</th>
                <th>Password</th>
            </tr>
            <transition name="fade" v-if="add_user">
                <div class="add_user">
                    <h3>修改用户</h3>
                    <br>
                    <span style="margin-left:10%">用户名</span>
                    <input type="text" v-model="re_add.id" placeholder="User ID...">
                    <span style="width:10%;">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                    <span>密码</span>
                    <input type="text" v-model="re_add.passwd" placeholder="Password...">
                    <br>
                    <br>
                    <br>
                    <button v-on:click="addUser">添加</button>
                    <button v-on:click="modifyUser">修改</button>
                    <button style="background-color:#ff5252" v-on:click="deleteUser">删除</button>
                </div>
            </transition>
            <template v-for="user in users">
                <tr :key="user.id" class="items">
                    <td>{{user.id}}</td>
                    <td>{{user.passwd}}</td>
                </tr>
            </template>
        </table>
        <div class="edit">
            <img src="/edit.svg" v-on:click="add_user = !add_user">
        </div>
    </div>
</template>

<script>
export default {
    name: "repository",
    data() {
        return {
            searchKey: "",
            users_raw: [],
            users: [],
            re_add: {
                id: "",
                passwd: ""
            },
            add_user: true
        };
    },
    methods: {
        search() {
            this.users =
                this.searchKey === ""
                    ? this.users_raw
                    : this.users_raw.filter(
                          user => user.id.indexOf(this.searchKey) >= 0
                      );
        },
        reload() {
            let str = {
                query: `query{
					allUser{
						id,
						passwd
					}
				}`,
                variables: null
            };

            fetch("http://localhost:4000/graphql", {
                method: "POST",
                body: JSON.stringify(str)
            }).then(res =>
                res.json().then(data => {
                    if (data.data === null) {
                        window.console.log("some errors occur");
                        return;
                    } else {
                        this.users_raw = data.data.allUser;
                        this.users = this.users_raw;
                    }
                })
            );
        },
        addUser() {
            let str = {
                query: `mutation{
					addUser(user:{
						id: "${this.re_add.id}",
						passwd: "${this.re_add.passwd}"
					})
				}`,
                variables: null
            };

            fetch("http://localhost:4000/graphql", {
                method: "POST",
                body: JSON.stringify(str)
            }).then(res =>
                res.json().then(data => {
                    if (data.data == null) {
                        alert("网络错误！");
                    } else if (!data.data.addUser) {
                        alert("用户已存在！");
                    } else {
                        alert("添加成功！");
                        this.reload();
                    }
                })
            );
        },
        modifyUser() {
            let str = {
                query: `mutation{
					updateUser(user:{
						id: "${this.re_add.id}",
						passwd: "${this.re_add.passwd}"
					})
				}`,
                variables: null
            };

            fetch("http://localhost:4000/graphql", {
                method: "POST",
                body: JSON.stringify(str)
            }).then(res =>
                res.json().then(data => {
                    if (data.data == null) {
                        alert("网络错误！");
                    } else if (!data.data.updateUser) {
                        alert("用户不存在！");
                    } else {
                        alert("修改成功！");
                        this.reload();
                    }
                })
            );
        },
        deleteUser() {
            let str = {
                query: `mutation{
					deleteUser(user:"${this.re_add.id}")
				}`,
                variables: null
            };

            fetch("http://localhost:4000/graphql", {
                method: "POST",
                body: JSON.stringify(str)
            }).then(res =>
                res.json().then(data => {
                    if (data.data == null) {
                        alert("网络错误！");
                    } else if (!data.data.deleteUser) {
                        alert("用户不存在！");
                    } else {
                        alert("删除成功！");
                        this.reload();
                    }
                })
            );
        }
    },
    beforeMount() {
        this.reload();
    }
};
</script>

<style scoped>
.repo {
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 5px 5px #888888;
    margin-top: 15px;
    margin-bottom: 35px;
}
.edit {
    position: fixed;
    height: 48px;
    width: 48px;
    right: 2%;
    bottom: calc(31px + 2%);
    cursor: pointer;
    background-color: #448aff;
    border-radius: 25px;
}
.edit:hover {
    opacity: 0.6;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.edit img {
    display: flex;
    margin-top: 9px;
    margin-left: 9px;
}

.header {
    width: 100%;
    overflow: hidden;
    background-color: white;
}
.header h2 {
    float: left;
    margin-top: 25px;
    font-weight: 400;
    margin-left: 5%;
    font-family: Roboto, sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.header input {
    margin-top: 31px;
    margin-right: 5%;
    border: 0px;
    border-bottom: 1px #949494 solid;
    float: right;
    bottom: 0;
    font-size: 16px;
    font-family: Roboto, sans-serif;
}

.items:hover {
    background-color: rgb(236, 235, 235);
}

.content {
    transition: all 5s ease-in-out 5s;
}

th,
td {
    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
    line-height: 300%;
}

table {
    width: 100%;
    background-color: white;
}

.add_user {
    padding-top: 2%;
    border-top: 1px rgba(0, 0, 0, 0.12) solid;
    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
    display: table-caption;
    background-color: white;
    text-align: left;
}
.add_user input {
    margin-left: 25px;
    height: 28.8px;
    width: 220px;
    border: none;
    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
    font-family: Roboto, sans-serif;
    font-size: 16px;
}
.add_user h3 {
    position: relative;
    margin: 0;
    margin-left: 3%;
    text-align: left;
}
.add_user span {
    font-size: 18px;
}
.add_user button {
    background-color: #448aff;
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin-left: 2%;
    margin-bottom: 10px;
    padding: 5px 10px 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 2px #888888;
}
.add_user button:hover {
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.7;
}
.add_user button:active {
    opacity: 0.5;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>