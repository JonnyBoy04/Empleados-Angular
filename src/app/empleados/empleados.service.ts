import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/IEmpleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor() {
    this._empleados = JSON.parse(localStorage.getItem('clientes') || '[]');
  }

  private _empleados: IEmpleado[];

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado) {
    this._empleados.push(empleado);
    localStorage.setItem('clientes', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(empleado: IEmpleado) {
    const index = this._empleados.indexOf(empleado);
    this._empleados.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(this._empleados));
  }
}
