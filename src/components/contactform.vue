<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const confirmationMessage = ref('');

const submitForm = () => {
  // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
  console.log('Formulaire soumis avec succès:', formData.value);
  confirmationMessage.value = 'Votre message a été envoyé avec succès !';

  // Réinitialiser le formulaire
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Effacer le message de confirmation après un délai
  setTimeout(() => {
    confirmationMessage.value = '';
  }, 5000); // Délai en millisecondes
};
</script>

<template>
  <form @submit.prevent="submitForm" class="mt-12 mx-16 md:mx-96">
    <div class="space-y-6">
      <div class="md:flex md:justify-center md:space-x-12">
        <div class="relative z-0">
          <input v-model="formData.name" type="text" name="name" class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" " />
          <label label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Name</label>
        </div>
        <div class="relative z-0">
          <input v-model="formData.email" type="text" name="email" required class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Email*</label>
        </div>
        <div class="relative z-0">
          <input v-model="formData.subject" type="text" name="subject" class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Subject</label>
        </div>
      </div>
      <div class="relative z-0 col-span-2 md:ml-[168px]">
        <textarea v-model="formData.message" name="message" rows="5" class="peer block w-60 md:w-[820px] appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" "></textarea>
        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Your message here...</label>
      </div>
    </div>
    <div class="p-12 mx-6 md:flex md:justify-center md:mt-10 group transition-transform duration-300 ease-in-out transform hover:scale-110">
      <button type="submit" class="w-[112.47px] h-[34.08px] bg-red-700 text-white rounded-full flex items-center -space-x-4 gap-6 font-rubik text-lg font-normal">
        <p class="ml-5">Send</p>
        <img src="/src/img/contact/send.svg" class="" alt="Send button">
      </button>
    </div>
    <transition name="fade" enter-active-class="fade-enter-active" leave-active-class="fade-leave-active" enter-class="fade-enter" leave-to-class="fade-leave-to">
        <div v-if="confirmationMessage" class="fixed bottom-0 left-0 right-0 bg-green-500 text-white py-4 text-center font-rubik z-20">
        <p class="font-bold font-rubik">{{ confirmationMessage }}</p>
        </div>
    </transition>
  </form>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
