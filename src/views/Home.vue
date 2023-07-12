<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-0">
              <v-img
                src="https://www.picgifs.com/graphics/r/rubiks-cube/animaatjes-rubiks-cube-7217468.gif"
                alt="Rubik's Cube"
                height="300"
              ></v-img>

              <v-card-title class="text-center primary">
                <span class="display-1 white--text"> AlgoRubi </span>
              </v-card-title>
              <v-card-text>
                <p class="text-center">
                  The app best for learning advanced CFOP algorithms. Inspired
                  by my friends who are cubers.
                </p>

                <v-btn
                  class="mt-10"
                  color="primary"
                  dark
                  block
                  to="/pll"
                >
                  PLL
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
