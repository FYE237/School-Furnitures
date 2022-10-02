import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  @Input() acheteur: string|undefined
  @Input() vendeur:string|undefined 
  @Input() prix:string|undefined
  @Input() date:string|undefined
  ngOnInit(): void {
  }

}
