import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';
import { Carta } from 'src/app/models/carta';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-buscar-carta',
  templateUrl: './buscar-carta.component.html',
  styleUrls: ['./buscar-carta.component.css']
})
export class BuscarCartaComponent implements OnInit {


  buscarCartaForm: FormGroup;
  carta: Carta;

  erro: string;

  error_messages = {
    'nome': [
      { type: 'required', message: 'Informe o nome da cartar.' },
    ],
  }


  constructor(private cs: CartasService, public formBuilder: FormBuilder,) {
    this.carta = new Carta();

    this.buscarCartaForm = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  ngOnInit() {
  }

  get_carta(){
    this.cs.get_cart(this.carta.name).subscribe(
      res =>{
        if (res) {
          this.carta = res;
          console.log(res);
        } else {
          console.log('erro')
        };
      }
    );
  }

}
