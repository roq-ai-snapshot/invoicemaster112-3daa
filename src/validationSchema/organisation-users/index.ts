import * as yup from 'yup';

export const organisationUserValidationSchema = yup.object().shape({
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  organisation_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
