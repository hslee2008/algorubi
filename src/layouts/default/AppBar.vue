<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = true" />
    </template>

    <v-app-bar-title>
      <span class="text-uppercase font-weight-bold">AlgoRubi</span>
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav exa>
      <v-list-item exact to="/">Home</v-list-item>
      <v-list-item exact to="/pll">PLL</v-list-item>
      <v-list-item exact to="/oll">OLL</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const drawer = ref(false);
</script>
