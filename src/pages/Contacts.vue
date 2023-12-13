<script>
import ContactForm from '../components/partials/ContactForm.vue'
export default {
  name: 'Contacts',
    components: {
      ContactForm
    }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>Contacts</h1>
      <ContactForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
    color: white;
}
</style>