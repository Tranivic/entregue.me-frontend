<template>
  <header>
    <div class="superior">
      <div class="logo-container">
        <div class="info-container">
          <img
            class="logo"
            src="https://res.cloudinary.com/amodeliveryimgs/image/upload/w_512,h_512,c_thumb/ldzvlmdkpbzbabtxc3qb.png"
            alt="Logo image"
          />

          <div class="info">
            <h1 class="title">Tojô</h1>
            <div class="status">
              <div class="ball"></div>
              <h1 class="text">Fechado</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="search-container">
        <div class="input-container">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="Buscar produtos..." />
        </div>
        <div class="line-divisor"></div>
        <div class="btn-container">
          <button>
            <i class="fa fa-sign-out"></i>
            Fazer login ou cadastro
          </button>
        </div>
      </div>
    </div>
    <div class="inferior">
      <div class="navbar">
        <i class="fa-solid fa-credit-card"></i>
        <div class="line-divisor"></div>
        <i class="fa-solid fa-motorcycle"></i>
        <h2>Prazo para entrega - 30 á 45 min</h2>
        <div class="line-divisor"></div>
        <i class="fa-solid fa-person-walking"></i>
        <h2>Prazo para retirada - 30 á 45 min</h2>
      </div>
    </div>
  </header>
  <main>
    <div class="title">
      <h1>Cardápio</h1>
    </div>
    <div class="carrousel"></div>
    <div class="title">
      <h1>Produtos</h1>
    </div>
    <section></section>
  </main>
  <footer></footer>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./scss/global.scss";
</style>
