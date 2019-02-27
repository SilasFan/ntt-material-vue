import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/login.vue";
import Borrow from "./components/workpages/borrow.vue";
import Return from "./components/workpages/return.vue";
import Requery from "./components/workpages/requery.vue";
import Repository from "./components/workpages/repository.vue";
import userManage from "./components/workpages/usermanage.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/home",
			name: "home",
			component: Home,
			children: [
				{
					path: "borrow",
					name: "borrow",
					component: Borrow
				},
				{
					path: "return",
					name: "return",
					component: Return
				},
				{
					path: "query",
					name: "query",
					component: Requery
				},
				{
					path: "repository",
					name: "repository",
					component: Repository
				},
				{
					path: "usermanage",
					name: "usermanage",
					component: userManage
				}
			]
		},
		{
			path: "/login",
			name: "login",
			component: Login
		}
	]
});
