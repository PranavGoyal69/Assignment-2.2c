<template>
  <div>
    <h2 class="text-center">Customer</h2>
    <p v-if="customerName" class="welcome-message">Welcome, <span class="customer-name">{{ customerName }}</span>!</p>
    <p v-else class="welcome-message">Welcome, valued customer!</p>

    <!-- Input field for the customer's name -->
    <input v-model="customerName" class="name-input" placeholder="Enter your name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: '', // Initialize as an empty string
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.welcome-message {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.customer-name {
  color: #007BFF; /* Blue color for the customer's name */
  font-weight: bold;
}

.name-input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}
</style>
