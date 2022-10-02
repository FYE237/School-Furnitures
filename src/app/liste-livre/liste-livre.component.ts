import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { LivreModel } from '../modèles/Livre';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LivreService } from '../services/livre.service';
import { UserService } from '../services/user.service';
import { LivreStockModel } from '../modèles/LivreStock';
//import {MatSort} from '@angular/material'

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit {

  
  livreSubscription: Subscription | undefined
  livresStock: LivreStockModel[]= []
  name="stock"
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  obs: Observable<any> ;
  dataSource: MatTableDataSource<LivreStockModel> = new MatTableDataSource<LivreStockModel>(this.livresStock);


  constructor(private changeDetectorRef: ChangeDetectorRef,
              private livreService: LivreService,
              private userService: UserService) { 
   
    
    this.obs = this.dataSource.connect();
  }


  async ngOnInit(): Promise<void> {
    this.userService.isAuth=true;
    this.livreSubscription = this.livreService.LivreStockSubject.subscribe(
      (livresStock:LivreStockModel[]) => {
        this.livresStock=livresStock
       // console.log(this.livresStock)
      }
    )
  await  this.livreService.emitLivresStock()
   // console.log(this.livresStock)
this.dataSource= new MatTableDataSource<LivreStockModel>(this.livresStock);
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

