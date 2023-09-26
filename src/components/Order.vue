<template>
  <div>
    <h2>Order</h2>
    <ul>
      <li v-for="item in orderedItems" :key="item.id">{{ item.name }} - Quantity: {{ item.quantity }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    orderedItems: Array, // Define the prop to receive orderedItems from the parent component
  },
};
</script>
  
<style scoped>
.text-center {
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  margin-bottom: 5px;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>