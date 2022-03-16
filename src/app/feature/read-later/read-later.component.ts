import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonApiService } from 'src/app/service/common-api.service';

@Component({
  selector: 'app-read-later',
  templateUrl: './read-later.component.html',
  styleUrls: ['./read-later.component.css']
})
export class ReadLaterComponent implements OnInit {
  readLaterList :any=[];

  constructor(public common :CommonApiService ,
    private toaster :ToastrService,)
  { }

  ngOnInit(): void {
this.getReadLaterdata();
  }

  getReadLaterdata(){
    this.common.getData().subscribe((res:any)=>{
      this.readLaterList = res;
      console.log("readlater",this.readLaterList);

    })
  }

  gotourl(url:any){
    console.log('urldata',url);
    window.open(url, "_blank");

      }

      remove(item:any){
        console.log("before",this.readLaterList);

        this.readLaterList.forEach((x:any,index:any)=>{
          if(x==item) this.readLaterList.splice(index,1);
          console.log("after",this.readLaterList);

       });
       this.toaster.warning('Removed from Read Later');

      }

}
