import { defineStore } from "pinia";
import { useToasterStore } from "./toaster";

export const useUserStore = defineStore("user", () => {
  const toasterStore = useToasterStore();

  const users = ref([]);
  const defaultUser = ref({
    name: "",
    mobilePhone: "",
    title: "",
    company: "",
    email: "",
    photo: "",
    group: "",
  });
  const user = ref({});

  const list = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      users.value = data;
    } catch (err) {
      console.log(err);
    }
  };

  const userFilter = async (title: String) => {
    const res = await fetch(`http://localhost:3000/users?${title}`);
    const data = await res.json();
    users.value.filter((st) => {
      st.name.match(title);
    });
  };

  const getUser = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`);
      const data = await res.json();
      defaultUser.value = data;
      toasterStore.showSuccessToaster("get User Successfully");
    } catch (err) {
      toasterStore.showErrorToaster("Faild get user");
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      const data = res.json();
      toasterStore.showSuccessToaster("Delete User Successfully");
    } catch (err) {
      toasterStore.showErrorToaster("Faild Delete User");
    }
    list();
  };
  const updateUser = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...defaultUser.value,
        }),
      });
      const data = await res.json();
      toasterStore.showSuccessToaster("Update User Successfully");
    } catch (err) {
      toasterStore.showErrorToaster("Faild Update user");
    }
    const router = useRouter();
    router.push("/");
    list();
  };

  const createUser = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...defaultUser.value,
        }),
      });
      const data = await res.json();
      toasterStore.showSuccessToaster("Create User Successfully");
    } catch (err) {
      toasterStore.showErrorToaster("Error Add user");
    }
    const router = useRouter();
    router.push("/");
    users.value = users.value;
    list();
  };
  const reset = () => {
    defaultUser.value = {
      name: "",
      mobilePhone: "",
      title: "",
      company: "",
      email: "",
      photo: "",
      group: "",
    };
  };

  return {
    users,
    defaultUser,
    list,
    userFilter,
    getUser,
    deleteUser,
    updateUser,
    createUser,
    reset,
  };
});
