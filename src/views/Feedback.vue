<template>
    <div>
      <h2 class="text-center">Customer Feedback</h2>
      <form @submit.prevent="submitFeedback" class="feedback-form">
        <div class="form-group">
          <label for="comments">Comments:</label>
          <textarea id="comments" v-model="feedback.comments" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label>Rating:</label>
          <div class="rating-options">
            <label>
              <input type="radio" v-model="feedback.rating" value="5">
              Excellent
            </label>
            <label>
              <input type="radio" v-model="feedback.rating" value="4">
              Very Good
            </label>
            <label>
              <input type="radio" v-model="feedback.rating" value="3">
              Good
            </label>
            <label>
              <input type="radio" v-model="feedback.rating" value="2">
              Fair
            </label>
            <label>
              <input type="radio" v-model="feedback.rating" value="1">
              Poor
            </label>
          </div>
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
          rating: null, // Initialize rating as null
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
  .text-center {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .feedback-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .rating-options {
    display: flex;
    justify-content: space-between;
  }
  
  .rating-options label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input[type="radio"] {
    margin-top: 5px;
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
  