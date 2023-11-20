<template>
  <div class="text-center">
    <v-snackbar
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      :timeout="3000"
      variant="tonal"
      :color="props.type"
      location="top right"
    >
      <slot></slot>

      <template v-slot:actions>
        <v-btn
          variant="plain"
          size="small"
          :color="props.type"
          icon
          @click="emit('update:modelValue', false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts" setup>
import { useToasterStore } from "~/stores/toaster";
import { storeToRefs } from "pinia";
const toasterStore = useToasterStore();
const { showToaster } = storeToRefs(toasterStore);
const props = defineProps({
  type: { type: String, default: "success" },
  modelValue: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style>
.v-snackbar--variant-tonal {
  background-color: white !important;
}
</style>
