<script setup>
import jobData from '@/jobs.json';
import { ref, defineProps } from 'vue'; 
import JobListing from './JobListing.vue';

defineProps({
    limit: Number
})
const jobs = ref(jobData); // makes data reactive
console.log(jobs.value); 
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="constiner-xl lg:container m-auto">
            <h2 class= "text-3xl font-bold text-green-500  mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs.slice(0,limit || jobs.length)" :key="job.id" :job="job"/>  <!--Generated the jo.id for every job in the .json-->
            </div>
        </div>
   </section>

</template>