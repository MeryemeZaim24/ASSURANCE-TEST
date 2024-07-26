import { Component, OnInit } from '@angular/core';
import{AssureService} from '../../../app/folderService/assure.service'
import {Assure} from '../../../app/class/assure'
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-assure',
  templateUrl: './assure.component.html',
  styleUrls: ['./assure.component.css']
})
export class AssureComponent implements  OnInit{
  assures: Assure[] = [];
  newAssure: Assure = new Assure();
  editAssure: Assure | null = null; 

  constructor(private assureService: AssureService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAssures();
  }

  getAllAssures(): void {
    this.assureService.getAllAssures().subscribe(data => {
      this.assures = data;
    });
  }

  // createAssure(): void {
  //   this.assureService.createAssure(this.newAssure).subscribe(data => {
  //     this.getAllAssures();
  //     this.newAssure = new Assure(); // Réinitialiser le formulaire
  //   });
  // }

  createAssure(): void {
    if (this.editAssure) {
      // Si editAssure n'est pas null, cela signifie que nous mettons à jour un assuré existant
      this.assureService.updateAssure(this.editAssure.id!, this.newAssure).subscribe(data => {
        this.getAllAssures();
        this.newAssure = new Assure(); // Réinitialiser le formulaire
        this.editAssure = null; // Réinitialiser l'édition
      });
    } else {
      // Sinon, nous créons un nouvel assuré
      this.assureService.createAssure(this.newAssure).subscribe(data => {
        this.getAllAssures();
        this.newAssure = new Assure(); // Réinitialiser le formulaire
      });
    }
  }

  deleteAssure(id: number): void {
    this.assureService.deleteAssure(id).subscribe(() => {
      this.getAllAssures();
    });
  }

  viewContrats(assureId: number): void {
    // this.router.navigate(['assure/contrat', assureId]); 
    this.router.navigate(['assure/contrat', assureId]);// Redirige vers ContratComponent avec l'ID de l'assuré
  }

  editAssureDetails(assure: Assure): void {
    this.newAssure = { ...assure }; // Copier les détails de l'assuré sélectionné dans newAssure
    this.editAssure = assure;
  }

}
