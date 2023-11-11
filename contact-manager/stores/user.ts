import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
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
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    users.value = data;
  };

  const getUser = async (id: number) => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    const data = await res.json();
    defaultUser.value = data;
  };

  const deleteUser = async (id: number) => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    const data = res.json();
    list();
  };
  const updateUser = async (id: number) => {
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
    const router = useRouter();
    router.push("/");
    list();
  };

  const createUser = async () => {
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
    const router = useRouter();
    router.push("/");
    users.value = users.value;
    list();
  };

  return {
    users,
    defaultUser,
    list,
    getUser,
    deleteUser,
    updateUser,
    createUser,
  };
});
