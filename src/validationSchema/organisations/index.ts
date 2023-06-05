import * as yup from 'yup';
import { invoiceValidationSchema } from 'validationSchema/invoices';
import { organisationUserValidationSchema } from 'validationSchema/organisation-users';
import { reportValidationSchema } from 'validationSchema/reports';

export const organisationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  invoice: yup.array().of(invoiceValidationSchema),
  organisation_user: yup.array().of(organisationUserValidationSchema),
  report: yup.array().of(reportValidationSchema),
});
