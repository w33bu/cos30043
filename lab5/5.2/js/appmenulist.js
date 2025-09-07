//populate menu with a variable 
Vue.component('mymenu', { 
  props: ['menu'], //defining the props 
  template: '<ul> <li v-for="i in menu"> {{i}} </li> </ul>'
}) 
 
// create new vue instance and indicate the id for vue app 
 new Vue({ 
  el: '#app', 
}) 