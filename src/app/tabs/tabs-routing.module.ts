import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'startpage',
        loadChildren: () => import('../startpage/startpage.module').then( m => m.StartpagePageModule)
      },
      {
        path: 'add-structure',
        loadChildren: () => import('../add-structure/add-structure.module').then( m => m.AddStructurePageModule)
      },
      {
        path: 'single-sammlung',
        loadChildren: () => import('../single-sammlung/single-sammlung.module').then( m => m.SingleSammlungPageModule)
      },
      {
        path: 'additem',
        loadChildren: () => import('../additem/additem.module').then( m => m.AdditemPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/startpage',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/startpage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
