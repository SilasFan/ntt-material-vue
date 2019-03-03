<template>
	<div class="req">
		<div class="header">
			<h2>所有记录</h2>
			<input
				type="text"
				v-model="searchKey"
				placeholder="Search by ID..."
				v-on:input="search"
			/>
		</div>
		<table cellspacing="0">
			<tr>
				<th>ID</th>
				<th>借出人</th>
				<th>手机号</th>
				<th>借出日期</th>
			</tr>
			<template v-for="record in records">
				<tr :key="record.id" v-on:click="record.dis = !record.dis" class="records">
					<td>{{ record.id }}</td>
					<td>{{ record.res_person.name }}</td>
					<td>{{ record.res_person.phone }}</td>
					<td>{{ record.date }}</td>
				</tr>
				<transition name="fade" :key="record.date">
					<tr class="content" v-show="record.dis" :key="record.id">
						<p>ID: {{ record.id }}</p>
						<p>借出人: {{ record.res_person.name }}</p>
						<p>组织：{{ record.res_person.group }}</p>
						<p>手机号：{{ record.res_person.phone }}</p>
						<p>学号：{{ record.res_person.studentNumber }}</p>
					</tr>
				</transition>
			</template>
		</table>
	</div>
</template>

<script>
export default {
	name: "requery",
	data() {
		return {
			searchKey: "",
			records_raw: [
				{
					id: "",
					res_person: {
						name: "",
						phone: "",
						studentNumber: "",
						group: ""
					},
					date: "",
					dis: true
				}
			],
			records: []
		};
	},
	methods: {
		search() {
			this.records =
				this.searchKey === ""
					? this.records_raw
					: this.records_raw.filter(record => record.id.indexOf(this.searchKey) >= 0);
		}
	},
	beforeMount() {
		let str = {
			query: `query{
				allRecord {
					id,
					res_person {
						studentNumber,
						name,
						group,
						phone
					},
					date
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
					alert("发生了一些错误");
					return;
				}
				this.records_raw = data.data.allRecord;
				this.records_raw.map(elem => {
					elem.dis = false;
				});
				this.records = this.records_raw;
			})
		);
	}
};
</script>

<style scoped>
.req {
	width: 100%;
	overflow: hidden;
	box-shadow: 0px 5px 5px #888888;
	margin-top: 15px;
	margin-bottom: 30px;
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

.records {
	cursor: pointer;
}
.records:hover {
	background-color: rgb(236, 235, 235);
}

.content {
	transition: all 5s ease-in-out 5s;
}
.content p {
	text-align: left;
	margin-left: 10%;
	margin-right: 0px;
}

th,
td {
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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
