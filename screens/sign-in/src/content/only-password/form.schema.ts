import * as yup from 'yup';

export const schema = yup.object({
  login: yup.string().required('Необходимо заполнить'),
  password: yup.string().required('Необходимо заполнить'),
});
