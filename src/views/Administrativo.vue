<template>

    <v-container grid-list-lg>

        <v-card class="primary text-center white--text">
            <h2>Estos son nuestros profesionales</h2>
        </v-card>

        <v-layout>

            <v-flex align-self-baseline>

                <v-card
                    max-width="600"
                    color="blue lighten-5"
                >
                    <v-img
                    class="black--text align-end"
                    height="300px"
                    src="../img/administrador.jpg"
                    >
                    <v-card-title>
                        <h2>Oscar José Quintero Mara</h2>
                        </v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        <h3>Administrador de empresas</h3>
                    </v-card-subtitle>

                    <v-rating
                    :value="3.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="18"
                    ></v-rating>

                    <v-card-text class="text--primary">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam corrupti, aut repellendus labore quod est dolores eius rerum, necessitatibus a neque dignissimos libero eum quisquam consequuntur esse, dolore ex.</p>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Horas del día disponibles</v-card-title>

                    <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <v-chip>5:30PM</v-chip>

                        <v-chip>7:30PM</v-chip>

                        <v-chip>8:00PM</v-chip>

                        <v-chip>9:00PM</v-chip>
                    </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple lighten-2"
                            text
                            @click="reserve"
                        >
                            Reserve
                        </v-btn>
                    </v-card-actions>

                    
                </v-card>

            </v-flex>

            <v-flex align-self-baseline>

                <v-card
                    max-width="600"
                    color="blue lighten-5"
                >
                    <v-img
                    class="black--text align-end"
                    height="300px"
                    src="../img/administradora.jpg"
                    >
                    <v-card-title>
                        <h2>Mariela Villar Andrade</h2>
                        </v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        <h3>Administradora y especialista en gerencia empresarial</h3>
                    </v-card-subtitle>

                    <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="18"
                    ></v-rating>

                    <v-card-text class="text--primary">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam corrupti, aut repellendus labore quod est dolores eius rerum, necessitatibus a neque dignissimos libero eum quisquam consequuntur esse, dolore ex.</p>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Horas del día disponibles</v-card-title>

                    <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <v-chip>2:00PM</v-chip>

                        <v-chip>3:15PM</v-chip>

                        <v-chip>5:30PM</v-chip>

                        <v-chip>7:00PM</v-chip>
                    </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="deep-purple lighten-2"
                            text
                            @click="reserve"
                        >
                            Reserve
                        </v-btn>
                    </v-card-actions>

                    
                </v-card>

            </v-flex>

        </v-layout>



        <template>
            <v-card>
                <v-toolbar
                flat
                color="primary"
                dark
                >
                <v-toolbar-title>Oscar José Quintero Mara</v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                <v-tab>
                    <v-icon left>
                    mdi-account
                    </v-icon>
                    Biografía
                </v-tab>
                <v-tab>
                    <v-icon left>
                    mdi-book
                    </v-icon>
                    Educación
                </v-tab>
                <v-tab>
                    <v-icon left>
                    mdi-domain
                    </v-icon>
                    Experiencia
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                        </p>

                        <p>
                        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                        </p>

                        <p class="mb-0">
                        Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                        </p>

                        <p>
                        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                        </p>

                        <p>
                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                        </p>

                        <p>
                        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                        </p>

                        <p class="mb-0">
                        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                        </p>

                        <p class="mb-0">
                        Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs>
            </v-card>
            </template>

        <template>
            <v-card>
                <v-toolbar
                flat
                color="primary"
                dark
                >
                <v-toolbar-title> Pedro Manuel Quintero Marín </v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                <v-tab>
                    <v-icon left>
                    mdi-account
                    </v-icon>
                    Biografía
                </v-tab>
                <v-tab>
                    <v-icon left>
                    mdi-book
                    </v-icon>
                    Educación
                </v-tab>
                <v-tab>
                    <v-icon left>
                    mdi-domain
                    </v-icon>
                    Experiencia
                </v-tab>

                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                        </p>

                        <p>
                        Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                        </p>

                        <p class="mb-0">
                        Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                        </p>

                        <p>
                        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                        </p>

                        <p>
                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                        </p>

                        <p>
                        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                        </p>

                        <p class="mb-0">
                        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <p>
                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                        </p>

                        <p class="mb-0">
                        Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs>
            </v-card>
            </template>

    </v-container>

</template>