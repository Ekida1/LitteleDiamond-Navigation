import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import buildingTools from '@/pages/home/components/children/Buildingtools'
import useTools from '@/pages/home/components/children/UseTools'
import hotFramework from '@/pages/home/components/children/HotFramework'
import techCommunity from '@/pages/home/components/children/TechCommunity'
import learningPlatform from '@/pages/home/components/children/LearningPlatform'
import goodBlog from '@/pages/home/components/children/GoodBlog'
import knownDesign from '@/pages/home/components/children/KnownDesign'
import techTheme from '@/pages/techtheme/TechTheme.vue'
import goodPick from '@/pages/goodpick/GoodPick.vue'
import myPlug from '@/pages/myplug/MyPlug.vue'
import rank from '@/pages/rank/Rank.vue'
import message from '@/pages/message/Message.vue'
import aboutus from '@/pages/aboutus/AboutUs.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index/buildingtools',
    },
    {
      path: '/index',
      redirect: '/index/buildingtools',
      name: 'Home',
      component: Home,
      children: [{
          path: 'buildingtools',
          component: buildingTools,
        },
        {
          path: 'usetools',
          component: useTools,
        },
        {
          path: 'hotframework',
          component: hotFramework,
        },
        {
          path: 'techcommunity',
          component: techCommunity,
        },
        {
          path: 'learningplatform',
          component: learningPlatform,
        },
        {
          path: 'goodblog',
          component: goodBlog,
        },
        {
          path: 'knowndesign',
          component: knownDesign,
        },
      ]
    },
    // {
    //   path: '/techtheme',
    //   name: 'techTheme',
    //   component: techTheme,
    // },
    {
      path: '/goodpick',
      name: 'goodPick',
      component: goodPick,
    },
    {
      path: '/myplug',
      name: 'myPlug',
      component: myPlug,
    },
    // {
    //   path: '/rank',
    //   name: 'rank',
    //   component: rank,
    // },
    {
      path: '/message',
      name: 'message',
      component: message,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus,
    },
  ]
})
