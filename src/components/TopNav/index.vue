<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    @select="handleSelect"
  >
    <template v-for="(item, index) in topMenus">
      <el-menu-item :style="{'--theme': theme}" :index="index.toString()" :key="item.name" v-if="index < visibleNumber"
        ><i :class="item.icon" />
        {{ item.name }}</el-menu-item>
    </template>

    <!-- 顶部菜单超出数量折叠 -->
    <el-submenu index="more" v-if="topMenus.length > visibleNumber">
      <template slot="title">更多菜单</template>
      <template v-for="(item, index) in topMenus">
        <el-menu-item
          :index="index.toString()"
          :key="index"
          v-if="index >= visibleNumber"
          ><i :class="item.icon" />
          {{ item.name }}</el-menu-item
        >
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
import { constantRoutes } from "@/router";

export default {
  data() {
    return {
      //默认激活的index
      activeMenu:'',
      // 顶部栏初始数
      visibleNumber: 7,
      // 是否为首次加载
      isFrist: false,
      // 当前激活菜单的 index
      currentIndex: undefined
    };
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme;
    },
    // 顶部显示菜单
    topMenus() {
      let topMenus = this.$store.state.permission.topbarRouters;
      this.activeMenu=topMenus[0].path;
         this.$store.dispatch({
          type:'LeftSideBar',
          key:this.activeMenu
        })
      return topMenus;
    },
    // 所有的路由信息
    routers() {
      return this.$store.state.permission.topbarRouters;
    },
    // 设置子路由
    childrenMenus() {
      var childrenMenus = [];
      this.routers.map((router) => {
        for (var item in router.children) {
          if (router.children[item].parentPath === undefined) {
            if(router.path === "/") {
              router.children[item].path = "/redirect/" + router.children[item].path;
            } else {
			  if(!this.ishttp(router.children[item].path)) {
                router.children[item].path = router.path + "/" + router.children[item].path;
			  }
            }
            router.children[item].parentPath = router.path;
          }
          childrenMenus.push(router.children[item]);
        }
      });
      return constantRoutes.concat(childrenMenus);
    },
  
  },
  beforeMount() {
    window.addEventListener('resize', this.setVisibleNumber)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setVisibleNumber)
  },
  mounted() {
    this.setVisibleNumber();
    this.$store.dispatch({
      type:'LeftSideBar',
      key:0
    })
  },
  methods: {
    // 根据宽度计算设置显示栏数
    setVisibleNumber() {
      const width = document.body.getBoundingClientRect().width / 3;
      this.visibleNumber = parseInt(width / 85);
    },
    // 菜单选择事件
    handleSelect(key, keyPath) {
      this.$store.dispatch({
        type:'LeftSideBar',
        key:key
      })
      this.currentIndex = key;
    },
    // 当前激活的路由
    activeRoutes(key) {
      var routes = [];
      if (this.childrenMenus && this.childrenMenus.length > 0) {
        this.childrenMenus.map((item) => {
          if (key == item.parentPath || (key == "index" && "" == item.path)) {
            routes.push(item);
          }
        });
      }
      if(routes.length > 0) {
        this.$store.commit("SET_SIDEBAR_ROUTERS", routes);
      }
      return routes;
    },
	ishttp(url) {
      return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
    }
  },
};
</script>

<style lang="scss">

.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 50px;
  line-height: 50px;
  margin: 0;
  border-bottom: 3px solid transparent;
  color: #999093;
  padding: 0 5px;
  margin: 0 10px;
}
.el-menu--horizontal >.el-menu-item [class^=el-icon-]{
  font-size: 21px;
  margin-right: 0px;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid #{'var(--theme)'};
  color: #303133;
}

/* submenu item */
.el-menu--horizontal > .el-submenu .el-submenu__title {
	height: 50px !important;
	line-height: 50px !important;
}
</style>
