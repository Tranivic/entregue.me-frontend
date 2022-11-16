<template>
  <li class="card">
    <div class="superior-card">
      <img
        src="../../assets/no-picture.svg"
        alt="Imagem ilustrativa do prato"
      />
      <div class="card-info">
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
        <h1 v-if="product.price">R$ {{product.price}}</h1>
      </div>
    </div>
    <div class="inferior-card">
      <div class="card-icons">
        <i class="fa-solid fa-person-walking"></i>
        <i class="fa-solid fa-motorcycle"></i>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style lang="scss" scoped>
@import "./ProductCard";
</style>
