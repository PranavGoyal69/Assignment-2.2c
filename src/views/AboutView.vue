<template>
  <div class="about">
    <h1>About Our Restaurant</h1>
    <p>Welcome to <strong>Delicious Eats</strong>, where culinary magic happens!</p>
    <p>At our restaurant, we are passionate about serving you the finest dishes created with love and expertise. Our commitment to quality and flavor is unmatched.</p>
    <p>Explore our diverse menu featuring:</p>
    <ul>
      <li>Appetizers that tantalize your taste buds.</li>
      <li>Main courses that are a symphony of flavors.</li>
      <li>Decadent desserts that will satisfy your sweet tooth.</li>
    </ul>
    <p>Whether you're celebrating a special occasion or just stopping by for a quick bite, our warm and welcoming atmosphere ensures that every visit is a memorable experience.</p>
  </div>
</template>

<style scoped>
  .about {
    display: flex;
    align-items: center;
    justify-content: center; /* Horizontally center the content */
    flex-direction: column; /* Stack items vertically */
    text-align: center; /* Center-align text */
    background-color: #f4f4f4; /* Background color */
    padding: 40px;
    height: 100%; /* Set the height to 100% to fill the entire screen */

    /* Responsive Styles */
    @media (max-width: 768px) {
      padding: 20px; /* Reduce padding on smaller screens */
    }
  }

  .about h1 {
    font-size: 2.5rem; /* Increase the font size for the heading */
    margin-bottom: 1rem; /* Add some space below the heading */
    color: #333; /* Text color */

    /* Responsive Styles */
    @media (max-width: 768px) {
      font-size: 2rem; /* Decrease font size on smaller screens */
    }
  }

  .about p {
    font-size: 1.2rem; /* Increase the font size for the paragraph */
    max-width: 600px; /* Limit the width of the paragraph for better readability */
    margin: 1rem 0; /* Add spacing between paragraphs */
    color: #555; /* Text color */

    /* Responsive Styles */
    @media (max-width: 768px) {
      font-size: 1rem; /* Decrease font size on smaller screens */
    }
  }

  .about strong {
    color: #e44d26; /* Highlight text with a different color */
  }

  .about ul {
    list-style-type: disc; /* Use bullets for the list */
    text-align: left; /* Left-align list items */
  }

  .about ul li {
    font-size: 1.2rem;
    color: #555;
    margin-left: 20px; /* Add indentation for list items */
  }
</style>
