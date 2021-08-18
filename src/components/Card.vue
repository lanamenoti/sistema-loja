<template>
  <div class="card">
    <div class="card__conteudo">
      <img :src="imagem" :alt="nome" class="card__img" />
      <div class="card__info">
        <h3>{{ nome }}</h3>
        <p>Valor: {{ preco }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'produto.detalhe', params: { id: id } }"
      ><button class="card__botao">FAZER PEDIDO</button></router-link
    >
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    id: Number,
    nome: String,
    imagem: Image,
    preco: Number,
  },
}
</script>
<style>
.card {
  width: 250px;
  height: 200px;
  text-align: center;
  padding: 10px;
  border: 1px solid rgb(209, 29, 29);
  border-radius: 4px;
  background-color: rgba(248, 246, 239, 0.733);
  margin: 25px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.card__conteudo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.card__img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.card__conteudo div h3 {
  margin: 0;
}
.card__conteudo div p {
  font-size: 12px;
}
.card a button {
  width: 150px;
  height: 40px;
  background: rgb(209, 29, 29);
  border: none;
  border-radius: 4px;
  margin-top: 20px;
}
.card__botao {
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
</style>
