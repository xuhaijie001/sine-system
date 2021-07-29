<template>
  <div>
    <!-- <template v-if="hasOneShowingChild(item)">
      <app-link :to="item.path">
        <el-menu-item :index="item.path" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="item.icon" :title="item.name" />
        </el-menu-item>
      </app-link>
    </template> -->

    <el-submenu  ref="subMenu" :index="item.id" popper-append-to-body>
      <template slot="title">
          <i :class="item.iconkey"></i>
          <span>{{item.text}}</span>
      </template>
      <el-menu-item  
        v-for="child in item.items"
        :key="child.id"
        :is-nest="true"
        :index="child.href"
        class="nest-menu"
      >
        <span>{{child.text}}</span>
       </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(item) {
      if (item.menu) {
        return false;
      }else{
        return true;
      }
    },
    resolvePath(routePath) {
      // if (isExternal(routePath)) {
      //   return routePath
      // }
      // if (isExternal(this.basePath)) {
      //   return this.basePath
      // }
      return path.resolve(this.basePath, routePath)
    }
  },
}
</script>
