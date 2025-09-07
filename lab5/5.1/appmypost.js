	const app = Vue.createApp({})

app.component('app-mypost', {
  data() {
	return {
	  statPosts: [],
	  strStatus: ''
	}
  },
  template: `
	<div>
	  <input type="text" v-model="strStatus" placeholder="Enter your status">
	  <button @click="add(strStatus)">Post</button>

	  <div v-for="(post, index) in statPosts" :key="index">
		<p>{{ post }}</p>
		<button @click="remove(index)">Delete</button>
	  </div>
	</div>
  `,
  methods: {
	add(status) {
	  this.statPosts.unshift(status);
	  this.strStatus = '';
	},
	remove(index) {
	  this.statPosts.splice(index, 1);
	}
  }
});

app.mount('#app')
