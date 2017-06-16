import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'portland',
    component: HomeComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
