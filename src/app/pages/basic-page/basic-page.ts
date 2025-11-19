import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocales, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',

})
export default class BasicPage {

  LocaleService = inject(LocaleService);
  currrentLocale =signal(inject(LOCALE_ID)) //obtenemos el locale actual O Idioma actual


  nameLower = signal('Raul');
  nameUpper = signal('RAUL');
  fullName = signal('Raul zamORA');


  customDate = signal(new Date());//FECHA


  // auto actualizable cada segundo
  tickingDateEffect = effect(( onCleanup )=>{
    const interval = setInterval(()=>{
      this.customDate.set(new Date());
    }, 1000);


    // cuando cambias de pantalla el efecto se sigue
    //ejecutando, para evitar eso usamos onCleanup
     onCleanup(()=>{
    clearInterval(interval);
  })
  })

  changeLocale( locale: availableLocales){
    this.LocaleService.changeLocale(locale);
  }

}
