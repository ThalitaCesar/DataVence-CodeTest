import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    cpf: yup.string().required('O cpf é obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O email é obrigatório'),
    neighborhood: yup.string().required('O bairro é obrigatório'),
    cep: yup.string().required('O cep é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
    street: yup.string().required('A rua é obrigatória'),
    state: yup.string().required('O estado é obrigatório'),
    number: yup.string().required('O número é obrigatório'),
    plan: yup.string().required('O plano é obrigatório'),
    themes: yup.array().of(yup.string()).required('Os temas de leitura são obrigatórios'),
    additionalInfo: yup.mixed().nullable(),
  });