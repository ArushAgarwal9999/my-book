import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MyBookService } from '../my-book.service';
import *  as Const from "../app-constant";

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss'],
  providers: [MessageService]
})
export class ExpertComponent implements OnInit {

  constructor(private http: HttpClient,private messageService: MessageService,private router: Router, private myBookService:MyBookService,public activatedRoute: ActivatedRoute) { }
  userId :String = "";
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
  tableData1 = [];
  tableData2 = [];
  tableData3 = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('Url Id: ',id);
      this.userId = id;
     
  });
  this.getAllTask();
  this.getAllQueueTask();
  this.getAllRunningTask();
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
    try {
      this.http.get(Const.ALL_TASK+"/"+this.userId).subscribe((res:any) =>{
        this.tableData1  = res["result"][0];
  });
    } catch (error) {
        console.error(error);
    }
      
  }
  getAllRunningTask()
  {
    try {
      this.http.get(Const.EXPERT_RUNNING_TASK+"/"+this.userId).subscribe((res:any) =>{
        this.tableData2  = res["result"][0];
  });
    } catch (error) {
      console.error(error);
    }
     
  }
  getAllQueueTask()
  {
    try {
      this.http.get(Const.EXPERT_QUEUE_TASK+"/"+this.userId).subscribe((res:any) =>{
        this.tableData3  = res["result"][0];
      });
    } catch (error) {
      console.error(error);
    }
   
  }

}
