import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from './schema';
import {
  Button,
  Container,
  TextArea,
  Form,
  FormControl,
  Input,
  Label,
  Option,
  Select,
} from './styles';

type Inputs = {
  type: string,
  description: string,
  file: string,
  suggestion: string
};

export function Feedback() {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [image, setImage] = useState('');

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const preview = URL.createObjectURL(e.target.files[0]);
      setImage(preview);
    }
  };

  const removeSelectedImage = () => {
    setImage('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            id="description"
            {...register('description', { required: true })}
          />
        </FormControl>

        <FormControl>
          <Label htmlFor="file" id="label-file">Upload</Label>
          <Input
            id="file"
            type="file"
            accept="image/png, video/mp4"
            multiple
            {...register('file', { required: true })}
            onChange={imageChange}
          />
        </FormControl>

        <FormControl>
          <Label htmlFor="suggestion">Sugestão</Label>
          <TextArea
            id="suggestion"
            {...register('suggestion', { required: true })}
          />
        </FormControl>

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
