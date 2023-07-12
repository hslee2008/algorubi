<template>
  <v-container>
    <div v-for="(algori, i) in algorithm" :key="i">
      <v-card class="mb-4 elevation-0">
        <v-card-title>OLL</v-card-title>
        <v-card-subtitle>{{ type[i] }}</v-card-subtitle>
      </v-card>

      <v-row no-gutters class="mb-10">
        <v-col v-for="(algo, n_i) in algori" :key="algo.name">
          <v-dialog width="auto">
            <template v-slot:activator="{ props }">
              <v-card
                class="elevation-0 mb-5"
                width="100"
                variant="outlined"
                v-bind="props"
              >
                <v-img :src="(image as any)[algo.type][algo.short_name]" />

                <v-card-title class="text-center">
                  {{ algo.short_name }}
                </v-card-title>
                <v-card-text
                  :class="`text-center text-${percentToColor(
                    algo.probability
                  )} font-weight-black`"
                >
                  {{ algo.probability }}
                </v-card-text>
              </v-card>
            </template>

            <v-card class="pa-2">
              <v-select
                :value="selectedAlgorithm[i][n_i]"
                :items="algo.algorithm"
                variant="outlined"
                class="w-100"
                @update:model-value="handleAlgorithmChange($event, i, n_i)"
              />

              <iframe
                style="width: 100%; height: 360px; border: none"
                :src="`https://ruwix.com/widget/3d/?alg=${encodeURIComponent(
                  selectedAlgorithm[i][n_i]
                )}&flags=showalg&speed=${speed}&colors=F:#444444 B:#444444 D:#444444 L:#444444 R:#444444`"
                scrolling="no"
              />

              <v-slider
                v-model="speed"
                color="orange"
                label="speed"
                :min="10"
                :max="1000"
                :step="100"
              />

              <v-card-actions>
                <v-btn @click="copy(algo.algorithm[i])"> Copy </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <v-divider class="mt-6" />
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import copy from "copy-to-clipboard";

import image from "@/assets/cube/image.json";
import algo from "@/assets/cube/algo.json";

import { percentToColor } from "@/utils/percentToColor";

const algorithm = algo["oll"];
const type = ["edges", "corner and edges", "corner", "G perm"];

const speed = ref(300);

// Declare reactive properties using ref()
const selectedAlgorithm = ref(
  algorithm.map((group) => group.map((algo) => algo.algorithm[0]))
);

// Update selectedAlgorithm
const handleAlgorithmChange = (
  value: string,
  index: number,
  nested_index: number
) => {
  selectedAlgorithm.value[index][nested_index] = value;
  localStorage.setItem("pll", JSON.stringify(selectedAlgorithm.value));
};
</script>
