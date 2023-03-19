import { useRouter } from 'next/router';

function FormDetail() {
  const router = useRouter();
  const id = router.query.id;

  return <h1>Detail about form {id}</h1>;
}

export default FormDetail;
