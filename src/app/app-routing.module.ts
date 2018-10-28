import { AuthenticationGuard } from './guard/authentication.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardResolveGuard } from './guard/dashboard-resolve.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthenticationGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard2',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        resolve: {
          dashboardInformationDTO: DashboardResolveGuard
        }
      },
      {
        path: 'build-assignment',
        loadChildren: './build-assignment/build-assignment.module#BuildAssignmentModule'
      },
      {
        path: 'lamp-management',
        loadChildren: './lamp-management/lamp-management.module#LampManagementModule'
      },
      {
        path: 'bridge-management',
        loadChildren: './bridge-management/bridge-management.module#BridgeManagementModule'
      },
      {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'team-management',
        loadChildren: './team-management/team-management.module#TeamManagementModule'
      },
      {
        path: 'team-settings',
        loadChildren: './team-settings/team-settings.module#TeamSettingsModule'
      },
      {
        path: 'color-test',
        loadChildren: './color-test/color-test.module#ColorTestModule'
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
