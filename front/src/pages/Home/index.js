import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import * as S from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredReports = useMemo(() => reports.filter((report) => (
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  )), [reports, searchTerm]);

  useEffect(() => {
    async function loadReports() {
      try {
        const response = await fetch('http://localhost:3333/reports');

        const json = await response.json();
        setReports(json);
      } catch (error) {
        console.log(error);
      }
    }

    loadReports();
  }, []);

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquisar ..."
          onChange={handleChangeSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {filteredReports.length}
          {filteredReports.length === 1 ? ' notícia' : ' notícias'}
        </strong>
        <Link to="/new">Cadastrar Notícia</Link>
      </S.Header>

      {filteredReports.map((report) => (
        <S.Card key={report.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{report.title}</strong>
              <small>{report.description.substring(0, 8)}</small>
            </div>
            <small>
              Autor:
              {' '}
              {report.name}
            </small>

          </div>

          <div className="actions">
            <Link to={`/edit/${report.id}`}>
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}
