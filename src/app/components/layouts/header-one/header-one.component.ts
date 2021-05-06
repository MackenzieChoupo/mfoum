import { Component, OnInit } from '@angular/core';
//import { BuiltInOptions, DialogService } from "ngx-bootstrap-modal";

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showConfirm() {
    
    /*this.dialogService.confirm('提醒', '确认要删除吗？', <BuiltInOptions>{
       
    }).then((result: boolean) => {
        
    });*/
}

}
