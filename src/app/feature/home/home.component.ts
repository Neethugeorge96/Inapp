import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonApiService } from '../../service/common-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sectionList: any = [];
  articleList: any = [];
  filterArticlesList: any = [];
  readLaterList: any = [];

  constructor(public common: CommonApiService,
    public Router: Router,
    private toaster: ToastrService,
    private uiloader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.getSectionList();
    this.getArticleList();
  }
  getSectionList() {
    this.uiloader.start();
    this.common.getSections().subscribe((res: any) => {
      this.uiloader.stop();
      this.sectionList = res.results;
      console.log(this.sectionList);

    }
    )
  }

  getArticleList() {
    this.uiloader.start();
    this.common.getarticleList().subscribe((res: any) => {
      this.uiloader.stop();
      this.filterArticlesList = this.articleList = res.results;
      console.log("article", this.articleList);

    })
  }

  filterArticles(data: any) {
    this.filterArticlesList = this.articleList.filter((x: any) => x.section == data)
  }

  gotourl(url: any) {
    console.log('urldata', url);
    window.open(url, "_blank");
  }

  readLater(item: any) {
    this.readLaterList.push(item)
    console.log('readlater', this.readLaterList);
    this.common.setData(this.readLaterList);
    this.toaster.success('Added to Read Later');

  }
}
