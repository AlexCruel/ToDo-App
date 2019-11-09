<template>
  <div id="app">
    <Header/>
    <GreetingLine/>
    <TodoList/>
    <SendingLine/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import GreetingLine from './components/GreetingLine.vue'
import SendingLine from './components/SendingLine.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Header,
    TodoList,
    GreetingLine,
    SendingLine
  },
  methods: {

  }
}
</script>

<style>

</style>
