<template>
  <div class="navFull">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">Orders</a>
      </el-menu-item>
      <div class="navRight">
        <el-menu-item>
          <router-link to="firstblood">
            <el-button type="primary" round background="false">Sign Up!</el-button>
          </router-link>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  }
};
</script>

<style scoped>
a {
  color: white;
}

.navFull {
  position: relative;
}

.navRight {
  position: absolute;
  right: 0;
  top: 0;
}

.el-menu-item {
  background-color: white;
}
</style>