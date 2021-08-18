import VueRouter from "vue-router"
import Home from "./pages/Home.vue"
import DetalheProduto from "./pages/DetalheProduto.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/produto/:id",
    component: DetalheProduto,
    name: "produto.detalhe",
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
