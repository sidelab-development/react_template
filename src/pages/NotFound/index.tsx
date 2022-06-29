import { Link } from 'react-router-dom';
import { Container } from './styles';
import NotFoundPage from '../../assets/notFound.svg';

export function NotFound() {
  return (
    <Container>
      <title>404</title>

      <img src={NotFoundPage} alt="404" />
      <h2>
        Página não encontrada, para voltar clique
        <Link to="/"> aqui</Link>
      </h2>
    </Container>
  );
}
