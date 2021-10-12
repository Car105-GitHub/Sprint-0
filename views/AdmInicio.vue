<template>
<v-container id="marco" class="container-md">    
    <v-container>
        <h1 class="adm-h3">ADMINISTRACIÓN</h1>
    </v-container>
    <v-container class="container-int">
        <v-text-field class="textField" v-model="nombre" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
       
        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Mínimo 8 caracteres" counter @click:append="show1 = !show1"></v-text-field>

        <v-btn @click="validaAcceso()" block depressed color="primary">
            Enviar
        </v-btn>

    </v-container>
</v-container>
</template>

<script>
export default {
    name: 'adm_index',
    data() {
        return {
            nombre:"",
            email1:"",  
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
    methods: {
        validaAcceso(){            
            this.$router.push('/admadministrador')
        }        
    },
}
</script>

<style scoped>
.adm-h3 {
    color: royalblue;
}

.container-md {
    padding: 3%;
    margin-top: 25px;    
    background: url("../assets/Vira-trabajo_05.jpg") no-repeat center center fixed;
    background-size: cover;
}

.container-int {
    padding: 20px;
    margin: 20px;
    border: 2px;
    background-color: white;
    border-color: black;
    border-style: solid;
}

</style>
