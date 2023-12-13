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
  <h1>Contacts</h1>
  <ContactForm />
</template>

<style lang="scss" scoped>
h1{
    color: white;
}
</style>