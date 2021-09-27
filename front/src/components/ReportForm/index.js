import { useState } from 'react';
import PropTypes from 'prop-types';

import useErrors from '../../hooks/userErrors';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';

import * as S from './styles';

export default function ContactForm({ buttonLabel }) {
  const [report, setReport] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = report && !errors.length;

  function handleReportChange(event) {
    setReport(event.target.value);

    if (!event.target.value) {
      setError({ field: 'report', message: 'Titulo é obrigatório.' });
    } else {
      removeError('report');
    }
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor((event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('report')}>
        <Input
          error={getErrorMessageByFieldName('report')}
          placeholder="Título da Notícia"
          value={report}
          onChange={handleReportChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('description')}>
        <Input
          type="description"
          error={getErrorMessageByFieldName('description')}
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
