	const app = Vue.createApp({
	  data() {
		return {
		  posts: []
		};
	  },
	  mounted() {
		$.getJSON('https://jsonplaceholder.typicode.com/posts', (data) => {
		  this.posts = data.map(post => {
			return {
			  id: post.id,
			  title: post.title
			};
		  });
		});
	  }
	});

	app.mount('#app');
