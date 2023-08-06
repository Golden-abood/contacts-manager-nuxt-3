<template>
  <v-container class="mt-4">
    <div class="d-flex items-center gap-x-3">
      <div class="text-primary text-h4">Contact manager</div>
    </div>
    <p class="mt-6 font-semibold text-base text-[#666] italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
      veritatis magni quidem odit at officiis quis, fuga consequatur nulla
      aliquam cum sapiente iste, nobis recusandae vitae labore vel optio.
    </p>
    <v-btn @click="router.push('./users')">Go </v-btn>
  </v-container>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
