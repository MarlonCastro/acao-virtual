import { Component, OnInit } from '@angular/core';
import { UnidadeService } from './unidade.service';
import { FormsModule, NgForm} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {

  unidades: any[];
  constructor(private unidadesService: UnidadeService, private db: AngularFireDatabase) {

    this.unidadesService.listarUnidade().subscribe(data =>{
      this.unidades = data;
   });
  }

  ngOnInit() {

  
  }

  form_submit(f: NgForm) {
   /* let body = {
      "nomeDaUnidade": f.controls.nomeDaUnidade,
      "nomeDoClube" : f.controls.nomeDoClube, 
      "regional" : f.controls.regional, 
      "tipo" :  f.controls.regional,
      "membros" : ""
    }/*/
    alert(f.controls.nomeDaUnidade.value);
    this.db.list("/unidade").push(
     
      {
        "aprovada": false,
        "nomeDaUnidade": f.controls.nomeDaUnidade.value,
        "nomeDoClube" : f.controls.nomeDoClube.value, 
        "regional" : f.controls.regional.value, 
        "tipo" :  f.controls.tipo.value,
        "genero": "M",
        "membros" : {"conselheira": "Ronaldinho Gaucho"}
      }
    ).then((t: any) => console.log('dados gravados: ' + t.key)),
      (e: any) => console.log(e.message);

   // this.unidadesService.cadastroUnidade(body);

   /* f.controls.nome.setValue('');
    f.controls.sobrenome.setValue('');*/
  }

}
