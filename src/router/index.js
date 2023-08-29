import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/by-name/:name?',
          name: 'byname',
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: 'Byletter',
          component: MealsByLetter
        },
        {
          path: '/by-ingredients/:ingredient?',
          name: 'byingredients',
          component: MealsByIngredients
        },
        {
          path: '/meal/:id?',
          name: 'mealdetails',
          component: MealDetails
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout,
      children: [
        
      ]
    }
    
  ]
})

export default router
