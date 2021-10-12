<template>
<v-container id="marco" class="container-md">
    <v-container>
        <h1 class="adm-h3">ADMINISTRACIÓN</h1>
    </v-container>
    <v-card>
        <v-toolbar flat color="primary" dark>
            <v-toolbar-title>Opiones de Administración</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab>
                Definición de Usuarios
            </v-tab>
            <v-tab>
                Definición de Perfiles
            </v-tab>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <v-form>
                            <v-container>
                                <Usuarios />
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <v-form>
                            <v-container>
                                <Perfiles />
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>
</v-container>
</template>

<script>
import Usuarios from '../components/Usuarios.vue'
import Perfiles from '../components/Perfiles.vue'

export default {
    name: 'admadministrador',
    data() {
        return {

        }
    },
    components: {
        Usuarios,
        Perfiles,
    },
    methods: {
        llamarAdmUsuarios() {
            //  this.$router.push('/usuarios')

        },
        llamarAdmPerfiles() {
            //this.$router.push('/usuarios')

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
    background: url("../assets/Vira-trabajo_05.jpg") center center fixed;
    background-size: cover;
}
</style>
