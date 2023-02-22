<template>
  <section class="side-menu-container">
    <div class="side-menu-overlay" @click="toggleSideMenu"></div>
    <div class="side-menu">
      <header class="side-menu-header">
        <h1>Meu pedido</h1>
        <button @click="toggleSideMenu">
          <i class="fa-solid fa-close"></i>
        </button>
      </header>
      <main class="side-menu-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          ut ratione distinctio consequuntur placeat magni quo, perspiciatis
          laborum nihil necessitatibus, commodi facilis! Consequuntur suscipit
          quaerat atque ut culpa eos rerum!
        </p>
      </main>
      <footer class="side-menu-footer">
        <button @click="toggleSideMenu">Voltar ao cardapio</button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toggleSideMenu() {
      this.$store.commit('toggleSideMenu');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './SideMenu';
</style>
