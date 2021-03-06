<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <!-- 移动端导航适配 -->
    <aside class="sidebar-nav">
      <NavLinks />
    </aside>

    <div class="blog-container">
      <div class="blog-body">
        <div class="left">
          <!-- <slot name="blog-left" /> -->
          <template v-if="this.$slots['blog-left']">
            <slot name="blog-left" />
          </template>
          <template v-else>
            <Content slot-key="blog-left" />
          </template>
        </div>
        <div class="main">
          <slot>
            <template v-if="/\/blog\/$/.test($page.regularPath) && $pagination">
              <ul v-if="$pagination.pages" id="default-layout">
                <li v-for="page in $pagination.pages" :key="page.path">
                  <router-link class="page-link" :to="page.path">{{
                    page.title
                  }}</router-link>
                </li>
              </ul>
              <div id="pagination">
                <router-link
                  v-if="$pagination.hasPrev"
                  :to="$pagination.prevLink"
                  >Prev</router-link
                >
                <router-link
                  v-if="$pagination.hasNext"
                  :to="$pagination.nextLink"
                  >Next</router-link
                >
              </div>
            </template>
          </slot>
        </div>
        <div class="right">
          <!-- <slot name="blog-right" /> -->
          <template v-if="this.$slots['blog-right']">
            <slot name="blog-right" />
          </template>
          <template v-else>
            <Content slot-key="blog-right" />
          </template>
        </div>
      </div>

      <BlogFooter />
    </div>
  </div>
</template>

<script>
import Navbar from '@parent-theme/components/Navbar.vue';
import NavLinks from '@parent-theme/components/NavLinks.vue';
import BlogFooter from '@theme/components/BlogFooter.vue';

export default {
  name: 'BlogLayout',
  components: {
    Navbar,
    NavLinks,
    BlogFooter,
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'sidebar-open': this.isSidebarOpen,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    // console.log(this.$page.regularPath);
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
      this.$emit('toggle-sidebar', this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style>
/*
 使用postcss-import后，stylus中的最后的@import无效了，代码高亮消失。
 报下面的错，搞了好久不知道咋解决，只好再这里再引入一次。
node_modules/@vuepress/theme-default/styles/code.styl
137:8   ‼  @import must precede all other statements (besides @charset) [postcss-import]
 */
@import 'prismjs/themes/prism-tomorrow.css';
</style>

<style lang="postcss">
@import '../styles/config.pcss';

.blog-container {
  margin: 0 auto;
  padding: 4rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  .blog-body {
    flex: 1;
    display: flex;

    .main {
      flex: 1;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

.sidebar-nav {
  font-size: 16px;
  background-color: #fff;
  width: $sidebarWidth;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: $navbarHeight;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid $borderColor;
  overflow-y: auto;
  transform: translateX(-100%);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  a {
    display: inline-block;
  }
  .nav-links {
    display: inline-block;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item,
    .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1rem;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  @media (max-width: $MQMobile) {
    .sidebar-nav {
      .nav-links {
        display: block;

        .dropdown-wrapper
          .nav-dropdown
          .dropdown-item
          a.router-link-active::after {
          top: calc(1rem - 2px);
        }
      }
    }
  }
}

.theme-container {
  &.no-navbar {
    .sidebar-nav {
      top: 0;
    }
  }
}

@media (min-width: ($MQMobile + 1px)) {
  .theme-container.no-sidebar {
    .sidebar-nav {
      display: none;
    }
  }
}

/* $mobileSidebarWidth: calc($sidebarWidth * 0.82); */

/* narrow desktop / iPad */
@media (max-width: $MQNarrow) {
  .sidebar-nav {
    font-size: 15px;
    width: $mobileSidebarWidth;

    .nav-links {
      display: block;
    }
  }
}
/* wide mobile */
@media (max-width: $MQMobile) {
  .sidebar-nav {
    top: 0;
    padding-top: $navbarHeight;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }

  .blog-container {
    padding-top: 4rem;
  }

  .theme-container {
    &.sidebar-open {
      .sidebar-nav {
        /* display: block; */
        transform: translateX(0);
      }
    }

    &.no-navbar {
      .sidebar-nav {
        padding-top: 0;
      }
    }
  }
}
</style>
