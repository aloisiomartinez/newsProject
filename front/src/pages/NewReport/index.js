import PageHeader from '../../components/PageHeader';
import ReportForm from '../../components/ReportForm';

export default function NewReport() {
  return (
    <>
      <PageHeader
        title="Nova Notícia"
      />

      <ReportForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
