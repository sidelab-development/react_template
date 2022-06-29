import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import {
  Button,
  Container,
  Form,
  FormControl,
  Input,
  Label,
} from './styles';

type Inputs = {
  email: string,
  password: string,
};

export function Feedback() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="text"
            {...register('password', { required: true })}
          />
        </FormControl>

        <Button type="submit">Enviar</Button>

        <h2>{errors.email?.message}</h2>
        <h2>{errors.password?.message}</h2>
      </Form>
    </Container>
  );
}
