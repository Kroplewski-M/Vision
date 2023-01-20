import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/logInView.vue";
import Register from "@/views/registerView.vue";
import ProjectsView from "@/views/projectsView.vue";
import HomeView from "@/views/homeView.vue";
import ProfileView from "@/views/profileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/projects", component: ProjectsView },
    { path: "/profile", component: ProfileView },
  ],
});

export default router;
