import { InvoiceInterface } from 'interfaces/invoice';

export interface PaymentInterface {
  id?: string;
  invoice_id: string;
  amount: number;
  payment_date: Date;
  created_at?: Date;
  updated_at?: Date;

  invoice?: InvoiceInterface;
  _count?: {};
}
