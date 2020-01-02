import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//components
import Home from './components/Home.vue';
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";


//routes
export default new VueRouter({
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/projects', name: 'Projects', component: Projects},
        {path: '/contact', name: 'Contact', component: Contact},
    ]
});
