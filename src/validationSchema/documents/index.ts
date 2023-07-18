import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  template_id: yup.string().nullable().required(),
  questionnaire_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
