<script>
export default {
  data () {
    return {
      name: 'miranda b',
      status: 'active',
      tasks: ['task1', 'task2', 'task3'],
      link: 'https://google.com', 
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      }
      else if (this.status === 'pending') {
        this.status ='inactive';
      } else {
        this.status = 'active';
      }
    },
  }
};
</script>
<template>
  <h1> {{ name }} </h1>

  <p v-if="status === 'active'">User is active </p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inacitve</p>

  <h3>
  <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">goto google</a>
  <br />
  <button @click="toggleStatus">Change Status</button> 
  <!--<a v-bind:href="link">Click</a>-->
  </h3>
</template>

<style scoped>

</style>