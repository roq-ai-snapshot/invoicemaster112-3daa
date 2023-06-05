import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_date: yup.date().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  invoice_id: yup.string().nullable().required(),
});
