<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Logo></Logo>
        </div>
        <div class="col-md-6 header__right">
          <Menu></Menu>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Menu from "../components/Menu.vue"
import Logo from "../components/Logo.vue"

export default {
  name: "Header",
  components: {
    Menu,
    Logo,
  },
}
</script>
<style>
.header {
  background-color: rgba(248, 246, 239, 0.733);
  height: 80px;
  width: 100%;
}

.header__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
