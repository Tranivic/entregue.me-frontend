<template>
<keep-alive :include="['formData']">
    <div v-if="type === 'login'" class="login-container">
        <h1>Não perca tempo, faça login com seu e-mail!</h1>
        <form @submit.prevent="submitLogin">
            <label for="email">E-mail</label>
            <input type="email" required placeholder="E-mail" v-model="formData.userEmail" />
            <label for="password">Senha</label>
            <input type="password" required placeholder="Senha" v-model="formData.userPassword" />
            <button type="submit">Entrar</button>
        </form>
        <h2>Ainda não tem uma conta? Clique <a @click="$emit('changeForm')">aqui</a> para cadastrar!</h2>
    </div>
    <div v-else class="register-container">
        <h1>Cadastre-se e aproveite nossas ofertas!</h1>
        <form @submit.prevent="submitSingup">
            <label for="name">Nome</label>
            <input name="name" type="text" required placeholder="Seu nome" v-model.trim="formData.userName" />
            <label for="email">E-mail</label>
            <input type="email" required placeholder="E-mail" v-model="formData.userEmail" />
            <label for="password">Senha</label>
            <input type="password" required placeholder="Senha" v-model="formData.userPassword" />
            <label for="password">Confirme sua senha</label>
            <input type="password" required placeholder="Confirme sua senha" v-model="formData.userPasswordConfirm" />
            <button type="submit">Cadastrar</button>
        </form>
        <h2>
            Já tem uma conta? Clique <a @click="$emit('changeForm')">aqui</a> para
            fazer login!
        </h2>
    </div>
</keep-alive>
</template>

<script>
export default {
    name: 'AuthForm',
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            formData: {
                userEmail: '',
                userPassword: '',
                userPasswordConfirm: '',
                userName: '',
            },
        };
    },
    methods: {
        submitLogin() {
            const userLoginData = {
                email: this.formData.userEmail,
                password: this.formData.userPassword,
                name: this.formData.userName,
            };
            console.log(userLoginData);
        },
        submitSingup() {
            const userSignupData = {
                email: this.formData.userEmail,
                password: this.formData.userPassword,
                passwordIsConfirmed: this.formData.userPassword === this.formData.userPasswordConfirm,
                name: this.formData.userName,
            };
            console.log(userSignupData);
        },
    },
};
</script>

<style lang="scss">
@import './AuthFotm.scss';
</style>
