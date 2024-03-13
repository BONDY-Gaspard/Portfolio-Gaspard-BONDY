<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
  console.log('Formulaire soumis avec succès:', formData.value);
};
</script>
<template>
    <!-- <form @submit.prevent="submitForm">
      <div>
        <label for="name" class="bg-none">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="formData.subject">
      </div>
      <div>
        <label for="message">Your message here:</label>
        <textarea id="message" v-model="formData.message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form> -->

    <form @submit.prevent="submitForm" class="mt-12 mx-16">
        <div class="space-y-6">
            <div class="relative z-0">
                <input type="text" name="name" class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" " />
                <label label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Name</label>
            </div>
            <div class="relative z-0">
                <input type="text" name="email" required class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Email</label>
            </div>
            <div class="relative z-0">
                <input type="text" name="subject" class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Subject</label>
            </div>
            <div class="relative z-0 col-span-2">
                <textarea name="message" rows="5" class="peer block w-60 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-700 peer-focus:dark:text-red-700">Your message here...</label>
            </div>
        </div>
        <div class="p-12 mx-6">
            <button type="submit" class="w-[112.47px] h-[34.08px] bg-red-700 text-white rounded-full flex items-center -space-x-4 gap-6 font-rubik text-lg font-normal">
                <p class="ml-5">Send</p>
                <img src="/src/img/contact/send.svg" class="" alt="Send button">
            </button>
        </div>
    </form>
</template>
  

  