<template>
  <div>
    <h2 class="text-center">Menu</h2>
    <ul class="menu-list">
      <li v-for="item in menuItems" :key="item.id" class="menu-item">
        <div class="menu-item-content">
          <img :src="item.imageUrl || '/restaurent.jpg'" alt="Img" class="Image">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price.toFixed(2) }}</p>
          <button @click="addToCart(item)">Add to Cart</button>
        </div>
      </li>
    </ul>
    <!-- Display the cart content -->
    <Order :orderedItems="cart" />
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        menuItems: [
        { id: 1, name: 'Our Special Pizza', price: 10.99, imageUrl:'https://stbedesmentonetigers.com.au/wp-content/uploads/2023/06/classic-cheese-pizza.jpg'},
        { id: 2, name: 'Burger', price: 12.99 },
        { id: 3, name: 'Spaghetti', price: 9.99 },
        { id: 4, name: 'Salad', price: 6.99 },
        { id: 5, name: 'Steak', price: 15.99 },
        { id: 6, name: 'Chicken Wings', price: 8.99 },
        { id: 7, name: 'Sushi Roll', price: 14.99 },
        { id: 8, name: 'Fish Tacos', price: 11.99 },
        { id: 9, name: 'Caesar Salad', price: 7.99 },
        { id: 10, name: 'Pasta Carbonara', price: 10.99 },
        { id: 11, name: 'Grilled Salmon', price: 13.99 },
        { id: 12, name: 'Margarita', price: 7.99 },
        { id: 13, name: 'Fried Rice', price: 9.99 },
        { id: 14, name: 'Tiramisu', price: 6.99 },
        { id: 15, name: 'Milkshake', price: 4.99 },
        // Add more menu items here
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(item) {
      // Check if the item is already in the cart
      const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If it's in the cart, increase the quantity
        existingItem.quantity++;
      } else {
        // If not, add it to the cart
        this.cart.push({ ...item, quantity: 1 });
      }
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: space-between; /* Add space between items */
}

.menu-item {
  flex: 0 1 calc(33.33% - 20px); /* Adjust the percentage for the desired number of columns */
  margin-bottom: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 10px;
  box-sizing: border-box;
}

.menu-item-content {
  text-align: center;
}

button {
  background-color: #f04e23;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  width: 100%; /* Button width spans the container */
}

button:hover {
  background-color: #d13b1f;
}

@media (max-width: 768px) {
  .menu-item {
    flex: 0 1 calc(50% - 20px); /* Reduce the number of columns on smaller screens */
  }
}
</style>