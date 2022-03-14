import { UserManagementResolveGuard } from './guard/user-management-resolve.guard';
import { LampManagementResolveGuard } from './guard/lamp-management-resolve.guard';
import { BuildAssignmentResolveGuard } from './guard/build-assignment-resolve.guard';
import { AuthenticationGuard } from './guard/authentication.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './login/login.component';
import { DashboardResolveGuard } from './guard/dashboard-resolve.guard';
import { BridgeManagementResolveGuard } from './guard/bridge-management-resolve.guard';
import { TeamManagementResolveGuard } from './guard/team-management-resolve.guard';
import { TeamSettingsResolveGuard } from './guard/team-settings-resolve.guard';

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
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthenticationGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        resolve: {
          dashboardInformationDTO: DashboardResolveGuard
        }
      },
      {
        path: 'build-assignment',
        loadChildren: () => import('./build-assignment/build-assignment.module').then(m => m.BuildAssignmentModule),
        resolve: {
          teamLampsDTO: BuildAssignmentResolveGuard
        }
      },
      {
        path: 'lamp-management',
        loadChildren: () => import('./lamp-management/lamp-management.module').then(m => m.LampManagementModule),
        resolve: {
          teamLampsDTO: LampManagementResolveGuard
        }
      },
      {
        path: 'bridge-management',
        loadChildren: () => import('./bridge-management/bridge-management.module').then(m => m.BridgeManagementModule),
        resolve: {
          pagingService: BridgeManagementResolveGuard
        }
      },
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        resolve: {
          pagingService: UserManagementResolveGuard
        }
      },
      {
        path: 'team-management',
        loadChildren: () => import('./team-management/team-management.module').then(m => m.TeamManagementModule),
        resolve: {
          pagingService: TeamManagementResolveGuard
        }
      },
      {
        path: 'team-settings',
        loadChildren: () => import('./team-settings/team-settings.module').then(m => m.TeamSettingsModule),
        resolve: {
          teamUsersDTO: TeamSettingsResolveGuard
        }
      },
      {
        path: 'color-test',
        loadChildren: () => import('./color-test/color-test.module').then(m => m.ColorTestModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
