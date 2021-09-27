import PageHeader from '../../components/PageHeader';
import ReportForm from '../../components/ReportForm';

export default function EditReport() {
  return (
    <>
      <PageHeader
        title="Editar Noticia"
      />

      <ReportForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
