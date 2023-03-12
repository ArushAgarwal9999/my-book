import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyBookService {

  constructor() { }
  currentLoginId:String= "";
}
