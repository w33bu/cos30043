const app = Vue.createApp({
  data() {
	return {
	  units: [],
	  currentPage: 1,
	  itemsPerPage: 5,
	};
  },
  computed: {
	paginatedUnits() {
	  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
	  const endIndex = startIndex + this.itemsPerPage;
	  return this.units.slice(startIndex, endIndex);
	},
	totalPages() {
	  return Math.ceil(this.units.length / this.itemsPerPage);
	},
  },
  methods: {
	changePage(page) {
	  this.currentPage = page;
	},
  },
  mounted() {
	fetch('units.json')
	  .then(response => response.json())
	  .then(data => {
		this.units = data;
	  })
	  .catch(error => {
		console.error('Error:', error);
	  });
  }
});

app.mount('#app');
