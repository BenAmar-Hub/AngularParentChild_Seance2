import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class EventDriverServiceService {
// pour pouvoir creer la communication entre les objets,
// il faut creer un subject et dedans on va dire qu'on publie des evenements
sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
// maintenant on cree un observable sur ce subject
sourceEventSubjectObservable=this.sourceEventSubject.asObservable();
// on cree une methode pour faire publier un event
publishEvent(event:ActionEvent){
  this.sourceEventSubject.next(event);
}
/*c.a.d que à chaque fois que j'appelle la fonction
  publishEvent je vais publier un event dans le subject
  et après tous les composants qui font subscribe à sourceEventSubjectObservable,
  ils vont recevoir cet evenement
  */
constructor() { }
}
