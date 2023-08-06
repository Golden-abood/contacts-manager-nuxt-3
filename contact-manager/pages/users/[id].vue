<template>
  <v-dialog
    :model-value="true"
    persistent
    scroll-strategy="reposition"
    width="600"
  >
    <v-card class="pb-6">
      <div class="flex justify-between m-3">
        <v-card-title>Create New User</v-card-title>
        <v-btn
          rounded
          class="m-2 max-w-[10px]"
          color="primary"
          size="small"
          @click="$router.replace('/')"
          ><v-icon size="small">mdi-close</v-icon>
        </v-btn>
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
import { useUserStore } from "../../stores/user";
const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const user = ref({
  name: ref(""),
  mobilePhone: ref(""),
  email: ref(""),
  photo: ref([]),
});
console.log(user.value.mobilePhone);
const createUser = () => {
  console.log(users.value);
  console.log(user.value);
};
</script>

<style scoped></style>
