import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/login.vue";
import worksp from "./components/workspace.vue";
import Borrow from "./components/workpages/borrow.vue";
import Return from "./components/workpages/return.vue";
import Requery from "./components/workpages/requery.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/home",
			name: "home",
			component: Home,
			children: [
				{
					path: "main",
					name: "worksp",
					component: worksp,
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
							path: "requery",
							name: "requery",
							component: Requery
						}
					]
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
