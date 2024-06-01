<script lang="ts" setup>
import { ref } from 'vue'

interface IMenuItem {
  title: string,
  icon?: string,
  active?: boolean,
}

interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

// 定义菜单数据
const menus = ref<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fab fa-bimobject',
    active: true,
    children: [
      { title: '404页面', active: true },
      { title: '403页面' },
      { title: '500页面' },
    ]
  },
  {
    title: '编辑器',
    icon: 'fab fa-app-store-ios',
    children: [
      { title: 'Markdown编辑器' },
      { title: '富文本编辑器' },
    ]
  },
])

const resetMenus = () => {
  menus.value.forEach(pmenu => {
    pmenu.active = false
    pmenu.children?.forEach(cmenu => cmenu.active = false)
  })
}

// 菜单的处理事件
const handle = (pmenu: IMenu, cmenu?: IMenuItem) => {
  resetMenus()
  pmenu.active = true
}
</script>

<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <!--  顶部logo/标题 -->
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">晚八点直播</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(menu, index) of menus " :key="index">
        <dt @click="handle(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="text-md">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down"></i>
          </section>
        </dt>
        <dd v-show="menu.active" :class="{ active: cmenu.active }" v-for="(cmenu, key) of menu.children" :key="key">
          {{ cmenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
.admin {
  .menu {
    .left-container {
      dl {
        @apply text-gray-300 text-sm;

        dt {
          @apply text-sm mt-6 flex justify-between items-center cursor-pointer;

          section {
            @apply flex items-center;

            i {
              @apply mr-2 text-[16px];
            }
          }
        }

        dd {
          @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500;

          &.active {
            @apply bg-violet-700
          }
        }
      }
    }
  }

}
</style>