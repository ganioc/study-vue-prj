<template>
  <div class="help">
    <h1>Help</h1>
    <h2>{{ msg}}</h2>
    <Button type="success">success</Button>
    <Button type="error">Fail</Button>
    <h3>
      <a href="/">Home</a>
    </h3>
    <Icon type="ios-checkmark" size="64" />
  </div>
</template>
<script>
export default {
  name: 'Help',
  data() {
    return {
      msg: 'Help app'
    }
  }
}
</script>
<style>
</style>