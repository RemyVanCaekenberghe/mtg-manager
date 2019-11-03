import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  protected handleError(error: Response): Observable<any> {
    console.error(error);

    return throwError(error || 'server error');
  }
}
