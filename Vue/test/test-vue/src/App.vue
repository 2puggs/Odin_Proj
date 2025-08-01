<script setup>
import { ref } from 'vue';
//Composition API style

    const name = ref('miranda b');
    const status = ref('active');
    const tasks = ref(['task1', 'task2', 'task3']);

    const toggleStatus = () => { //need status to be reactive ref() -> reactive components don't use keywork they use value
      if (status.value === 'active') {
        status.value = 'pending';
      }
      else if (status.value === 'pending') {
        status.value ='inactive';
      } else {
        status.value = 'active';
      }
    };
</script>
<template>
  <h1> {{ name }} </h1>

  <p v-if="status === 'active'">User is active </p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inacitve</p>

  <h3> Tasks </h3>
  <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <br />
  <button @click="toggleStatus">Change Status</button> 
</template>

<style scoped>

</style>