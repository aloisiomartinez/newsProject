import { Link } from 'react-router-dom';

import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquisar ..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Cadastrar Notícia</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Flecha" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>João VitorJoão VitorJoão Vitor</strong>
              <small>João Vitor</small>
            </div>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </S.Card>

      </S.ListContainer>
    </S.Container>
  );
}
