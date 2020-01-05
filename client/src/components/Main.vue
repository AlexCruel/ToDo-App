<template>
  <div class="c">
    <Header />
    <GreetingLine />
    <TodoList />
    <SendingLine />
    <PostComponent />
    <Entrance />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import GreetingLine from "./GreetingLine.vue";
import SendingLine from "./SendingLine.vue";
import Header from "./Header.vue";
import PostComponent from "./PostComponent";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    TodoList,
    GreetingLine,
    SendingLine,
    PostComponent
  }
};
</script>

<style scoped>
</style>