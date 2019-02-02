import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'fe',
    loadChildren: './fe/fe.module#FeModule',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
