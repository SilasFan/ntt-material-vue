<template>
	<div>
		<h1>物资归还</h1>
		<input type="text" v-model="transcode" placeholder="请填写单号" />
		<button type="button" class="button_1" v-on:click="queryRecord">查&ensp;询</button>
		<br />
		<div class="record">
			<span>·申请单位：&ensp;{{ curr_record.res_person.group }}</span>
			<br />
			<span>·负责人：&ensp;&ensp;&ensp;{{ curr_record.res_person.name }}</span>
			<br />
			<span>·手机号：&ensp;&ensp;&ensp;{{ curr_record.res_person.phone }}</span>
			<br />
			<span
				>·学号：&ensp;&ensp;&ensp;&ensp;&ensp;{{
					curr_record.res_person.studentNumber
				}}</span
			>
			<br />
			<span>·借出日期：&ensp;{{ curr_record.date }}</span>
			<br />
			<br />
			<span>·物资清单：</span>
			<br />
			<br />
			<table width="1000" cellspacing="6">
				<tr align="center">
					<td>ID</td>
					<td>名称</td>
					<td>数量</td>
					<td>描述</td>
				</tr>
				<tr v-for="obj in curr_record.items" :key="obj.name" align="center">
					<td>{{ obj.id }}</td>
					<td>{{ obj.name }}</td>
					<td>{{ obj.borrow }}</td>
					<td>{{ obj.brokenDes[obj.brokenDes.length - 1] }}</td>
				</tr>
			</table>

			<p style="margin-bottom:8px;">归还备注（选填）：</p>
			<textarea v-model="note"></textarea>
			<button type="button" class="confirm" v-on:click="returnRecord">确认提交</button>
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
				res_person: {
					name: "",
					group: "",
					phone: "",
					studentNumber: ""
				},
				items: [],
				date: ""
			},
			note: "",
			reID: ""
		};
	},
	methods: {
		queryRecord() {
			let str = {
				query: `query{
					recordByID(id: "${this.transcode}"){
						res_person{
							name,
							group,
							phone,
							studentNumber
						},
						items{
							id,
							name,
							borrow,
							brokenDes
						},
						date
					}
				}`,
				variables: null
			};

			fetch("http://localhost:4000/graphql", {
				method: "POST",
				body: JSON.stringify(str)
			})
				.then(res =>
					res.json().then(data => {
						this.curr_record = data.data.recordByID;
						this.reID = this.transcode;
					})
				)
				.catch(e => {
					window.console.log(e);
				});
		},
		returnRecord() {
			let now = new Date();
			const Tnote = this.note;
			this.note = "return date:" + now.toUTCString() + Tnote;
			let str = {
				query: `mutation{returnRecord(record:{id: "${
					this.reID
				}",note: "${this.note.toString()}"})}`,
				variables: null
			};

			fetch("http://localhost:4000/graphql", {
				method: "POST",
				body: JSON.stringify(str),
				headers: {
					"content-type": "application/json"
				}
			}).then(res =>
				res.json().then(data => {
					if (data.data.returnRecord) {
						alert("归还成功！");
					} else {
						alert("归还失败,请检查错误或者已经归还！");
					}
				})
			);
		}
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
