<template>
  <div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 pt-[20px] pb-[100px] gap-[50px]"
    >
      <UserBox
        :element="user"
        :index="index"
        v-for="(user, index) in users"
        :key="index"  
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";
const userStore = useUserStore();
const { users } = storeToRefs(userStore);
</script>

<style scoped></style>
