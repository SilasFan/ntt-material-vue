<template>
	<div class="borrow">
		<h1>物资借出</h1>
		<br />
		<span>· 申请单位</span>
		<input v-model="re_person.group" placeholder="请填写单位" style="width:30%" required />
		<br />
		<br />
		<br />
		<span>· 负责人</span>
		<input
			v-model="re_person.name"
			placeholder="请填写负责人"
			style="margin-left:72px"
			required
		/>
		<input v-model="re_person.phone" placeholder="手机号" required />
		<input v-model="re_person.studentNumber" placeholder="学号（选填）" />
		<br />
		<br />
		<br />
		<br />
		<span>· 借用物资</span>
		<input v-model="curr_item.id" placeholder="请填写id" required />
		<input v-model="curr_item.count" placeholder="请填写数量" type="number" required />
		<input placeholder="备注" v-model="curr_item.brokenDes" type="text" />
		<button type="button" style="margin-left:3px;" v-on:click="queryItem">添 加</button>
		<button
			type="button"
			style="margin-left:3px;background-color:#fb3530;border:#fb3530 2px solid;"
			v-on:click="deleteItem"
		>
			删 除
		</button>
		<br />
		<br />
		<br />
		<h5 style="color:orange;margin-top:5px;text-align:left">
			（删除时请在id处填写删除第n个即可）
		</h5>
		<h4
			style="color:white;margin-top:5px;text-align:left;background-color:red;float:left;padding:1px 20px 1px 20px;margin-top:0px;"
			v-if="errorDis"
		>
			添加错误,不存在该物品或者借出数量为0
		</h4>
		<table width="1000">
			<tr v-for="obj in pre_borrow" :key="obj.name">
				<td>{{ obj.id }}</td>
				<td>{{ obj.name }}</td>
				<td>{{ obj.count }}</td>
				<td>{{ obj.brokenDes[obj.brokenDes.length - 1] }}</td>
			</tr>
		</table>

		<button type="button" class="confirm" v-on:click="submitRecord">确认提交</button>
	</div>
</template>

<script>
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default {
	name: "borrow",
	data() {
		return {
			re_person: {
				name: "",
				group: "",
				phone: "",
				studentNumber: ""
			},
			pre_borrow: [
				{
					name: "桌子",
					brokenDes: ["一张平凡的桌子"],
					id: "12596",
					count: 1
				},
				{
					name: "手机",
					brokenDes: ["这台是iphone 1169"],
					id: "12599",
					count: 233
				}
			],
			curr_item: {
				id: null,
				count: undefined,
				brokenDes: null
			},
			errorDis: false
		};
	},
	methods: {
		queryItem() {
			if (
				this.curr_item.count == 0 ||
				this.curr_item.count.isNaN() ||
				this.curr_item.count == null
			) {
				this.errorDis = true;
				return;
			}

			let str = {
				query: `query{
					goodByID(id: ${this.curr_item.id}){
						id,
						name,
						brokenDes
					}
				}`,
				variables: null
			};

			fetch("http://localhost:4000/graphql", {
				method: "POST",
				body: JSON.stringify(str)
			}).then(res =>
				res.json().then(data => {
					if (data.data.goodByID != null) {
						let it = data.data.goodByID;
						let des = data.data.goodByID.brokenDes;
						if (this.curr_item.brokenDes != null && this.curr_item.brokenDes != null) {
							des.push(this.curr_item.brokenDes);
						}
						this.pre_borrow.push({
							id: Number(it.id),
							name: it.name,
							count: Number(this.curr_item.count),
							brokenDes: des
						});
						this.errorDis = false;
					} else {
						this.errorDis = true;
					}
				})
			);
		},
		deleteItem() {
			this.pre_borrow.splice(
				Number(this.curr_item.id) - 1,
				Number(this.curr_item.id) < 0 ? 0 : 1
			);
			if (Number(this.curr_item.id) < 1) {
				alert("输入为负数！");
			}
		},
		submitRecord() {
			let Items = [];
			for (const i in this.pre_borrow) {
				const item = this.pre_borrow[i];
				Items.push({
					id: Number(item.id),
					borrow: item.count,
					brokenDes: item.brokenDes
				});
			}

			var trans = {
				res_person: this.re_person,
				items: Items
			};

			let str = {
				query: `mutation CreateRecord_a($record: CreateRecord!){
						createRecord(record: $record)
					}\n\n`,
				variables: { record: trans },
				operationName: "CreateRecord_a"
			};

			fetch("http://localhost:4000/graphql", {
				method: "POST",
				body: JSON.stringify(str),
				headers: {
					"Content-type": "application/json"
				}
			}).then(res =>
				res.json().then(data => {
					if (data.data != null) {
						alert("借出成功！单号为" + data.data.createRecord);
						this.errorDis = false;
					} else {
						this.errorDis = true;
					}
				})
			);
		}
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
}

input[type="number"] {
	-moz-appearance: textfield;
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
	margin-top: 30px;
	text-align: center;
	border: none;
	color: #208146;
	font-size: 17px;
}

td {
	padding-bottom: 10px;
}
</style>
