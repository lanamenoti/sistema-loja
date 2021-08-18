<template>
  <nav class="menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">Clientes</router-link></li>
      <li><router-link to="/">Pedidos</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Menu",
}
</script>
<style>
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.menu ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  min-height: 80px;
  padding: 4px 14px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: rgb(209, 29, 29);
  transition: background-color ease 0.8s;
}

.menu ul li :not(:last-child):after {
  content: "";
  display: inline-block;
  width: 1px;
  background-color: #333;
  height: 10px;
  margin-left: 10px;
}

.menu ul li a:hover {
  background-color: rgb(209, 29, 29);
  color: #fff;
}
</style>
