import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
