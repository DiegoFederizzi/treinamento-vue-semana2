import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import cids from 'cids-cgi/lib'

const opt = {
	theme: {
		dataTable: {
			checkboxColor: 'orange darken-2',
			lineColor: 'light-blue lighten-5 black--text'
		}
	}
}

Vue.use(cids, opt)
Vue.config.productionTip = false

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')
