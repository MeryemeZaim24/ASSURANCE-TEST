export class Contrat {

    id!: number;
    police: string;
    dateSignature: Date;
    dateExpiration: Date;
    // AssureId: number;
    assureId: number;
  
    constructor() {
      this.police = '';
      this.dateSignature = new Date();
      this.dateExpiration = new Date();
      // this.AssureId = 0;
      this.assureId = 0;
    }
}
