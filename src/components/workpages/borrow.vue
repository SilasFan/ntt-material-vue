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
    </div>
</template>

<script>
export default {
    name: "borrow",
    data() {
        return {
            selected: "",
            unit: "",
            re_person: ""
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
</style>