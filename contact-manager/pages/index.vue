<template>
  <v-container class="mt-4">
    <div class="d-flex justify-between items-center gap-x-3">
      <div class="text-primary text-3xl font-bold">Contact manager</div>
      <v-btn
        color="primary"
        class="!capitalize"
        @click="$router.push('/user/create')"
      >
        add user</v-btn
      >
    </div>
    <p class="mt-6 font-semibold text-xl text-[#666] italic text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
      veritatis magni quidem odit at officiis quis, fuga consequatur nulla
      aliquam cum sapiente iste, nobis recusandae vitae labore vel optio.
    </p>

    <users />
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
