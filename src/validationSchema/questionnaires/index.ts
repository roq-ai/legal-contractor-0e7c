import * as yup from 'yup';

export const questionnaireValidationSchema = yup.object().shape({
  name: yup.string().required(),
  questions: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
