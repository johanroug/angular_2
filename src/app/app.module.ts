import { HttpModule } 								from '@angular/http';
import { BrowserModule } 							from '@angular/platform-browser';
import { LOCALE_ID, NgModule } 				from '@angular/core';
import { routing } 										from './app.routing';
import { FormsModule } 								from '@angular/forms';

import { BsDropdownModule } 					from 'ngx-bootstrap/dropdown';
import { NgxPaginationModule } 				from 'ngx-pagination';
import { BsDatepickerModule } 				from 'ngx-bootstrap/datepicker';
// import { TabsModule } 								from 'ngx-bootstrap/tabs';
// import { ChartsModule } 							from 'ng2-charts/ng2-charts';

import { AppComponent } 							from './app.component';
// import { AppSidebarMinimizer } 				from './components/ui/app-sidebar-minimizer/app-sidebar-minimizer.component';
// import { AppSidebarHeader } 					from './components/ui/app-sidebar-header/app-sidebar-header.component';
// import { AppSidebarForm } 						from './components/ui/app-sidebar-form/app-sidebar-form.component';
// import { AppSidebarFooter } 					from './components/ui/app-sidebar-footer/app-sidebar-footer.component';
import { AppSidebar } 								from './components/ui/app-sidebar/app-sidebar.component';
import { AppHeader } 									from './components/ui/app-header/app-header.component';
import { AppFooter } 									from './components/ui/app-footer/app-footer.component';
// import { AppBreadcrumbs } 						from './components/ui/app-breadcrumbs/app-breadcrumbs.component';
import { AppAside } 									from './components/ui/app-aside/app-aside.component';
import {
	BrandMinimizeDirective,
	MobileSidebarToggleDirective,
	SidebarMinimizeDirective,
	SidebarOffCanvasCloseDirective,
	SidebarToggleDirective } 						from './directives/sidebar.directive';
import {
	NavDropdownDirective,
	NavDropdownToggleDirective } 				from './directives/nav-dropdown.directive';
import { AsideToggleDirective } 			from './directives/aside.directive';


import { InvoicesComponent } 					from './components/application/invoices/invoices.component';
import { InvoiceDetailComponent } 		from './components/application/invoices/invoice-detail/invoice-detail.component';
import { ErrorComponent } 						from 'app/components/application/error/error.component';

import { LabelService } 							from './services/label.service';
import { DataService } 								from './services/data.service';
import { ErrorService } 							from 'app/services/error.service';

import { StringFilterPipe } 					from './pipes/stringFilter.pipe';
import { SortByPipe } 								from './pipes/sort-byt.pipe';
import { FromToPipe } 								from 'app/pipes/from-to.pipe';
import { SortTogglerDirective } 			from './directives/sort-toggler.directive';

@NgModule({
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		BsDropdownModule.forRoot(),
		NgxPaginationModule,
		FormsModule,
		BsDatepickerModule.forRoot(),
		// TabsModule.forRoot(),
		// ChartsModule
		],
	declarations: [
		// Ui components
		AppComponent,
		AppAside,
		// AppBreadcrumbs,
		AppFooter,
		AppHeader,
		AppSidebar,
		// AppSidebarFooter,
		// AppSidebarForm,
		// AppSidebarHeader,
		// AppSidebarMinimizer,

		// Application components
		InvoicesComponent,
		InvoiceDetailComponent,
		ErrorComponent,

		// Directives
		AsideToggleDirective,
		NavDropdownDirective,
		NavDropdownToggleDirective,
		SidebarToggleDirective,
		SidebarMinimizeDirective,
		BrandMinimizeDirective,
		SidebarOffCanvasCloseDirective,
		MobileSidebarToggleDirective,
		SortTogglerDirective,

		// Pipes
		SortByPipe,
		StringFilterPipe,
		FromToPipe
	],
	providers: [
		LabelService,
		DataService,
		ErrorService,
		{
      provide: LOCALE_ID,
      useValue: 'da-DK'
    }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
