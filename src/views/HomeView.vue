<template>
  <div class="bg-gradient-to-r from-indigo-100 min-h-screen">
    <div class="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"> 
      <div class="flex flex-row mb-4 md:mb-8 justify-between">
        <div class="flex">
          <h2 class="max-w-md font-sans text-xl font-bold  text-gray-800 sm:text-2xl">
            Data Karyawan
          </h2>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between mb-6'>
        <div className="relative inline-flex w-2/5 sm:w-32 md:w-40">
          <select 
            v-model="filters.status"
            @change="fetchEmployees"
            className="w-full sm:w-32 md:w-40 sm:h-12 h-10 px-4 sm:text-base text-md font-medium transition rounded-xl border-2 border-gray-500 focus:border focus:ring-2 focus:border-indigo-400 focus:ring-indigo-300 focus:shadow-outline focus:outline-none appearance-none"
          >
            <option key="" value="" selected>Status</option>
            <option key='active' value='active'>Aktif</option>
            <option key='inactive' value='inactive'>Tidak Aktif</option>
          </select>
        </div>
        <div className="relative inline-flex w-2/5 sm:w-32 md:w-40">
          <select 
            v-model="filters.division"
            @change="fetchEmployees"
            className="w-full sm:w-32 md:w-40 sm:h-12 h-10 px-4 sm:text-base text-md font-medium transition rounded-xl border-2 border-gray-500 focus:border focus:ring-2 focus:border-indigo-400 focus:ring-indigo-300 focus:shadow-outline focus:outline-none appearance-none"
          >
            <option key="" value="" selected>Divisi</option>
            <option key='IT' value='IT'>IT</option>
            <option key='HR' value='HR'>HR</option>
            <option key='Sales' value='Sales'>Sales</option>
            <option key='Marketing' value='Marketing'>Marketing</option>
            <option key='Finance' value='Finance'>Finance</option>
            <option key='Operations' value='Operations'>Operations</option>
          </select>
        </div>
      </div>
      <table class="w-full">
        <thead class='bg-slate-200 text-sm sm:text-base text-gray-800'>
          <tr>
            <th class="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Nama
            </th>
            <th class="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Divisi
            </th>
            <th class="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Posisi
            </th>
            <th class="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Status
            </th>
            <th class="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr v-for="(employee, index) in employees" :key="index" class="transition duration-300 ease-in-out">
            <td class="px-4 sm:px-6 py-3 sm:py-4 text-center font-normal font-sans text-sm sm:text-base text-gray-800">
              {{ employee.first_name }} {{ employee.last_name }}
            </td>
            <td class="px-4 sm:px-6 py-3 sm:py-4 text-center font-normal font-sans text-sm sm:text-base text-gray-800">
              {{ employee.division_name }}
            </td>
            <td class="px-4 sm:px-6 py-3 sm:py-4 text-center font-normal font-sans text-sm sm:text-base text-gray-800">
              {{ employee.job_title }}
            </td>
            <td :class="['px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold font-sans text-sm sm:text-base', employee.status === 'active' ? 'text-green-500' : 'text-red-500']">
              {{ employee.status === 'active' ? 'Aktif' : 'Tidak Aktif' }}
            </td>
            <td class="px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold font-sans text-sm sm:text-base text-gray-800">
              <router-link
                :to="{ name: 'Detail', params: { id: employee.id } }"
                class="px-4 py-2 bg-blue-100 rounded-xl text-blue-500 hover:bg-blue-200"
              >                
                Detail
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'HomeView',
  components: {
    RouterLink
  },
  data() {
    return {
      employees: [],
      filters: {
        status: '',
        division: ''
      }
    };
  },
  methods: {
    async fetchEmployees() {
      const params: any = {};
      try {
        if(this.filters.status) params.status = this.filters.status;
        if(this.filters.division) params.division = this.filters.division;

        const response = await axios.get('http://localhost:8000/api/v1/employes', { params });
        console.log(response.data.data);
        this.employees = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchEmployees();
  }
});

</script>