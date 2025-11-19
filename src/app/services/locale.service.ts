
import { Injectable, signal } from '@angular/core';



export type availableLocales = 'es' | 'fr' | 'en';


@Injectable({providedIn: 'root'})
export class LocaleService {

  private currentLocale = signal<availableLocales>('fr');

constructor(){
   this.currentLocale.set(
    // obtenemos el locale del localStorage o por defecto español
      (localStorage.getItem('locale') as availableLocales ?? 'es')

   )
}

//get es para leer el valor de un signal sin exponer el signal completo
  get getLocale(){
    return this.currentLocale();
  }


  changeLocale(newLocale: availableLocales){
    localStorage.setItem('locale', newLocale);
    this.currentLocale.set(newLocale);

    window.location.reload(); //recargamos la pagina para que tome el nuevo locale

  }


}
