<template>
  <v-container>
    <p class="text-primary text-3xl font-bold">Update Contact</p>
    <p class="mt-6 font-semibold text-xl text-[#666] italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
      veritatis magni quidem odit at officiis quis, fuga consequatur nulla
      aliquam cum sapiente iste, nobis recusandae vitae labore vel optio.
    </p>

    <div
      class="flex flex-col lg:flex-row gap-4 justify-between p-5 mt-16 rounded-md"
    >
      <div class="bg-white py-4 px-10 w-[90%] lg:w-[50%] rounded-sm">
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <v-text-field
            v-model="defaultUser.name"
            variant="outlined"
            class="text-[#666]"
            placeholder="Name"
          ></v-text-field>
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <v-text-field
            v-model="defaultUser.mobilePhone"
            variant="outlined"
            placeholder="mobilePhone"
            class="text-[#666]"
          >
          </v-text-field>
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <v-text-field
            v-mode="defaultUser.email"
            variant="outlined"
            class="text-[#666]"
            placeholder="email"
          ></v-text-field>
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <v-text-field
            v-model="defaultUser.company"
            variant="outlined"
            class="text-[#666]"
            placeholder="company"
          ></v-text-field>
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <v-text-field
            v-model="defaultUser.title"
            variant="outlined"
            class="text-[#666]"
            placeholder="title"
          ></v-text-field>
        </p>
        <p class="py-3">
          <v-text-field
            v-model="defaultUser.group"
            variant="outlined"
            class="text-[#666]"
            placeholder="Group"
          ></v-text-field>
        </p>
      </div>
      <div class="flex-col text-center md:!text-start">
        <img
          :src="defaultUser.photo"
          class="max-w-[50%] rounded-full !mx-auto"
        />
        <v-btn
          color="primary"
          class="!font-bold !hidden !md:block mx-20 mt-16"
          @click="userStore.updateUser(query)"
        >
          Update
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
const router = useRouter();
const query = router.currentRoute.value.hash.slice(1);
const { pending } = useLazyAsyncData(() => userStore.getUser(query));
</script>

<style scoped></style>
