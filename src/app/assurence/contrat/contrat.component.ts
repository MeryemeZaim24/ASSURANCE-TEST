import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/class/contrat';
import { ContratService } from 'src/app/folderService/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  contrats: Contrat[] = [];
  newContrat: Contrat = new Contrat();
  assureId: number | null = null;
  isEditing: boolean = false;
  editedContratId: number | null = null;
  constructor(
    private contratService: ContratService,
    private route: ActivatedRoute // Injectez ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.assureId = +params.get('id')!; // Récupérez l'ID depuis les paramètres
      this.loadContrats(); // Chargez les contrats après avoir récupéré l'ID
    });
  }

  loadContrats() {
    if (this.assureId) {
      this.contratService.getContratsByAssure(this.assureId).subscribe(
        (data: Contrat[]) => {
          this.contrats = data;
        },
        error => {
          console.error('Erreur lors de la récupération des contrats', error);
        }
      );
    }
  }

  createContrat() {
    if (this.assureId) {
      // this.newContrat.AssureId = this.assureId; // Associez le contrat à l'assuré
      this.newContrat.assureId = this.assureId; // Associez le contrat à l'assuré
      this.contratService.createContrat(this.newContrat).subscribe(
        (data: Contrat) => {
          this.contrats.push(data);
          this.newContrat = new Contrat(); // Réinitialiser le formulaire
        },
        error => {
          console.error('Erreur lors de la création du contrat', error);
        }
      );
    }
  }

  deleteContrat(id: number) {
    this.contratService.deleteContrat(id).subscribe(
      () => {
        this.contrats = this.contrats.filter(contrat => contrat.id !== id);
      },
      error => {
        console.error('Erreur lors de la suppression du contrat', error);
      }
    );
  }

  startEditContrat(contrat: Contrat) {
    this.isEditing = true;
    this.editedContratId = contrat.id;
    this.newContrat = { ...contrat };
  }

  updateContrat() {
    if (this.editedContratId) {
      this.contratService.updateContrat(this.editedContratId, this.newContrat).subscribe(
        (data: Contrat) => {
          const index = this.contrats.findIndex(c => c.id === this.editedContratId);
          if (index !== -1) {
            this.contrats[index] = data;
          }
          this.newContrat = new Contrat();
          this.isEditing = false;
          this.editedContratId = null;
        },
        error => {
          console.error('Erreur lors de la mise à jour du contrat', error);
        }
      );
    }
  }}
