<template>
  <div class="bg-gradient-to-r from-indigo-100 min-h-screen">
    <div class="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"> 
      <div class="flex flex-row mb-4 md:mb-8 justify-between">
        <div class="flex">
          <h2 class="max-w-md font-sans text-xl font-bold  text-gray-800 sm:text-2xl">
            Detail Karyawan
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-12">
        <div class="grid grid-cols-2 w-full">
          <div class="flex flex-col col-span-1 space-y-4">
            <span class="text-sm sm:text-base font-semibold text-gray-800">Nama :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Tanggal Lahir :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Jenis Kelamin :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Email :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Alamat :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Tanggal Bergabung :</span>
          </div>
          <div class="flex flex-col col-span-1 space-y-4">
            <span class="text-sm sm:text-base text-gray-800">{{ employee.first_name }} {{ employee.last_name }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.date_of_birth }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.gender }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.email }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.address }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.hire_date }}</span>
          </div>
        </div>  
        <div class="grid grid-cols-2 w-full">
          <div class="flex flex-col col-span-1 space-y-4">
            <span class="text-sm sm:text-base font-semibold text-gray-800">Tanggal Resign :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Divisi :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Posisi :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Deskripsi Pekerjaan :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Gaji :</span>
            <span class="text-sm sm:text-base font-semibold text-gray-800">Status :</span>
          </div>
          <div class="flex flex-col col-span-1 space-y-4">
            <span class="text-sm sm:text-base text-gray-800">{{ employee.termination_date ? employee.termination_date : 'belum resign' }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.division }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.job_title }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.job_description }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.salary }}</span>
            <span class="text-sm sm:text-base text-gray-800">{{ employee.status === 'active' ? 'Aktif' : 'Tidak Aktif' }}</span>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'DetailView',
  data(){
    return{
      employee: {}
    };
  },
  methods: {
    async getEmployee(){
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/employes/${this.$route.params.id}`);
        console.log(response.data.data);
        this.employee = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getEmployee();
  },
});

</script>