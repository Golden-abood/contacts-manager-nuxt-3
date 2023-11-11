<template>
  <v-app>
    <v-app-bar class="bg-primary">
      <v-container>
        <v-app-bar-title>Vue Contact Manager</v-app-bar-title>
      </v-container>
    </v-app-bar>
    <v-main class="bg-[#f3f0f3]">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup></script>

<style lang="scss" scoped></style>
