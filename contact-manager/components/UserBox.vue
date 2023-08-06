<template>
  <div
    class="bg-light flex flex-col lg:flex-row items-center gap-4 justify-around p-5 rounded-md"
  >
    <img class="max-w-[35%] rounded-full" :src="props.element.photo" />
    <div class="bg-white py-4 px-10 w-[90%] lg:w-[50%] rounded-sm">
      <p><span class="text-[#666]">Name :</span> {{ props.element.name }}</p>
      <p>
        <span class="text-[#666]">Mobile :</span>
        {{ props.element.mobilePhone }}
      </p>
      <p><span class="text-[#666]">Email :</span> {{ props.element.email }}</p>
    </div>
    <div class="flex lg:flex-col">
      <v-btn rounded class="rounded-[10px] bg-warning m-1" size="small">
        <v-icon size="small" class="text-white">mdi-eye</v-icon>
      </v-btn>
      <v-btn
        rounded
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        type="button"
        class="rounded-[10px] bg-error m-1" size="small"
        @click="userStore.remove(props.index)"
      >
        <v-icon size="small" class="text-white">mdi-delete</v-icon>

        {{ props.element.id }}
      </v-btn>
      <v-btn rounded size="small" class="rounded-[10px] bg-sucsses m-1">
        <v-icon size="small" class="text-white" @click="$router.push('/id')">mdi-pencil</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

const props = defineProps({
  element: { type: Object, required: true },
  index: { type: Number, required: true },
});
</script>

<style scoped></style>
