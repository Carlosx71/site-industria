import * as Yup from 'yup';
import { contact } from 'interfaces/contact';

const requiredMessage = 'Campo obrigatório';

const validationSchema: Yup.SchemaOf<Partial<contact>> = Yup.object({
  nome: Yup.string().trim().required(requiredMessage),
  email: Yup.string()
    .email('Por favor, insira um email válido')
    .trim()
    .required(requiredMessage),
  telefone: Yup.string().trim().required(requiredMessage),
  assunto: Yup.string().trim().required(requiredMessage),
  mensagem: Yup.string().trim().required(requiredMessage),
});

export default validationSchema;
