import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/User.service';
import { IPage} from 'src/app/model/generic';
import { IUser} from 'src/app/model/user-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-UserPlistAdmin',
  templateUrl: './UserPlistAdmin.component.html',
  styleUrls: ['./UserPlistAdmin.component.css']
})
export class UserPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IUser>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUserService: UserService,
    private oActivatedRoute: ActivatedRoute,
    ) {
        const id_usertype =  this.oActivatedRoute.snapshot.params['id_usertype'];
        if(id_usertype == null){
            this.id_usertypeFilter = 0;
        }else{
            this.id_usertypeFilter = id_usertype;
        }
     
    this.getPage();
  }

  ngOnInit() {

  }

  getPage() {
    this.oUserService.getUserPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_usertypeFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IUser>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
      
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }


}
