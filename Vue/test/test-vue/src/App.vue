<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
//Composition API style

    const name = ref('miranda b');
    const status = ref('active');
    const tasks = ref(['task1', 'task2', 'task3']);
    const newTask = ref('');

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

    const addTask = () => {
      //validation
      if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
      }

    }

    const deleteTask = (index) => {
      tasks.value.splice(index,1);
    }

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task) => task.title);
      } catch (error) {
        console.log('Error fetching tasks');
      }
    });
</script>
<template>
  <h1> {{ name }} </h1>

  <p v-if="status === 'active'">User is active </p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inacitve</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask"></input> 
    <button type="submit">Submit</button>
     <!-- can bind data to input v-model directive-->
  </form>
  <h3> Tasks </h3>
  <ul>
      <li v-for="(task,index) in tasks" :key="task">
        <span>
        {{ task }}
        </span>
        <button @click="deleteTask(index)">X</button>
      </li>

  </ul>
  <br />
  <button @click="toggleStatus">Change Status</button> 
</template>

<style scoped>

</style>