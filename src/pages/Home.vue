<template>
  <div>
    <Header></Header>
    <Catalogo></Catalogo>
  </div>
</template>
<script>
import Header from "../components/Header.vue"
import Catalogo from "../components/Catalogo.vue"

export default {
  name: "Home",
  components: {
    Header,
    Catalogo,
  },
}
</script>
<style></style>
