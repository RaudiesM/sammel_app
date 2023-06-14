import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
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
