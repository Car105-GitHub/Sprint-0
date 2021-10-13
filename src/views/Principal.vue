<template>

    <v-container grid-list-lg>

        <v-layout>

            <v-flex align-self-baseline>

                <v-card
                    max-width="350"
                >
                    <v-img
                    class="white--text align-end"
                    height="300px"
                    src="../img/img3.jpg"
                    >
                    <v-card-title>
                        <h3> Servicios Jurídicos </h3>
                        </v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        <h3>Conoce nuestros profesionales</h3>
                    </v-card-subtitle>

                    <v-card-text class="text--primary">

                    <p>Lorem dolor sit amet consectetur, adipisicing elit. Repellendus pariatur est dolor consequatur voluptate quis deleniti! Totam accusamus, animi dicta non, hic enim reiciendis vel officia corrupti sequi atque veniam?</p>
                    </v-card-text>

                    <v-card-actions>

                    <v-btn
                        color="primary"
                        text
                        @click="llamarJuridico()"
                    >
                        Saber Más
                    </v-btn>
                    </v-card-actions>
                </v-card>

            </v-flex>

            <v-flex align-self-baseline>

                <v-card
                    max-width="350"
                >
                    <v-img
                    class="white--text align-end"
                    height="300px"
                    src="../img/img1.jpg"
                    >
                    <v-card-title>
                        <h3> Servicios Contables </h3>
                        </v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        <h3>Conoce nuestros profesionales</h3>
                    </v-card-subtitle>

                    <v-card-text class="text--primary">

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus pariatur est dolor consequatur voluptate quis deleniti! Totam accusamus, animi dicta non, hic enim reiciendis vel officia corrupti sequi atque veniam?</p>
                    </v-card-text>

                    <v-card-actions>

                    <v-btn
                        color="primary"
                        text
                        @click="llamarContable()"
                    >
                        Saber Más
                    </v-btn>
                    </v-card-actions>
                </v-card>

            </v-flex>

            <v-flex align-self-baseline>

                <v-card
                    max-width="350"
                >
                    <v-img
                    class="white--text align-end"
                    height="300px"
                    src="../img/img2.jpg"
                    >
                    <v-card-title>
                        <h3> Servicios Administrativos </h3>
                        </v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        <h3>Conoce nuestros profesionales</h3>
                    </v-card-subtitle>

                    <v-card-text class="text--primary">

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus pariatur est dolor consequatur voluptate quis deleniti! Totam accusamus, animi dicta non, hic enim reiciendis vel officia corrupti sequi atque veniam?</p>
                    </v-card-text>

                    <v-card-actions>

                    <v-btn
                        color="primary"
                        text
                        @click="llamarAdministrativo()"
                    >
                        Saber Más
                    </v-btn>
                    </v-card-actions>
                </v-card>

            </v-flex>

        </v-layout>

    </v-container>

</template>

<script>
export default {
    data() {
        
    },
    methods:{
        llamarJuridico(){
            this.$router.push('/juridico')
        },
        llamarContable(){
            this.$router.push('/contable')
        },
        llamarAdministrativo(){
            this.$router.push('/administrativo')
        }
    }
}
</script>
