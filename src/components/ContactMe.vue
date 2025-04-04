<template>
    <section id="contact" class="contact-section">
      <div class="content-container">
        <h2 class="section-heading">Contact Me</h2>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <!-- Name Field -->
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="formData.name"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
  
          <!-- Email Field -->
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
  
          <!-- Message Field -->
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              v-model="formData.message"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <button type="submit" class="submit-button">Send</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactMe',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // You can replace this with your actual submission logic,
        // e.g., an API call, email service, etc.
        console.log('Form data submitted:', this.formData);
  
        // Optionally, clear the form after submission
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-section {
    padding: 4rem 0;
    position: relative;
    /* Follow your same pointer-events approach if desired */
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .content-container {
    pointer-events: auto;
    z-index: 10;
    position: relative;
    max-width: 600px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    color: #fff;
  }
  
  .section-heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  /* Contact Form Styling */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    font-weight: bold;
    color: #ffffff;
  }
  
  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #444444;
    border-radius: 4px;
    background-color: #1e1e1e;
    color: #ffffff;
    width: 100%;
    font-size: 1rem;
    resize: none;
    outline: none;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #888888;
  }
  
  .submit-button {
    align-self: flex-end;
    padding: 0.75rem 1.5rem;
    background-color: #3B82F6;
    border: 2px solid #3B82F6;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .submit-button:hover {
    transform: translateY(-3px);
  }
  </style>
  