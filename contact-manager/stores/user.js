import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
  const users = ref([
    {
      name: "Golden abood",
      mobilePhone: "0958680183",
      email: "a@Golden-1958.com",
      photo: "/images/team-02.jpg",
    },
    {
      name: "Ossy dh",
      mobilePhone: "0956873465",
      email: "O@ssy-1958.com",
      photo: "/images/team-03.jpg",
    },
    {
      name: "Ayham Hawa",
      mobilePhone: "0956824957",
      email: "a@yhmam-1958.com",
      photo: "/images/team-04.jpg",
    },
  ]);
  const remove = (index) => {
    users.value.splice(0, index);
  };
  /*
  // {{ CRUD }} {{D}}
  let conf = document.querySelector("#delete-user");
  console.log(conf);
  const deleteUser = (index) => {
    if (conf) {
      users.value.splice(index, 1);
    }
  };
  // {{ CRUD }} {{U}}
  const updateTask = (index) => {
    let user = users.value[index];
    let nameTask = prompt("update task", user.name);
    user.name = nameTask;
  };
  // inputs

  // {{ CRUD }} {{C}}
  const CreateUser = () => {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let photo = document.getElementById("photo").files[0];
    let btai = document.getElementById("btai");
    console.log(email);
    console.log(name);
    console.log(phone);
    console.log(photo);

    let user = {
      name: name,
      email: email,
      phone: phone,
      photo: `images/${photo.name}`,
    };
    users.value.push(user);
    console.log(btai);
    btai.setAttribute("data-modal-hide", "authentication-modal");
    console.log(btai);
  };
  */
  return {
    users,
    remove,
    /*
    CreateUser,
    updateTask,
    deleteUser,
    */
  };
});
