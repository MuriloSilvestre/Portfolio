<template>
  <div id="#app">
    {{ title }}
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      title:'Hello Vue'
    }
  }
}
</script>

<style>
  #app{
    color: green;
    font-weight: bold;
    font-size:3rem;
    text-align: center;
  }
</style>