<template>
  <div>
    <!-- Header with main content and sub-content links -->
    <header class="Header">
      <div class="links">
        <!-- Main content links -->
        <RouterLink class="main-link" to="/about">About Us</RouterLink>
        <RouterLink class="main-link" to="/order">Order</RouterLink>
        <RouterLink class="main-link" to="/reservation">Reservation</RouterLink>
        <RouterLink class="main-link" to="/menu">Menu</RouterLink>
        <RouterLink class="main-link" to="/customer">Customer</RouterLink>
        <RouterLink class="main-link" to="/feedback">Feedback</RouterLink>
      </div>
      <div class="auth-buttons">
        <button class="btn btn-primary">Sign In</button>
        <button class="btn btn-secondary">Sign Up</button>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style scoped>
/* Styles for the header element */
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: space-between; /* Add space between links and buttons */
  align-items: center;
  padding: 10px;
}

/* Styles for the links */
.links {
  display: flex;
  gap: 10px; /* Add space between links */
}

.main-link {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.main-link:hover {
  background-color: white;
  color: red;
}

/* Styles for the auth buttons */
.auth-buttons {
  display: flex;
  gap: 10px; /* Add space between buttons */
}

button {
  margin: 0;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Primary button style */
.btn-primary {
  background-color: #007bff;
  color: white;
}

/* Secondary button style */
.btn-secondary {
  background-color: #6c757d;
  color: white;
}

/* Hover effect for buttons */
button:hover {
  background-color: #0056b3;
}

</style>
