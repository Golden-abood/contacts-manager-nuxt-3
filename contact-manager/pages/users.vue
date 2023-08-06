<template>
  <v-container class="mt-4">
    <div class="d-flex items-center gap-x-3">
      <div class="text-primary text-h4">Contact manager</div>
      <v-btn
        color="primary"
        prepend-icon="mdi-plus-circle"
        class="text-white"
        @click="router.push('/users/create')"
      >
        New
      </v-btn>
    </div>
    <p class="mt-6 font-semibold text-base text-[#666] italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
      veritatis magni quidem odit at officiis quis, fuga consequatur nulla
      aliquam cum sapiente iste, nobis recusandae vitae labore vel optio.
    </p>
    <users />
  </v-container>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
</script>

<style scoped></style>
