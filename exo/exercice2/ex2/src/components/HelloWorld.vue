<template>
  <div class="hello">
    <h1>{{ revertBlague }}</h1>
    <h2>Bonjour, {{ user.firstname }} {{ lastnameUpper }}, tu as {{ ageStr }}</h2>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      blague: "je suis un super dev vuejs",
      user: {
        firstname: "Nicolas",
        lastname: "Lécaille",
        age: 42
      }
    }
  },
  computed: {
    revertBlague() {
      return this.blague.split("").reverse().join("");
    },
    lastnameUpper() {
      return this.user.lastname.toUpperCase()
    },
    ageStr() {
      return `${this.user.age} ans`
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
