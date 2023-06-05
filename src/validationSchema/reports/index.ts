import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  report_type: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  organisation_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
