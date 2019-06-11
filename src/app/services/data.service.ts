import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public monitorHistory: any = [];

  constructor() {
    this.monitorHistory = [
      {
        corrente: 'Corrente: ', valorCorrente: 2,
        tensao: 'Tensão:', valorTensao: '220v',
        tempoAR: 'Tempo de A.A.:', valorAA: '4h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 5,
        tensao: 'Tensão:', valorTensao: '127v',
        tempoAR: 'Tempo de A.A.:', valorAA: '2h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 10,
        tensao: 'Tensão:', valorTensao: '220v',
        tempoAR: 'Tempo de A.A.:', valorAA: '1h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 12,
        tensao: 'Tensão:', valorTensao: '127v',
        tempoAR: 'Tempo de A.A.:', valorAA: '5h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 10,
        tensao: 'Tensão:', valorTensao: '220v',
        tempoAR: 'Tempo de A.A.:', valorAA: '1h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 12,
        tensao: 'Tensão:', valorTensao: '127v',
        tempoAR: 'Tempo de A.A.:', valorAA: '12h02m21s',
      }
    ]
  }

  filterItems(searchTerm) {
    return this.monitorHistory.filter(item => {
      return item.valorAA.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}