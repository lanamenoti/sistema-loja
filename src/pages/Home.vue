<template>
  <div>
    <Header></Header>
    <Catalogo></Catalogo>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
import Catalogo from "../components/Catalogo.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components: {
    Header,
    Catalogo,
    Footer,
  },
}
</script>
<style></style>
