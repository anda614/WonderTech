import { useRouter } from 'next/router';

function FormDetail() {
  const router = useRouter();
  const formId = router.query.formId;

  return <h1>Detail about form {formId}</h1>;
}

export default FormDetail;
