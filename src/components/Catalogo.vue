<template>
  <section class="catalogo">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Produtos</h1>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            v-model="produtoDesejado"
            placeholder="Buscar..."
          />
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4"
          v-for="produto in produtosFiltrados"
          :key="produto.id"
        >
          <Card
            :id="produto.id"
            :nome="produto.nome"
            :imagem="produto.imagem"
            :preco="produto.preco"
          ></Card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "../components/Card.vue"

export default {
  name: "Catalogo",
  components: {
    Card,
  },
  data: function() {
    return {
      produtoDesejado: "",
      produtos: [
        {
          id: 1,
          nome: "Blusa 1",
          preco: 39.99,
          imagem: require("../assets/blusa_sofa_frinds.jpg"),
        },
        {
          id: 2,
          nome: "Blusa 2",
          preco: 39.99,
          imagem: require("../assets/blusa_friends.jpg"),
        },
        {
          id: 3,
          nome: "Blusa 3",
          preco: 39.99,
          imagem: require("../assets/blusa_lindinha.jpg"),
        },
        {
          id: 4,
          nome: "Blusa 2",
          preco: 39.99,
          imagem: require("../assets/blusa_friends.jpg"),
        },
        {
          id: 5,
          nome: "Blusa 3",
          preco: 39.99,
          imagem: require("../assets/blusa_lindinha.jpg"),
        },
        {
          id: 6,
          nome: "Jeans Mom",
          preco: 39.99,
          imagem: require("../assets/jeans_mom.jpg"),
        },
        {
          id: 7,
          nome: "Blusa 3",
          preco: 39.99,
          imagem: require("../assets/blusa_lindinha.jpg"),
        },
        {
          id: 8,
          nome: "Blusa 2",
          preco: 39.99,
          imagem: require("../assets/blusa_friends.jpg"),
        },
        {
          id: 9,
          nome: "Jeans Mom",
          preco: 39.99,
          imagem: require("../assets/jeans_mom.jpg"),
        },
      ],
    }
  },
  computed: {
    produtosFiltrados: function() {
      return this.produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(this.produtoDesejado.toLowerCase())
      )
    },
  },
}
</script>
<style>
.catalogo {
  padding: 20px;
  background: rgba(230, 230, 230, 0.856);
}
.catalogo input {
  background: rgba(248, 246, 239, 0.733);
  border: 1px solid rgba(150, 150, 150, 0.733);
  border-radius: 4px;
  width: 50%;
  height: 30px;
  color: #000;
  padding: 12px;
  align-self: flex-end;
  float: right;
}
</style>
