import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/IEmpleado';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css',
})
export class ListadoEmpleadosComponent {
  constructor(private empleadosService: EmpleadosService) {}

  get empleados() {
    return this.empleadosService.empleados;
  }

  eliminarEmpleado(empleado: IEmpleado) {
    this.empleadosService.eliminarEmpleado(empleado);
  }
}
