import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [AgregarEmpleadoComponent, ListadoEmpleadosComponent],
  imports: [CommonModule, FormsModule],
  exports: [AgregarEmpleadoComponent, ListadoEmpleadosComponent],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
