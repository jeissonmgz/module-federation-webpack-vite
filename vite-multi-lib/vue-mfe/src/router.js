import { createWebHistory, createRouter } from "vue-router";

const Home = () => import('./pages/Home.vue');
const About = () => import('./pages/About.vue');

const getRoutes = (basename) => ([
  {
    path: basename,
    name: "Home",
    component: Home,
  },
  {
    path: `${basename}/about`,
    name: "About",
    component: About,
  },
]);

const generateRouter = (history, basename) => createRouter({
  history: history ?? createWebHistory(),
  routes: getRoutes(basename),
});

export default generateRouter;