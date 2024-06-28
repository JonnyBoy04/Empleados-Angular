import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/IEmpleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css',
})
export class AgregarEmpleadoComponent {
  nuevoEmpleado: IEmpleado = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaIngreso: '',
    sexo: '',
  };

  constructor(private empleadoService: EmpleadosService) {}

  agregar() {
    if (this.nuevoEmpleado.nombre.trim().length === 0) {
      return;
    }

    this.empleadoService.agregarEmpleado(this.nuevoEmpleado);

    this.nuevoEmpleado = {
      nombre: '',
      correo: '',
      telefono: '',
      fechaIngreso: '',
      sexo: '',
    };
  }
}
