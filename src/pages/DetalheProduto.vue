<template>
  <div>
    <Header></Header>
    <Produto></Produto>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
import Produto from "../components/Produto.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "DetalheProduto",
  components: {
    Header,
    Produto,
    Footer,
  },
}
</script>
<style></style>
