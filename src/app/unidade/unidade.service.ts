import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class UnidadeService {

  unidades: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {

  }

  listarUnidade() {
    this.unidades = this.db.list('/unidade');

    this.unidades.forEach(element => {
      console.log(element);
    });

    return this.unidades;

  }
  cadastroUnidade(body){
    alert("sssaas");
    this.db.list("/unidade").push(
      {
        body
      }
    ).then((t: any) => console.log('dados gravados: ' + t.key)),
      (e: any) => console.log(e.message);
  }
}
