import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/api';
import *  as Const from "../app-constant";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private messageService: MessageService,private router: Router ) { }

  ngOnInit(): void {
  }
  userName:String = "";
  selectedCategory: any = null;
  

  categories: any[] = [{name: 'Customer', key: 'customer'}, {name: 'Expert', key: 'expert'}];

  onLoginClick()
  {
    try {
      if(this.userName == "" || this.userName == null)
      {
          this.showError("please Enter the user Name")
          return;
      }
     
      if(this.selectedCategory == null)
      {
          this.showError("Please select the category")
          return;
      }
      this.sendCallForLogin();
      
    } catch (error) {
      console.error("error in onLoginClick ",error);
    }
  }
  sendCallForLogin()
  {

    let body = {
      "id": this.userName,
      "type" : this.selectedCategory.key,
     
    }
    this.http.post(Const.LOGIN_API, body).subscribe((res:any) =>{
      console.log(res);
      console.log(res["status"]);
      if(res["status"] == "Failed")
      {
        this.showError(res["msg"]);
      }
      else{
        this.router.navigate(['/customer']);
      }
    }
    );
    


  }
    showSuccess(meassage:string) {
      this.messageService.clear();
      this.messageService.add({severity:'success', summary: 'Success', detail: meassage});
  }

  showInfo(meassage:string) {
    this.messageService.clear();
      this.messageService.add({severity:'info', summary: 'Info', detail: meassage});
  }

  showWarn(meassage:string) {
    this.messageService.clear();
      this.messageService.add({severity:'warn', summary: 'Warn', detail: meassage});
  }

  showError(meassage:string) {
    this.messageService.clear();
      this.messageService.add({severity:'error', summary: 'Error', detail: meassage});
  }


}


