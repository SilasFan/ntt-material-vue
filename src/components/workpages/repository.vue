<template>
    <div class="repo">
        <div class="header">
            <h2>物品管理</h2>
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
                <th>名称</th>
                <th>数量</th>
                <th>剩余</th>
                <th>损坏记录</th>
            </tr>
            <transition name="fade" v-if="item_modify">
                <div class="item_modify">
                    <h3>修改物品</h3>

                    <br>
                    <span style="margin-left:10%">ID</span>
                    <input type="text" v-model="re_modify.id" placeholder="ID...">
                    <span style="width:10%;">&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                    <span>名称</span>
                    <input type="text" v-model="re_modify.name" placeholder="Name...">
                    <br>
                    <br>
                    <span style="margin-left:10%;">数量</span>
                    <input type="number" v-model="re_modify.count" placeholder="Amount...">
                    <span style="width:10%;">&ensp;&ensp;&ensp;&ensp;&ensp;</span>
                    <span>剩余</span>
                    <input type="number" v-model="re_modify.remain" placeholder="Remain...">
                    <br>
                    <br>
                    <button>添加</button>
                    <button>修改</button>
                    <button style="background-color:#ff5252">删除</button>
                    <h5 style="color:orange;margin-top:5px;">（删除时只填ID即可，添加时不需要填ID）</h5>
                </div>
            </transition>
            <template v-for="item in items">
                <tr :key="item.id" class="items">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.count}}</td>
                    <td>{{item.remain}}</td>
                    <td>{{item.description}}</td>
                </tr>
            </template>
        </table>
        <div class="edit">
            <img src="/edit.svg" v-on:click="item_modify = !item_modify">
        </div>
    </div>
</template>

<script>
export default {
    name: "repository",
    data() {
        return {
            searchKey: "",
            item_modify: true,
            re_modify: {
                id: "",
                name: "",
                count: Number(0),
                remain: Number(0)
            },
            items_raw: [
                {
                    name: "桌子",
                    description: "一张平凡的桌子",
                    id: "12596",
                    count: 1,
                    remain: 1
                },
                {
                    name: "手机",
                    description: "这台是iphone 1169 \n 2333",
                    id: "12599",
                    count: 233,
                    remain: 77
                }
            ],
            items: []
        };
    },
    methods: {
        search() {
            this.items =
                this.searchKey === ""
                    ? this.items_raw
                    : this.items_raw.filter(
                          item => item.name.indexOf(this.searchKey) >= 0
                      );
        }
    },
    beforeMount() {
        this.items = this.items_raw;
    }
};
</script>

<style scoped>
.repo {
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 5px 5px #888888;
    margin-top: 15px;
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

.items td {
    word-break: break-all;
    white-space: pre-wrap;
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
    line-height: 35px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

table {
    width: 100%;
    background-color: white;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
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

.item_modify {
    padding-top: 2%;
    border-top: 1px rgba(0, 0, 0, 0.12) solid;
    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
    display: table-caption;
    background-color: white;
    text-align: left;
}
.item_modify input {
    margin-left: 25px;
    height: 28.8px;
    width: 220px;
    border: none;
    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
    font-family: Roboto, sans-serif;
    font-size: 16px;
}
.item_modify h3 {
    position: relative;
    margin: 0;
    margin-left: 3%;
    text-align: left;
}
.item_modify span {
    font-size: 18px;
}
.item_modify button {
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
.item_modify button:hover {
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.7;
}
.item_modify button:active {
    opacity: 0.5;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>