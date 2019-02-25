<template>
    <div class="req">
        <div class="header">
            <h2>23333</h2>
            <input type="text" v-model="searchKey" placeholder="Search by name...">
        </div>
        <table cellspacing="0">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Count</th>
                <th>Desciption</th>
            </tr>
            <tr v-for="item in items" :key="item.name" class="items" @click="trClick();">
                <th>{{item.id}}</th>
                <th>{{item.name}}</th>
                <th>{{item.count}}</th>
                <th>{{item.description}}</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "requery",
    data() {
        return {
            serchKey: "",
            items: [
                {
                    name: "桌子",
                    description: "一张平凡的桌子",
                    id: "12596",
                    count: 1
                },
                {
                    name: "手机",
                    description: "这台是iphone 1169",
                    id: "12599",
                    count: 233
                }
            ]
        };
    },
    methods: {
        trClick(target) {}
    }
};
</script>

<style scoped>
.req {
    width: 100%;
    overflow: hidden;
    box-shadow: 1px 1px 5px #888888;
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

.items {
    cursor: pointer;
}
.items:hover {
    background-color: rgb(236, 235, 235);
}

th {
    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
    line-height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

table {
    width: 100%;
    background-color: white;
}
</style>