<template>
    <div class="reservation-container">
      <div class="form-container">
        <h2 class="text-center">Reservation</h2>
        <form class="reservation-form" @submit.prevent="makeReservation">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              v-model="reservationName"
              class="form-control"
              required
              aria-label="Name"
            />
          </div>
          <div class="form-group">
            <label for="date">Date:</label>
            <input
              type="date"
              id="date"
              v-model="reservationDate"
              class="form-control"
              required
              aria-label="Date"
            />
          </div>
          <div class="button-container">
            <button type="submit" class="btn btn-primary">Make Reservation</button>
          </div>
        </form>
      </div>
      <div class="reservation-list">
        <h2>Reservations Made</h2>
        <ul>
          <li v-for="reservation in reservations" :key="reservation.id">
            {{ reservation.name }} - {{ reservation.date }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reservationName: "",
        reservationDate: "",
        reservations: [],
      };
    },
    methods: {
      makeReservation() {
        // Client-side validation (you can add more checks)
        if (!this.reservationName || !this.reservationDate) {
          alert("Please fill out all fields.");
          return;
        }
  
        // Handle reservation submission and add to the reservations array
        this.reservations.push({
          id: Date.now(), // Use a unique identifier (e.g., timestamp)
          name: this.reservationName,
          date: this.reservationDate,
        });
  
        // Clear the form fields
        this.reservationName = "";
        this.reservationDate = "";
      },
    },
  };
  </script>
<style scoped>
.reservation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

.form-container {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.reservation-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-container {
  text-align: center;
}

.btn-primary {
  background-color: #f04e23;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.reservation-list {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.reservation-list h2 {
  text-align: center;
}
</style>  