	const app = Vue.createApp({
	  data() {
		return {
		  firstName: '',
		  lastName: '',
		  userName: '',
		  password: '',
		  confirmPassword: '',
		  email: '',
		  address: '',
		  suburb: '',
		  postcode: '',
		  mobile: '',
		  errors: {},
		  showTerms: false
		};
	  },
	  computed: {
		hasErrors() {
		  return Object.keys(this.errors).length > 0;
		}
	  },
	  methods: {
		submitForm() {
		  this.errors = {};

		  if (!/^[a-zA-Z]+$/.test(this.firstName)) {
			this.errors.firstName = 'First name should contain letters only.';
		  }

		  if (!/^[a-zA-Z]+$/.test(this.lastName)) {
			this.errors.lastName = 'Last name should contain letters only.';
		  }

		  if (this.userName.length < 3) {
			this.errors.userName = 'User name should be at least 3 characters.';
		  }

		  if (!/[$%&^*]/.test(this.password) || this.password.length < 8) {
			this.errors.password = 'Password should contain at least 1 special character ($, %, ^, &, *) and be at least 8 characters.';
		  }

		  if (this.password !== this.confirmPassword) {
			this.errors.confirmPassword = 'Passwords do not match.';
		  }

		  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.email)) {
			this.errors.email = 'Email should be in the correct format.';
		  }

		  if (!/^\d{4}$/.test(this.postcode)) {
			this.errors.postcode = 'Postcode should contain exactly 4 numeric digits.';
		  }

		  if (!/^04\d{8}$/.test(this.mobile)) {
			this.errors.mobile = 'Mobile number should start with 04 and contain 10 digits.';
		  }

		  if (Object.keys(this.errors).length === 0) {
			this.$nextTick(() => {
			  this.$el.submit();
			});
		  }
		},
		toggleTerms() {
		  this.showTerms = !this.showTerms;
		}
	  }
	});

	app.mount('#app');
