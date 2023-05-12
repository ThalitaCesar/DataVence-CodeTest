import { useState } from 'react';

type FormValues = {
  name: string;
  cpf: string;
  email: string;
  neighborhood: string;
  cep: string;
  city: string;
  street: string;
  complement: string;
  state: string;
  number: string;
};

type FormErrors = {
  [key in keyof FormValues]?: string;
};

type FormTouched = {
  [key in keyof FormValues]: boolean;
};

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

type UseFormResult = {
  values: FormValues;
  errors: FormErrors;
  touched: FormTouched;
  status: FormStatus;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useForm = (): UseFormResult => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    cpf: '',
    email: '',
    neighborhood: '',
    cep: '',
    city: '',
    street: '',
    complement: '',
    state: '',
    number: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    cpf: false,
    email: false,
    neighborhood: false,
    cep: false,
    city: false,
    street: false,
    complement: false,
    state: false,
    number: false,
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched((prevTouched) => {
      const touchedFields: FormTouched = {
        name: true,
        cpf: true,
        email: true,
        neighborhood: true,
        cep: true,
        city: true,
        street: true,
        complement: true,
        state: true,
        number: true,
      };
      return touchedFields;
    });

    const formErrors: FormErrors = {};
    if (values.name.trim() === '') {
      formErrors.name = 'O nome é obrigatório';
    }
    if (values.cpf.trim() === '') {
        formErrors.cpf = 'O cpf é obrigatório';
      }
      if (values.email.trim() === '') {
        formErrors.email = 'O email é obrigatório';
      }
      if (values.neighborhood.trim() === '') {
        formErrors.neighborhood = 'O bairro é obrigatório';
      }
      if (values.cep.trim() === '') {
        formErrors.cep = 'O cep é obrigatório';
      }
      if (values.city.trim() === '') {
        formErrors.city = 'A cidade é obrigatória';
      }
      if (values.street.trim() === '') {
        formErrors.street = 'A rua é obrigatória';
      }
      if (values.state.trim() === '') {
        formErrors.state = 'O estado é obrigatório';
      }
      if (values.number.trim() === '') {
        formErrors.number = 'O número é obrigatório';
      }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setStatus('submitting');
      setStatus('submitted');
    } else {
      setStatus('error');
    }
  };

  return {
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
