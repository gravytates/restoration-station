import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

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
  },
  {
    path: 'seattle',
    component: HomeComponent
  },
  {
    path: 'boise',
    component: HomeComponent
  },
  {
    path: 'san-francisco',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
