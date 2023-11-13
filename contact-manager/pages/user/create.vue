<template>
  <v-container>
    <p class="text-primary text-3xl font-bold">New Contact</p>
    <p class="mt-6 font-semibold text-xl text-[#666] italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
      veritatis magni quidem odit at officiis quis, fuga consequatur nulla
      aliquam cum sapiente iste, nobis recusandae vitae labore vel optio.
    </p>

    <div
      class="flex flex-col lg:flex-row items-start gap-4 justify-around p-5 mt-16 rounded-md"
    >
      <div class="bg-white py-4 px-10 w-[90%] lg:w-[50%] rounded-xl">
        <p class="pt-4">
          <v-label class="mb-2"> Name </v-label>
          <v-text-field
            v-model="defaultUser.name"
            variant="outlined"
            class="text-[#666]"
            placeholder="Name"
          ></v-text-field>
        </p>
        <p class="py-3">
          <v-label class="mb-2"> mobile Phone </v-label>

          <v-text-field
            v-model="defaultUser.mobilePhone"
            variant="outlined"
            placeholder="mobilePhone"
            class="text-[#666]"
          >
          </v-text-field>
        </p>
        <p class="py-3">
          <v-label class="mb-2"> Email </v-label>

          <v-text-field
            v-model="defaultUser.email"
            variant="outlined"
            class="text-[#666]"
            placeholder="email"
          ></v-text-field>
        </p>
        <p class="py-3">
          <v-label class="mb-2"> Company </v-label>
          <v-text-field
            v-model="defaultUser.company"
            variant="outlined"
            class="text-[#666]"
            placeholder="company"
          ></v-text-field>
        </p>
        <p class="py-3">
          <v-label class="mb-2"> title </v-label>

          <v-text-field
            v-model="defaultUser.title"
            variant="outlined"
            class="text-[#666]"
            placeholder="title"
          ></v-text-field>
        </p>
        <p class="py-3">
          <v-label class="mb-2"> group </v-label>

          <v-text-field
            v-model="defaultUser.group"
            variant="outlined"
            class="text-[#666]"
            placeholder="Group"
          ></v-text-field>
        </p>
      </div>
      <div class="flex-col text-center items-center md:!text-start w-[40%]">
        <div class="md:flex items-center">
          <img
            :src="defaultUser.photo"
            class="w-[100%] block mx-auto rounded-lg md:w-[20%]"
          />
          <v-file-input
            v-model:model-value="img"
            @update:model-value="renderImg()"
            variant="outlined"
            class="w-80"
          ></v-file-input>
        </div>
        <v-btn
          color="primary"
          class="!font-bold !hidden !md:block fixed top-40 text-center left-58"
          @click="createuser()"
        >
          Create
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { defaultUser } = storeToRefs(userStore);
const img = ref();

await userStore.reset();

const createuser = async () => {
  await userStore.createUser();
  userStore.list();
};

const renderImg = computed(() => {
  if (!img.value[0]) return;
  const file = img.value[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => {
    defaultUser.value.photo = reader.result;
  });
});
</script>

<style scoped></style>
