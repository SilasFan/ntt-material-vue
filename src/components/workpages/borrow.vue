<template>
    <div class="borrow">
        <h1>物资借出</h1>
        <br>
        <span>· 申请单位</span>
        <div class="select-father">
            <select v-model="selected">
                <option disabled value>请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <input v-model="unit" placeholder="请填写单位">
        </div>
        <br>
        <br>
        <br>
        <span>· 负责人</span>
        <input v-model="re_person" placeholder="请填写负责人" style="margin-left:72px">
        <br>
        <br>
        <br>
        <br>
        <span>· 借用物资</span>
        <input v-model="curr_id" placeholder="请填写id">
        <button type="button">添 加</button>
        <br>
        <br>
        <table width="1000">
            <tr v-for="obj in pre_borrow" :key="obj.name">
                <td>{{obj.id}}</td>
                <td>{{obj.name}}</td>
                <td>{{obj.count}}</td>
                <td>{{obj.description}}</td>
            </tr>
        </table>
        <button type="button" class="confirm">确认提交</button>
    </div>
</template>

<script>
export default {
    name: "borrow",
    data() {
        return {
            selected: "",
            unit: "",
            re_person: "",
            curr_id: "",
            pre_borrow: [
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
    }
};
</script>

<style scoped>
.borrow {
    z-index: 2;
    background-color: inherit;
}

.borrow h1 {
    color: #208146;
    font-weight: 300;
    font-size: 40px;
    text-align: left;
}

.borrow span {
    float: left;
    color: #208146;
    font-size: 22px;
}

select {
    border: none;
    outline: none;
    height: 28.8px;
    line-height: 28px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 18px;
    color: #208146;
    width: 230px;
    text-align: center;
    background: url("/icon2.svg") no-repeat right;
    background-color: #ffffff;
    float: left;
}

.select-father {
    float: left;
    color: #208146;
    margin-left: 50px;
    position: relative;
}

.confirm {
    position: fixed;
    right: 4%;
    bottom: 60px;
    height: 60px;
    width: 100px;
    font-size: 20px;
    border-radius: 8px;
}

input {
    text-align: center;
    margin-left: 50px;
    height: 28.8px;
    width: 220px;
    border: none;
    font-size: 18px;
    color: #208146;
    background-color: #ffffff;
    float: left;
}

button {
    height: 30.8px;
    font-size: 18px;
    color: white;
    background-color: #208146;
    border: #208146 2px solid;
    border-radius: 4px;
    cursor: pointer;
    float: left;
}

table {
    margin-left: 50px;
    margin-top: 10px;
    text-align: center;
    border: none;
    color: #208146;
    font-size: 17px;
}

td {
    padding-bottom: 10px;
}
</style>