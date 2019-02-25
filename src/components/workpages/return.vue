<template>
    <div>
        <h1>物资归还</h1>
        <input type="text" v-model="transcode" placeholder="请填写单号">
        <button type="button" class="button_1">查&ensp;询</button>
        <br>
        <div class="record">
            <span>·申请单位：&ensp;{{curr_record.borrow_group}}</span>
            <br>
            <span>·负责人：&ensp;&ensp;&ensp;{{curr_record.res_person.name}}</span>
            <br>
            <span>·手机号：&ensp;&ensp;&ensp;{{curr_record.res_person.phone}}</span>
            <br>
            <span>·学号：&ensp;&ensp;&ensp;&ensp;&ensp;{{curr_record.res_person.student_number}}</span>
            <br>
            <span>·借出日期：&ensp;{{curr_record.borrow_date}}</span>
            <br>
            <br>
            <span>·物资清单：</span>
            <br>
            <br>
            <table width="1000" cellspacing="6">
                <tr align="center">
                    <td>ID</td>
                    <td>名称</td>
                    <td>数量</td>
                    <td>描述</td>
                </tr>
                <tr v-for="obj in curr_record.items" :key="obj.name" align="center">
                    <td>{{obj.id}}</td>
                    <td>{{obj.name}}</td>
                    <td>{{obj.count}}</td>
                    <td>{{obj.description}}</td>
                </tr>
            </table>
            <p style="margin-bottom:8px;">归还备注（选填）：</p>
            <textarea v-model="back_description"></textarea>
            <button type="button" class="confirm">确认提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "return",
    data() {
        return {
            transcode: "",
            curr_record: {
                borrow_group: "学生组织-学生会网络队",
                res_person: {
                    name: "dalao",
                    phone: "1234567890",
                    student_number: "201733333"
                },
                borrow_date: "2019-2-15",
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
            },
            back_description: ""
        };
    }
};
</script>

<style scoped>
h1 {
    margin-top: 23.5px;
    color: #208146;
    font-weight: 300;
    font-size: 35px;
    text-align: left;
    float: left;
}

input {
    text-align: center;
    margin-left: 100px;
    margin-top: 23.5px;
    height: 44px;
    width: 220px;
    border: none;
    font-size: 22px;
    color: #208146;
    background-color: #ffffff;
    float: left;
}

.button_1 {
    margin-top: 23.5px;
    height: 44px;
    font-size: 20px;
    color: white;
    background-color: #208146;
    border: #208146 2px solid;
    border-radius: 4px;
    cursor: pointer;
    float: left;
}

.record {
    text-align: left;
    color: #208146;
    position: relative;
    width: 100%;
    height: auto;
    float: left;
    margin-top: 20px;
    font-size: 17px;
}

.confirm {
    position: fixed;
    right: 4%;
    bottom: 60px;
    height: 60px;
    width: 100px;
    font-size: 20px;
    border-radius: 8px;
    background-color: #208146;
    color: white;
    border: #208146 2px solid;
    cursor: pointer;
}

textarea {
    height: 120px;
    width: 40%;
    border: none;
    resize: none;
    color: #208146;
    font-size: 17px;
}

span,
p,
table {
    font-size: 17.5px;
}
</style>