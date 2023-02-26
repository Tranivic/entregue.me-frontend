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
        <auth-form
          @change-form="changeTypeOfForm"
          :type="typeOfForm"
        ></auth-form>
      </main>
      <footer class="side-menu-footer"></footer>
    </div>
  </section>
</template>

<script>
import AuthForm from '@/components/AuthForm/AuthForm.vue';
export default {
  emits: ['changeForm'],
  components: {
    AuthForm,
  },
  data() {
    return {
      typeOfForm: 'login',
    };
  },
  methods: {
    toggleSideMenu() {
      this.$store.commit('toggleSideMenu');
    },
    handleMyEvent(value) {
      this.typeOfForm = value;
    },
    changeTypeOfForm() {
      this.typeOfForm === 'login'
        ? (this.typeOfForm = 'signup')
        : (this.typeOfForm = 'login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './SideMenu';
</style>
