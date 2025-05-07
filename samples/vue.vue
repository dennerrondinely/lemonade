<template>
  <button @click="sayHello">{{ message }}</button>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Lemonade!'
    }
  },
  methods: {
    sayHello() {
      alert(this.message);
    }
  }
}
</script> 