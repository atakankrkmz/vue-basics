import { createRouter, createWebHistory } from "vue-router";


import Home from "./views/home-view.vue";
import Contact from "./views/contact-view.vue";
import About from "./views/about-view.vue";
import Profile from "./views/profile-view.vue";



const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/profile/:id', name: 'Profile', component: Profile},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;