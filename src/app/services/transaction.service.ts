import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TransactionModel } from '../modèles/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: TransactionModel[]
  transactionSubject = new Subject<TransactionModel[]>()
  transaction: TransactionModel | undefined

  constructor(private httpClient: HttpClient) {

    this.transactions = [
      {
        "acheteur": "simo",
        "vendeur": "dodo",
        "achat": "1234",
        "photo": "photo",
        "prix":"200",
        "date":"24/02/2022"
      }
    ]
  }

  emitTransaction() {
    this.transaction = {
      "acheteur": "simo",
      "vendeur": "dodo",
      "achat": "1234",
      "photo": "photo",
      "prix":"200",
      "date":"24/02/2022"
    }
    this.transactions.push(this.transaction)
    this.transactionSubject.next(this.transactions.slice())
    console.log(this.transactions)
  }
}
