<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          Logo
        </div>
        <div class="col-md-6 header__right">
          menu
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
}
</script>
<style>
.header {
  background-color: rgb(91, 247, 195);
  height: 80px;
  width: 100%;
}

.header__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
