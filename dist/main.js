import Vue from 'vue'
import ScrollReveal from './src/js/scrollreveal.min.js'
import App from './src/index.vue'

Vue.prototype.ScrollReveal = ScrollReveal;

new Vue({
  el: '#app',
  render: h => h(App)
})
