<template>
  <div>
    <div class="flex lg:w-[50%] mt-5 gap-x-10 items-center">
      <v-text-field v-model="search" class="w-10" variant="outlined" clearable>
      </v-text-field>

      <v-btn
        class="align-middle"
        color="primary mb-6 !font-bold"
        @click="userSearch()"
        >Search</v-btn
      >
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 pt-[20px] pb-[100px] gap-[50px]"
    >
      <div
        v-for="(user, index) in users"
        class="bg-light flex flex-col lg:flex-row items-center gap-4 justify-around p-5 rounded-md"
      >
        <img class="max-w-[35%] rounded-full" :src="user.photo" />
        <div class="bg-white py-4 px-10 w-[90%] lg:w-[50%] rounded-sm">
          <p><span class="text-[#666]">Name :</span> {{ user.name }}</p>
          <p>
            <span class="text-[#666]">Mobile :</span>
            {{ user.mobilePhone }}
          </p>
          <p><span class="text-[#666]">Email :</span> {{ user.email }}</p>
        </div>
        <div class="flex lg:flex-col">
          <v-btn
            rounded
            class="rounded-[10px] bg-warning m-1"
            size="small"
            @click="$router.push(`/user/view/${user.id}`)"
          >
            <v-icon size="small" class="text-white">mdi-eye</v-icon>
          </v-btn>
          <v-btn
            rounded
            class="rounded-[10px] bg-error m-1"
            size="small"
            @click="userStore.deleteUser(user.id)"
          >
            <v-icon size="small" class="text-white">mdi-delete</v-icon>
          </v-btn>
          <v-btn rounded size="small" class="rounded-[10px] bg-sucsses m-1">
            <v-icon
              size="small"
              class="text-white"
              @click="
                $router.push(`user/update#${user.id}`);
                updateFunction(user.id);
              "
              >mdi-pencil</v-icon
            >
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user.js";
const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { pending } = useLazyAsyncData(() => userStore.list());
const search = ref("");
const userSearch = () => {
  users.value.filter((st) => {
    useLazyAsyncData(() => userStore.userFilter(search.value));
  });
};
const updateFunction = async (id: number) => {
  await userStore.getUser(id);
};
</script>

<style scoped></style>
