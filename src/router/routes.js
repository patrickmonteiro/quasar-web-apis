
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/battery', name: 'battery', component: () => import('pages/Battery.vue') },
      { path: '/bluetooth', name: 'bluetooth', component: () => import('pages/Bluetooth.vue') },
      { path: '/camera', name: 'camera', component: () => import('pages/Camera.vue') },
      { path: '/geolocation', name: 'geolocation', component: () => import('pages/Geolocation.vue') },
      { path: '/vibration', name: 'vibration', component: () => import('pages/Vibration.vue') },
      { path: '/notification', name: 'notification', component: () => import('pages/Notification.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
