<template>
  <v-container>
    <p class="text-primary text-3xl font-bold">View Contact</p>
    <p class="mt-6 font-semibold text-xl text-[#666] italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
      veritatis magni quidem odit at officiis quis, fuga consequatur nulla
      aliquam cum sapiente iste, nobis recusandae vitae labore vel optio.
    </p>

    <div
      class="flex flex-col lg:flex-row items-center gap-4 justify-around p-5 mt-16 rounded-md"
    >
      <div class="flex-col text-center md:!text-start">
        <img
          :src="defaultUser.photo"
          class="max-w-[50%] rounded-full !mx-auto"
        />
        <v-btn
          color="primary"
          class="!font-bold !hidden !md:block mx-20 mt-4"
          @click="$router.push('/')"
        >
          back
        </v-btn>
      </div>
      <div class="bg-white py-4 px-10 w-[90%] lg:w-[50%] rounded-sm">
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <span class="text-[#666]">Name :</span>{{ defaultUser.name }}
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <span class="text-[#666]">Mobile : </span>
          {{ defaultUser.mobilePhone }}
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <span class="text-[#666]">Email :</span> {{ defaultUser.email }}
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <span class="text-[#666]">Company :</span> {{ defaultUser.company }}
        </p>
        <p class="border-b-solid border-b-[#ddd] border-b-[1px] py-3">
          <span class="text-[#666]">Title:</span> {{ defaultUser.title }}
        </p>
        <p class="py-3">
          <span class="text-[#666]">Group :</span> {{ defaultUser.group }}
        </p>
      </div>
      <v-btn
        color="primary"
        class="!font-bold md:!hidden"
        @click="$router.push('/')"
      >
        back
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { defaultUser } = storeToRefs(userStore);

const route = useRoute();
const param = route.params.id;
const { pending } = useLazyAsyncData(() => userStore.getUser(param));
</script>

<style scoped></style>
