import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import worksp from "./components/workspace.vue";
import Borrow from "./components/workpages/borrow.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/home",
			name: "home",
			component: Home,
			children: [
				{
					path: "/main",
					name: "worksp",
					component: worksp,
					children: [
						{
							path: "/borrow",
							name: "borrow",
							component: Borrow
						}
					]
				}
			]
		}
	]
});
