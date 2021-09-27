import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';

import * as S from './styles';

export default function ContactForm({ buttonLabel }) {
  const [report, setReport] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();

  const isFormValid = report;

  function handleReportChange(event) {
    setReport(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor((event.target.value));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line eqeqeq
    if (window.location.href.includes('new')) {
      await fetch('http://localhost:3333/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
          title: report,
          author_name: author,
        }),
      });
    } else {
      await fetch(`http://localhost:3333/reports/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
          title: report,
          author_name: author,
        }),
      });
    }
  }

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup>
        <Input
          placeholder="Título da Notícia"
          value={report}
          onChange={handleReportChange}
        />
      </FormGroup>

      <FormGroup>
        <TextArea
          type="description"
          placeholder="Descrição"
          value={description}
          onChange={handleDescriptionChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Autor"
          maxLength="15"
          value={author}
          onChange={handleAuthorChange}
        />
      </FormGroup>

      <S.ButtonContainer>
        <Button
          disabled={!isFormValid}
          type="submit"
        >
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
