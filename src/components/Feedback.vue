<template>
    <div>
      <h2>Customer Feedback</h2>
      <form @submit.prevent="submitFeedback">
        <div class="form-group">
          <label for="comments">Comments:</label>
          <textarea id="comments" v-model="feedback.comments" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="rating">Rating:</label>
          <!-- Implement a rating component or input field for rating -->
          <input id="rating" v-model="feedback.rating" type="number" min="1" max="5">
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      feedback: {
        comments: '',
        rating: 0,
      },
    };
  },
  methods: {
    submitFeedback() {
      // Implement logic to send the feedback data to your server or process it as needed
      console.log('Feedback submitted:', this.feedback);
      // You can reset the form or provide a success message here
    },
  },
};
</script>
<style scoped>
/* Add your CSS styles here */
.form-group {
  margin-bottom: 20px;
}
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="number"] {
  width: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
  