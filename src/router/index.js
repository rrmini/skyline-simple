import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // ?

import About from '../pages/about'
import Authors from '../pages/authors.vue'
import AuthorsDetail from '../pages/authors_detail.vue'
import BlogDetail from '../pages/blog_detail.vue'
import ComingSoon from '../pages/coming_soon.vue'
import Contact from '../pages/contact.vue'
import Error from '../pages/error.vue'
import LayoutV01 from '@/pages/layout_v01.vue'
import LayoutV02 from '@/pages/layout_v02.vue'
import LayoutV03 from '@/pages/layout_v03.vue'
import LayoutV04 from '@/pages/layout_v04.vue'
import LayoutV05 from '@/pages/layout_v05.vue'
import LifeStyle from '@/pages/lifestyle.vue'
import Music from '../pages/music.vue'
import SingleColumn from '../pages/single_column.vue'
import SingleColumnSidebar from '../pages/single_column_sidebar.vue'
import ThreeColumn from '../pages/three_column.vue'
import ThreeColumnMasonry from '../pages/three_column_mansory.vue'
import TwoColumnMasonry from '../pages/two_column_masonry_sidebar.vue'
import TwoColumnSidebar from '../pages/two_column_sidebar.vue'
import Video from '../pages/video.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/authorsDetail',
      name: 'AuthorsDetail',
      component: AuthorsDetail
    },
    {
      path: '/blogDetail',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/comingSoon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/layout_v01',
      name: 'LayoutV01',
      component: LayoutV01
    },
    {
      path: '/',
      name: 'Home',
      component: LayoutV01
    },
    {
      path: '/layout_v02',
      name: 'LayoutV02',
      component: LayoutV02
    },
    {
      path: '/layout_v03',
      name: 'LayoutV03',
      component: LayoutV03
    },
    {
      path: '/layout_v04',
      name: 'LayoutV04',
      component: LayoutV04
    },
    {
      path: '/layout_v05',
      name: 'LayoutV05',
      component: LayoutV05
    },
    {
      path: '/lifeStyle',
      name: 'LifeStyle',
      component: LifeStyle
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/singleColumn',
      name: 'SingleColumn',
      component: SingleColumn
    },
    {
      path: '/singleColumnSidebar',
      name: 'SingleColumnSidebar',
      component: SingleColumnSidebar
    },
    {
      path: '/threeColumn',
      name: 'ThreeColumn',
      component: ThreeColumn
    },
    {
      path: '/threeColumnMasonry',
      name: 'ThreeColumnMasonry',
      component: ThreeColumnMasonry
    },
    {
      path: '/twoColumnMasonry',
      name: 'TwoColumnMasonry',
      component: TwoColumnMasonry
    },
    {
      path: '/twoColumnSidebar',
      name: 'TwoColumnSidebar',
      component: TwoColumnSidebar
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
