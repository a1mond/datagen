import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodegenComponent } from "./sections/codegen/codegen.component";
import { HomeComponent } from "./sections/home/home.component";

const routes: Routes = [
  { path: 'codegen', component: CodegenComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
