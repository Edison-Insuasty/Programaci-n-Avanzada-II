import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  name: string = 'Edison Insuasty';
  age: number = 35;
  phone: null = null;
  otrotipo: undefined = undefined;
  cualquierdato: any;
  variostipos: string | number = 10;
  listCars:Array<any>= [1,'cadena',null];
  listCar2: Array<CarModel>= [
    {
    marca:'ford',
    modelo:'Ranger',
    year:2021
    },
    {
      marca:'chevrolet',
      modelo:'ave0',
      year:2020
    }
  ];
  
  lista1: Array<Productos>=[
  {
    codigo_interno: 1001,
    nombre: 'arroz',
    valor: 1500,
    cantiad: 12,
    tipo_de_embalaje: 'plastico',
    precio_de_costo: 1000
   },
  
   {
    codigo_interno: 1002,
    nombre: 'papa',
    valor: 2000,
    cantiad: 20,
    tipo_de_embalaje: 'talega',
    precio_de_costo: 1500
   }
  
  ];
  
  lista2: Array<Productos>=[
    {
      codigo_interno: 1003,
      nombre: 'carne',
      valor: 10000,
      cantiad: 2,
      tipo_de_embalaje: 'plastico',
      precio_de_costo: 8000
     },
    
     {
      codigo_interno: 1004,
      nombre: 'queso',
      valor: 5000,
      cantiad: 1,
      tipo_de_embalaje: 'bolsa',
      precio_de_costo: 4000
     }
    
    ];
  
    lista3: Array<Productos>=[
      {
        codigo_interno: 1005,
        nombre: 'pan',
        valor: 2000,
        cantiad: 10,
        tipo_de_embalaje: 'plastico',
        precio_de_costo: 1500
       },
      
       {
        codigo_interno: 1006,
        nombre: 'salchicha',
        valor: 6000,
        cantiad: 3,
        tipo_de_embalaje: 'plastico',
        precio_de_costo: 5000
       }
      
      ];
  
  
  
  //defincion
   car: any ={
    marca: 'chevrolet',
    modelo: 'spark',
    year: 2000
   }
  
   car2: CarModel={
    marca:'BMW',
    modelo:'Toyota',
    year:2022
   }
  
   mipc: Computadores={
    tipo:'portatil',
    tarjeta:'dedicada',
    precio:2000
    
   }
  
   
  
  
  }
   //Interfaces: es definir un contrato de operacion, que condiciona a las variables
   // a comportarse de una manera determinada
  
   interface CarModel{
    marca:string;
    modelo:string;
    year:number;
   }
  
   interface Computadores{
    tipo:string;
    tarjeta:string;
    precio:number;
   }
  
  //Definr 3 listas que dependan de la definicion de datos de una interface 
  //denominada producos en cada lista definir 2 objetos dependientes de la 
  //interface
  
  //nombre interno, nombre, valor, cantiad, tipo de embalaje, precio de costo
  
  interface Productos{
    codigo_interno: number;
    nombre: string;
    valor: number;
    cantiad: number;
    tipo_de_embalaje: string;
    precio_de_costo: number;
   }
