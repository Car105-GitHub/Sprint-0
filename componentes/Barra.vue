<template>
<v-card class="overflow-hidden">
    <v-app-bar shrink-on-scroll prominent src="../assets/admon.png" fade-img-on-scroll scroll-target="#scrolling-techniques-3">
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.7)"></v-img>
        </template>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>       
        <template v-slot:extension>
            <v-tabs align-with-title>
                <v-tab>Inicio</v-tab>
                <v-tab>Servicios</v-tab>
                <v-tab @click="llamarAdmInicio()">Administración</v-tab>
                <v-tab>Acerca de...</v-tab>
            </v-tabs>
        </template>
    </v-app-bar>
    
</v-card>
</template>

<script>
export default {
    data() {
        
    },
    methods: {
        llamarAdmInicio(){
            this.$router.push('/adminicio')
        }
    },
}
</script>
