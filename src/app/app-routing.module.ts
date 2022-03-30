import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CodegenComponent} from "./sections/codegen/codegen.component";

const routes: Routes = [
  { path: 'codegen', component: CodegenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
