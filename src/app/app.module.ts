import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPlistAdminComponent } from './user/UserPlistAdmin/UserPlistAdmin.component';
import { HomeComponent } from './home/home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UserService } from './service/User.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchUnroutedComponent } from './shared/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './shared/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './shared/pagination-unrouted/pagination-unrouted.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationService } from './service/pagination.service';
import { UserViewAdminComponent } from './user/UserViewAdmin/user-view-admin/user-view-admin.component';
import { UserNewAdminComponent } from './user/UserNewAdmin/user-new-admin/user-new-admin.component';
import { UserEditAdminComponent } from './user/UserEditAdmin/user-edit-admin/user-edit-admin.component';
import { UserDetailAdminUnroutedComponent } from './user/unrouted/admin/developer-detail-admin-unrouted/user-detail-admin-unrouted.component';
import { UserRemoveAdminComponent } from './user/UserRemoveAdmin/user-remove-admin/user-remove-admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsertypeFinderAdminUnroutedComponent } from './usertype/unrouted/tipousuario-finder-admin-unrouted/usertype-finder-admin-unrouted.component';
import { GenerateComponent } from './shared/generate/generate.component';
import { UsertypePlistAdminComponent } from './usertype/usertype-plist-admin/usertype-plist-admin.component';
import { CryptoService } from './service/crypto.service';


@NgModule({
  declarations: [
    AppComponent,
    UserPlistAdminComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UserViewAdminComponent,
    UserNewAdminComponent,
    UserEditAdminComponent,
    UserRemoveAdminComponent,
    UserDetailAdminUnroutedComponent,
    UsertypeFinderAdminUnroutedComponent,
    GenerateComponent,
    UsertypePlistAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    CryptoService,
    PaginationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
