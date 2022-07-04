import * as yup from 'yup';

export const schema = yup.object({
  type: yup.string().required(),
  description: yup.string().required(),
}).required();
