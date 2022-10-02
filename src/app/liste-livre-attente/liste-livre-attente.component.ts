import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { LivreModel } from '../modèles/Livre';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-liste-livre-attente',
  templateUrl: './liste-livre-attente.component.html',
  styleUrls: ['./liste-livre-attente.component.css']
})
export class ListeLivreAttenteComponent implements OnInit {

   
  livreSubscription: Subscription | undefined
  livresAttente: LivreModel[]= []
  name="attente"
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  obs: Observable<any> ;
  dataSource: MatTableDataSource<LivreModel> = new MatTableDataSource<LivreModel>(this.livresAttente);


  constructor(private changeDetectorRef: ChangeDetectorRef,
              private livreService: LivreService) { 
   
    
    this.obs = this.dataSource.connect();
  }


  async ngOnInit(): Promise<void> {
    // this.userService.isAuth=true;
    this.livreSubscription = this.livreService.LivreAttenteSubject.subscribe(
      (livresAttente:LivreModel[]) => {
        this.livresAttente=livresAttente
        //console.log(this.livresAttente)
      }
    )
   await this.livreService.emitLivresAttente()
    // setTimeout(() => {
    //console.log(this.livresAttente)
    this.dataSource= new MatTableDataSource<LivreModel>(this.livresAttente);
    this.changeDetectorRef.detectChanges();
    if(this.paginator != undefined) this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  // },5000);
  }


  applyFilter(filterValue: string){
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
