import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import *  as Const from "../app-constant";
import { MyBookService } from '../my-book.service';
@Component({
  selector: 'app-cutomer',
  templateUrl: './cutomer.component.html',
  styleUrls: ['./cutomer.component.scss'],
  providers: [MessageService]
})
export class CutomerComponent implements OnInit {

  constructor(private http: HttpClient,private messageService: MessageService,private router: Router, private myBookService:MyBookService,public activatedRoute: ActivatedRoute) { }
  cols = [
    { field: 'expId', header: 'Expert Id' },
    { field: 'cusId', header: 'Customer ID' },
    { field: 'taskId', header: 'Task ID' },
    { field: 'subTaskId', header: 'Sub-Task ID' },
    { field: 'taskName', header: 'Task Name' },
    { field: 'status', header: 'Status' },
    { field: 'taskStartTime', header: 'Task Start Time' },
    { field: 'taskEndTime', header: 'Task End Time' },
    { field: 'expStartTime', header: 'Expert Start Time' },
    { field: 'expEndTime', header: 'Expert End Time' },
    
   
];
tableData = [];
userId = "";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('Url Id: ',id);
      this.userId = id;
      this.getAllTask();
  });
    
  }
  isDateCol(col:String):boolean{
    if(col == 'taskStartTime' || col == 'taskEndTime' || col == 'expStartTime' || col == 'expEndTime')
    {
      return true;
    }
    return false;
  }
  getAllTask()
  {
      this.http.get(Const.GET_CUSTOMER_TASK+"/"+this.userId).subscribe((res:any) =>{
            this.tableData  = res["result"][0];
      });
  }
  createTask():void{
    this.http.post(Const.CREATE_TASK,{"cusId":this.userId}).subscribe((res:any)=>{
      if(res["status"] == "Successfully")
      {
        this.showSuccess(res["msg"]);
        this.getAllTask();
      }
      else{
        this.showError(res["msg"]);
      }

    });
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
