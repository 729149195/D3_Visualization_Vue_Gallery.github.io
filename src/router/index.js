import { createRouter, createWebHistory } from 'vue-router'
import VisView from '../views/VisView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/vis/info',
      name: 'Vis',
      component: VisView,
      children: [
       {
        path: '/vis/info',
        name: 'info',
        component: () => import('../components/viscomponents/D3-Info.vue')
      },  
      {
        path: '/vis/d3-axis',
        name: 'axis',
        component: () => import('../components/viscomponents/D3-Axis.vue')
      },
      {
        path: '/vis/d3-chord',
        name: 'chord',
        component: () => import('../components/viscomponents/D3-Chord.vue')
      },
      {
        path: '/vis/d3-color',
        name: 'color',
        component: () => import('../components/viscomponents/D3-Color.vue')
      },
      {
        path: '/vis/d3-interpolate',
        name: 'interpolate',
        component: () => import('../components/viscomponents/D3-Interpolate.vue')
      },
      {
        path: '/vis/d3-contour',
        name: 'contour',
        component: () => import('../components/viscomponents/D3-Contour.vue')
      },
      {
        path: '/vis/d3-delaunay',
        name: 'delaunay',
        component: () => import('../components/viscomponents/D3-Delaunay.vue')
      },
      {
        path: '/vis/d3-force',
        name: 'force',
        component: () => import('../components/viscomponents/D3-Force.vue')
      },
      {
        path: '/vis/d3-geo',
        name: 'geo',
        component: () => import('../components/viscomponents/D3-Geo.vue')
      },
      {
        path: '/vis/d3-hierarchy',
        name: 'hierarchy',
        component: () => import('../components/viscomponents/D3-Hierarchy.vue')
      },
      {
        path: '/vis/d3-polygon',
        name: 'polygon',
        component: () => import('../components/viscomponents/D3-Polygon.vue')
      },
      {
        path: '/vis/d3-quadtree',
        name: 'quadtree',
        component: () => import('../components/viscomponents/D3-Quadtree.vue')
      },
      {
        path: '/vis/d3-scale',
        name: 'scale',
        component: () => import('../components/viscomponents/D3-Scale.vue')
      },
      {
        path: '/vis/d3-scale-chromatic',
        name: 'scale-chromatic',
        component: () => import('../components/viscomponents/D3-Scale-Chromatic.vue')
      },
      {
        path: '/vis/d3-selection',
        name: 'selection',
        component: () => import('../components/viscomponents/D3-Selection.vue')
      },
      {
        path: '/vis/d3-shape',
        name: 'shape',
        component: () => import('../components/viscomponents/D3-Shape.vue')
      },
      {
        path: '/vis/d3-animation',
        name: 'animation',
        component: () => import('../components/viscomponents/D3-Animation.vue')
      },
      {
        path: '/vis/d3-interaction',
        name: 'interaction',
        component: () => import('../components/viscomponents/D3-Interaction.vue')
      },
      {
        path: '/vis/d3-data',
        name: 'data',
        component: () => import('../components/viscomponents/D3-Data.vue')
      },
      {
        path: '/vis/d3-dsv',
        name: 'dsv',
        component: () => import('../components/viscomponents/D3-Dsv.vue')
      },
      {
        path: '/vis/d3-fetch',
        name: 'fetch',
        component: () => import('../components/viscomponents/D3-Fetch.vue')
      },
      {
        path: '/vis/d3-format',
        name: 'format',
        component: () => import('../components/viscomponents/D3-Format.vue')
      },
      {
        path: '/vis/d3-random',
        name: 'random',
        component: () => import('../components/viscomponents/D3-Random.vue')
      },
      {
        path: '/vis/d3-time',
        name: 'time',
        component: () => import('../components/viscomponents/D3-Time.vue')
      },
      {
        path: '/vis/d3-time-format',
        name: 'time-format',
        component: () => import('../components/viscomponents/D3-Time-Format.vue')
      },
      {
        path: '/vis/d3-api',
        name: 'api',
        component: () => import('../components/viscomponents/D3-API.vue')
      },
    ]
    },
    {
      path: '/VisShow',
      name: 'VisShow',
      component: () => import('../views/VisShowView.vue')
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/AboutMe.vue')
    }
  ]
})

export default router
