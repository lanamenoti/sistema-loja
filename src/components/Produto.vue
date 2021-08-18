<template>
  <section class="">
    <div class="container produto">
      <div class="row">
        <div class="col-md-12">
          <h1>Detalhe Produto</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="produto__img">
            <img src="../assets/blusa_friends.jpg" alt="Blusa 2" />
          </div>
        </div>
      </div>
      <div class="row produto__divisao">
        <div class="col-md-6">
          <div class="produto__info">
            <h2>Blusa 2</h2>
            <p>Preço: {{ preco }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="produto__info">
            <label for="quantidade"> Quantidade </label>
            <input
              type="number"
              v-model="quantidadeProduto"
              @change="calcularValorTotal()"
              id="quantidade"
              min="0"
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-12">
          <div class="produto__descricao">
            <h2>Descrição</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              nemo recusandae fuga voluptatibus ea saepe quidem natus ad
              quibusdam error! Minus expedita fuga nobis? Odio est voluptatem
              reprehenderit vero facere.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-12">
          <div class="produto__pedido">
            <h2>
              Total: {{ quantidadeProduto }} * {{ preco }} = {{ valorTotal }}
            </h2>
            <router-link to="/"
              ><button class="produto__botao">FAZER PEDIDO</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Produto",
  data: function () {
    return {
      quantidadeProduto: 0,
      valorTotal: 0,
      preco: 39.99,
    };
  },
  methods: {
    calcularValorTotal: function () {
      if (this.quantidadeProduto > 0) {
        this.valorTotal = this.quantidadeProduto * this.preco;
      }
    },
  },
};
</script>
<style>
.produto {
  background: rgba(230, 230, 230, 0.856);
  color: rgb(160, 13, 13);
}
.produto h1 {
  margin: 40px;
}
.produto__img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.produto img {
  max-width: 60%;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgb(160, 13, 13);
}
.produto__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
}
.produto__info h2 {
  margin: 0;
}
.produto__info label {
  margin-bottom: 10px;
}
.produto__info input {
  width: 50px;
  height: 30px;
  background: rgba(248, 246, 239, 0.733);
  border: 1px solid rgba(150, 150, 150, 0.733);
  border-radius: 4px;
  color: rgb(209, 29, 29);
  font-weight: 500;
  padding: 12px;
  outline: none;
}
.produto hr {
  width: 80%;
}
.produto__descricao {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.produto a button {
  width: 250px;
  height: 50px;
  background: rgb(160, 13, 13);
  border: none;
  border-radius: 4px;
  margin: 30px 0;
}
.produto__botao {
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}
.produto__pedido {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
.produto__pedido h2 {
  align-self: flex-start;
}
</style>
