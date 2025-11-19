import {  Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';


const cliente1={
  name:'Raul',
  gender: 'male',
  age:21,
  address: 'mexico'
}

const cliente2 ={
  name:'Maria',
  gender: 'female',
  age:25,
  address: 'spain'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe,
    UpperCasePipe, KeyValuePipe, TitleCasePipe,
  AsyncPipe
  ],
  templateUrl: './uncommon-page.html',

})
export default class UncommonPage {

   //i118nSelect
  client = signal(cliente1)

  invitationMap={
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient(){
    if(this.client() === cliente1){
      this.client.set(cliente2)
     return
    }
    this.client.set(cliente1)
  }



  //i118nPlural

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Axel',
    'Daniel',
    'Raul'

  ])

  deleteClient(){
      this.clients.update(prev => prev.slice(1)
      )
  }


 // keyValue Pipe

 profile ={
  name: 'Raul',
  age: 21,
  address: 'Mexico',

 }


 //async pipe
 //necesitamos un observable o una promesa

 promiseValue: Promise<string> = new Promise((resolve, reject)=>{

  setTimeout(()=>{
      resolve('Tenemos data de promesa')
      console.log('Tenemos data de promesa')
  }, 3500)
 })




 //rxjs - interval - observable
 myobservable =  interval(2000).pipe(
  tap(value => console.log('tap', value)))


}
