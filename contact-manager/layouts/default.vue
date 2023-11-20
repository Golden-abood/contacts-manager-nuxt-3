<template>
  <v-app>
    <v-app-bar class="bg-primary">
      <v-container>
        <v-app-bar-title>Vue Contact Manager</v-app-bar-title>
      </v-container>
      <snack-bar v-model="showToaster" :type="toasterType">
        {{ message }}
      </snack-bar>
    </v-app-bar>
    <v-main class="bg-[#f3f0f3]">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useToasterStore } from "~/stores/toaster";
import { storeToRefs } from "pinia";
const toasterStore = useToasterStore();
const { showToaster, toasterType, message } = storeToRefs(toasterStore);
</script>

<style lang="scss" scoped></style>
