import { Injectable } from '@angular/core';

@Injectable()
export class LabelService {
	public labels = {
		invoiceLabel: 'Faktura',
		invoicesLabel: 'Fakturaer',
		downloadInvoice: 'Download faktura',
		downloadInvoiceAsPDF: 'Download faktura i PDF format',
		pagination: {
			prev: 'Forrige',
			next: 'Næste',
			itemsPage: 'Vis pr. side'
		},
		invoices: {
			invoiceId: 'Fakturanr.',
			invoiceNumber: 'Sagsnr.',
			projectName: 'Pladsnavn',
			invoiceDate: 'Forfaldsdato',
			totalPrice: 'Total u/moms'
		},
		filter: {
			filterShow: 'Vis filtre',
			filterHide: 'Skjul filtre',
			filterForInvoiceId: 'Fakturanr.',
			filterForInvoiceNumber: 'Sagsnr.',
			filterForProjectName: 'Pladsnavn',
			filterFrom: 'Fra dato',
			filterTo: 'Til dato'
		}
	};
}
