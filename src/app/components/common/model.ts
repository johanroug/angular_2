export interface IInvoice {
  invoiceId: number;
  invoiceNumber: number;
  invoiceType: string;
  invoiceDate: string;
  totalPrice: number;
  toCompany: number;
  projectNumber: number;
  projectName: string;
  invoicePath: string;
  thumbnailPath: string;
}

export interface IInvoiceDetail {
  invoiceId: number;
  invoiceNumber: number;
  invoiceType: string;
  invoiceDate: string;
  totalPrice: number;
  toCompany: number;
  projectNumber: number;
  projectName: string;
  invoicePath: string;
  thumbnailPath: string;
}

export interface ISorting {
  sortName: string;
	sortAZ: string;
}

export interface IUser {
  id: number;
  username: string;
  initials?: any;
  name: string;
  email: string;
  mobile: string;
  status: number;
  toCompany: number;
}
