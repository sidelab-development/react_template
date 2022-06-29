import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from './schema';
import {
  Button,
  Container,
  Form,
  FormControl,
  Input,
  Label,
  Option,
  Select,
} from './styles';

type Inputs = {
  email: string,
  password: string,
  type: string,
};

export function Feedback() {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
        </FormControl>

        <FormControl>
          <Label htmlFor="exam-type">Tipo de feedback</Label>
          <Select
            id="exam-type"
            placeholder="Escolha o tipo de feedback"
            {...register('type', { required: true })}
          >
            <Option>Bug</Option>
            <Option>Melhoria</Option>
            <Option>Sugestão</Option>
          </Select>
        </FormControl>

        <FormControl>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="text"
            {...register('password', { required: true })}
          />
        </FormControl>

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
