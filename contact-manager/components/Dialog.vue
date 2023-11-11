<template>
  <v-dialog persistent scroll-strategy="reposition" width="600">
    <v-card class="pb-6">
      <div class="flex justify-between m-3">
        <v-card-title class="!font-bold !text-2xl"
          >Create New User</v-card-title
        >
        <v-icon size="large" class="bg-primary p-5 rounded-full"
          >mdi-close
        </v-icon>
      </div>
      <v-card-text>
        <form>
          <v-text-field v-model="user.name" label="User Name"></v-text-field>
          <v-text-field v-model="user.email" label="password"></v-text-field>
          <v-text-field
            v-model="user.mobilePhone"
            label="mobile phone"
          ></v-text-field>
          <v-file-input
            v-model="user.photo"
            color="deep-purple-accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your photo"
            prepend-icon="mdi-paperclip"
            variant="outlined"
            :show-size="1000"
          >
            <template v-slot:selection="{ fileNames }">
              <template v-for="(fileName, index) in fileNames" :key="fileName">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple-accent-4"
                  label
                  size="small"
                  class="me-2"
                >
                  {{ fileName }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline text-grey-darken-3 mx-2"
                >
                  +{{ user.photo.length - 2 }} File(s)
                </span>
              </template>
            </template>
          </v-file-input>
        </form>
      </v-card-text>
      <div class="actions flex justify-center gap-x-5">
        <v-btn color="light" @click="$router.replace('/')"> close </v-btn>
        <v-btn color="primary" @click="$router.replace('/')"> Create </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user.ts";
const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const user = {
  name: ref(""),
  email: ref(""),
  mobilePhone: ref(""),
  photo: ref([]),
};

defineEmits(["closeDialog"]);
</script>

<style scoped></style>
