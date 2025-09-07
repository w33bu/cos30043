var units = [
  {
	code: "ICT10001",
	unit: "Problem Solving with ICT",
	creditPoints: 12.5,
	type: "Core",
  },
  {
	code: "COS10005",
	unit: "Web Development",
	creditPoints: 12.5,
	type: "Core",
  },
  {
	code: "INF10003",
	unit: "Introduction to Business Information Systems",
	creditPoints: 12.5,
	type: "Core",
  },
  {
	code: "INF10002",
	unit: "Database Analysis and Design",
	creditPoints: 12.5,
	type: "Core",
  },
  {
	code: "COS10009",
	unit: "Introduction to Programming",
	creditPoints: 12.5,
	type: "Core",
  },
  {
	code: "INF30029",
	unit: "Information Technology Project Management ",
	creditPoints: 12.5,
	type: "Core",
  },
];

// Creating the Unit component
const Unit = {
  data() {
	return {
	  units
	};
  },
  computed: {
	filteredUnits() {
	  return this.units.find(unit => unit.code === this.$route.params.id);
	}
  },
  template: `
	<div>
	  <h2>{{ filteredUnits.unit }}</h2>
	  <p><strong>Code:</strong> {{ filteredUnits.code }}</p>
	  <p><strong>Unit:</strong> {{ filteredUnits.unit }}</p>
	  <p><strong>Credit Points:</strong> {{ filteredUnits.creditPoints }}</p>
	  <p><strong>Type:</strong> {{ filteredUnits.type }}</p>
	</div>
  `
};
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
	{
	  path: '/unit/:id',
	  component: Unit
	}
  ]
});

// Create a new app instance
const app = Vue.createApp({});

// Creating the component for the lookup table
app.component('app-lookup2', {
  data() {
	return {
	  units
	};
  },
  template: `
	<div>
	  <h1>Unit Information System</h1>
	  <table>
		<thead>
		  <tr>
			<th>Unit Code</th>
			<th>Unit</th>
			<th>More Details</th>
		  </tr>
		</thead>
		<tbody>
		  <tr v-for="unit in units" :key="unit.code">
			<td>{{ unit.code }}</td>
			<td>{{ unit.unit }}</td>
			<td>
			  <router-link :to="'/unit/' + unit.code">More Details</router-link>
			</td>
		  </tr>
		</tbody>
	  </table>
	  <router-view></router-view>
	</div>
  `
});

// Use the router and mount it to the app
app.use(router);
app.mount('#app');
