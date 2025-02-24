import { Routes } from '@angular/router';
import { ComponentsComponent } from '../../components/components.component'

export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },

    // Charts
    {
      path: 'changelog',
      children: [
          {
              path: '',
              redirectTo: '/changelog/changelog',
              pathMatch: 'full'
          },
          {
              path: '',
              loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangelogModule)
            },
        ]
    },
    {path:'assure',
        children:[
        {
            path:'',
            redirectTo:'/assure/assure',
            pathMatch:'full'
        },
        
        {
            path:'',
            loadChildren:() => import('../../assurence/assure.module').then(m => m.AssureModule)
        },
        
        ]},
        // {path:'contrat',
        //     children:[
        //     {
        //         path:'',
        //         redirectTo:'/contrat/contrat',
        //         pathMatch:'full'
        //     },
            
        //     {
        //         path:'',
        //         loadChildren:() => import('../../assurence/assure.module').then(m => m.AssureModule)
        //     },
            
        //     ]},
    

    //Apps
    {
        path: 'apps',
        data: {
            title: 'Apps'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../apps/apps.module').then(m => m.AppsModule)
            },
        ]
    },

    //Component
    {
        path: 'demo',
        component: ComponentsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
            }
        ],
        data: {
            title: 'Components '
        }
    },

    // Charts
    {
      path: 'features',
      data: {
          title: 'features'
      },
      children: [
          {
              path: '',
              redirectTo: '/dashboard',
              pathMatch: 'full'
          },
          {
              path: '',
              loadChildren: () => import('../../features/features.module').then(m => m.FeaturesModule)
            },
        ]
    },

    //Pages
    {
        path: 'pages',
        data: {
            title: 'Pages '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
            },
        ]
    }
];
