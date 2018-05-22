import Start from '@/components/pages/StartPage'
import Shops from '@/components/pages/ShopsPage'
import NewShop from '@/components/pages/NewShopPage'
import EditShop from '@/components/pages/EditShopPage'
import ViewProduct from '@/components/pages/ViewProductPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/shops',
    name: 'Shops',
    component: Shops
  },
  {
    path: '/shops/new',
    name: 'NewShop',
    component: NewShop
  },
  {
    path: '/shops/edit/:id',
    name: 'EditShop',
    component: EditShop
  },
  {
    path: '/shops/products',
    name: 'ViewProduct',
    component: ViewProduct
  }
]

export default routes
