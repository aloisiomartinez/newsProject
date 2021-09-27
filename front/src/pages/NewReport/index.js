import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ReportForm';

export default function NewReport() {
  return (
    <>
      <PageHeader
        title="Nova Notícia"
      />

      <ContactForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
