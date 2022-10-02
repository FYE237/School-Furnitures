import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { TransactionModel } from '../modèles/Transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-liste-transaction',
  templateUrl: './liste-transaction.component.html',
  styleUrls: ['./liste-transaction.component.css']
})
export class ListeTransactionComponent implements OnInit {

  
  transactionSubscription: Subscription | undefined
  transactions: TransactionModel[]= []

  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  obs: Observable<any> ;
  dataSource: MatTableDataSource<TransactionModel> = new MatTableDataSource<TransactionModel>(this.transactions);


  constructor(private changeDetectorRef: ChangeDetectorRef,
              private transactionService: TransactionService) { 
   
    
    this.obs = this.dataSource.connect();
  }


  ngOnInit(): void {
    this.transactionSubscription = this.transactionService.transactionSubject.subscribe(
      (transaction:TransactionModel[]) => {
        this.transactions=transaction
        console.log(this.transactions)
      }
    )
    this.transactionService.emitTransaction()
    console.log(this.transactions)
this.dataSource= new MatTableDataSource<TransactionModel>(this.transactions);
    this.changeDetectorRef.detectChanges();
    if(this.paginator != undefined) this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }


  applyFilter(filterValue: string){
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}