<template>
<v-container class="container-int">

    <v-container class="px-0" fluid>
        <template>
            <v-container fluid>
                <v-combobox v-model="perfil" :items="items" label="Seleccione un perfil" persistent-hint small-chips>
                </v-combobox>
            </v-container>
        </template>
    </v-container>

    <template>
        <v-container fluid>            
            <v-checkbox v-model="publicaAvisos" label="Publica avisos" value="p1"></v-checkbox>
            <v-checkbox v-model="editaAvisos" label="Edita avisos" value="p2"></v-checkbox>
            <v-checkbox v-model="eliminaAvisos" label="Elimina avisos" value="p3"></v-checkbox>
            <v-checkbox v-model="publicaServicios" label="Publica Servicios" value="p4"></v-checkbox>
            <v-checkbox v-model="editaServicios" label="Edita Servicios" value="p5"></v-checkbox>
            <v-checkbox v-model="eliminaServicios" label="Elimina Servicios" value="p6"></v-checkbox>
            <v-checkbox v-model="contactaVendedores" label="Consulta Vendedores" value="p7"></v-checkbox>
            <v-checkbox v-model="contactaProfesionales" label="Consulta Profesionales" value="p8"></v-checkbox>
        </v-container>
    </template>

    <v-btn block depressed color="primary">
        Guardar
    </v-btn>

</v-container>
</template>

<script>
export default {
    name: 'perfiles',
    return: {
        
      }
    ,
    data: () => ({
        items: ['Oferente de Inmueble',
            'Oferente de Servicios',
            'Comprador de Inmuebles',
            'Comprador de Servicios',
            'Administrador de Noticias'
        ],
        search: null,
        selected: [],
    }),
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
