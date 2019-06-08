import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'monitor', loadChildren: '../monitor/monitor.module#MonitorPageModule' },
      { path: 'historico', loadChildren: '../historico/historico.module#HistoricoPageModule' },
      { path: 'config', loadChildren: '../config/config.module#ConfigPageModule' },
      { path: 'sobre', loadChildren: '../sobre/sobre.module#SobrePageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/monitor'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
