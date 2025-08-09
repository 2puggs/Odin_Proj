<script setup>
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue'; 
  import JobListings from '@/components/JobListings.vue';
  import JobListing from '@/components/JobListing.vue';
</script>

<template>
  <Navbar/>
  <Hero/> <!-- to use the test title else its the {{ }}  }}<Hero title="Test Title" subtitle="test Subtitle"/>-->
  <HomeCards/>
  <JobListings :limit="3"/> 
  <JobListing/> 
</template>

