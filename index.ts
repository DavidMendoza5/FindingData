interface BusquedaBase {
  realizarBusqueda(valor: number): number;
}

class BusquedaLineal implements BusquedaBase {
  constructor(public lista: number[]) {

  }
  realizarBusqueda(valor: number) {
    let hallado: boolean = false;
    let posicion: number = -1;
    let indice: number = 0;
 
    console.log(this.lista);
    while(!hallado && indice < this.lista.length) {
        if(this.lista[indice] === valor) {
            hallado = true;
            posicion = indice;
        } else {
            indice += 1;
        }
    }
    return posicion;
  }
}

class BusquedaBinaria implements BusquedaBase {
  constructor(public lista: number[]) {

  }
  realizarBusqueda(valor: number) {
    const arreglo_ordenado = this.ordenarDatos(this.lista);
    let primero: number = 0;
    let ultimo: number = arreglo_ordenado.length - 1;
    let posicion: number = -1;
    let encontrado: boolean = false;
    let mitad: number;
 
    console.log(arreglo_ordenado);
    while (encontrado === false && primero <= ultimo) {
        mitad = Math.floor((primero + ultimo)/2);
        if (arreglo_ordenado[mitad] == valor) {
            encontrado = true;
            posicion = mitad;
        } else if (arreglo_ordenado[mitad] > valor) {
            ultimo = mitad - 1;
        } else {
            primero = mitad + 1;
        }
    }
    return posicion;
  }
  ordenarDatos(arreglo: number[]): number[] {
    const longitud = arreglo.length;
    for (let i = 0; i < longitud; i++ ) {
      for (let j = 0; j < longitud - 1 - i; j++ ) {
        if ( arreglo[ j ] > arreglo[ j + 1 ] ) {
          [ arreglo[ j ], arreglo[ j + 1 ] ] = [ arreglo[ j + 1 ], arreglo[ j ] ];
        }
      }
    }
    return arreglo;
  }
}

class Buscador{
  private buscar: BusquedaBase;

  constructor(buscar: BusquedaBase) {
    this.buscar = buscar;
  }

  buscarValor(valor: number) {
    const posicion = this.buscar.realizarBusqueda(valor);
    if(posicion >= 0){
      console.log(`Encontrado en la posicion ${posicion}`);
    } else {
      console.log('No se encontró el valor');
    }
  }
}


const array: number[] = [10,20,13,5,2,16];
let valor: number = 10;
const busqueda: BusquedaBinaria = new BusquedaBinaria(array);
// const busqueda: BusquedaLineal = new BusquedaLineal(array);
const buscador: Buscador = new Buscador(busqueda);

buscador.buscarValor(valor);