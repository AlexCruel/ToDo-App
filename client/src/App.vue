<template>
  <div id="app">
    <Header/>
    <GreetingLine/>
    <TodoList/>
    <SendingLine/>
    <PostComponent/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import GreetingLine from './components/GreetingLine.vue'
import SendingLine from './components/SendingLine.vue'
import Header from './components/Header.vue'
import PostComponent from './components/PostComponent'

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
    SendingLine,
    PostComponent
  },
  methods: {

  }
}
</script>

<style>

</style>
