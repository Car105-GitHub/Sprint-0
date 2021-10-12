<template>
    <v-container class="container-int">
        <v-container>
            <h1 class="adm-h3">ADMINISTRACIÓN</h1>
        </v-container>
        <v-text-field class="textField" v-model="nombre" :rules="nameRules" label="Nombre" required></v-text-field>

        <v-text-field class="textField" v-model="apellido" :rules="nameRules" label="Apellido" required></v-text-field>

        <v-text-field class="textField" v-model="telefono" :counter="10" :rules="nameRules" label="Teléfono" required></v-text-field>

        <v-text-field v-model="email1" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="email2" :rules="emailRules" label="Confirma E-mail" required></v-text-field>

        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Mínimo 8 caracteres" counter @click:append="show1 = !show1"></v-text-field>

        <v-container class="px-0" fluid>
            <v-radio-group v-model="perfil">
                <v-radio label="Oferente de Inmueble" :value="P1"></v-radio>
                <v-radio label="Oferente de Servicios" :value="P2"></v-radio>
                <v-radio label="Comprador de Inmuebles" :value="P3"></v-radio>
                <v-radio label="Comprador de Servicios" :value="P4"></v-radio>
                <v-radio label="Administración de Noticias" :value="P5"></v-radio>
            </v-radio-group>
        </v-container>

        <v-btn block depressed color="primary">
            Guardar
        </v-btn>

    </v-container>
</template>

<script>
export default {
    name: 'usuarios',
    return: {
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
        radioGroup: 1
    }
}
</script>

<style scoped>
.container-int {
    padding: 20px;
    margin: 20px;
    border: 2px;
    background-color: white;
    border-color: black;
    border-style: solid;
    min-height: 500px;
}
</style>
