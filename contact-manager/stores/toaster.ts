import { defineStore } from "pinia";

export const useToasterStore = defineStore("toast", () => {
  const showToaster = ref(false);
  const type = ref("");
  const message = ref("");

  const showMessage = (__message: String) => {
    showToaster.value = true;
    message.value = __message;
  };

  const showSuccessToaster = (message) => {
    type.value = "success";
    showMessage(message);
  };

  const showErrorToaster = (message) => {
    type.value = "error";
    showMessage(message);
  };

  return {
    showToaster,
    type,
    message,
    showMessage,
    showSuccessToaster,
    showErrorToaster,
  };
});
