<template>
  <div class="header">
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
      <i></i>
    </div>
  </div>
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
