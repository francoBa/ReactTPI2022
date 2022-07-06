import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo siento, la página que intentas visitar no existe."
      extra={
        <Button type="primary">
          <Link to="/">Volver al Home</Link>
        </Button>
      }
    />
  );
}

export default Page404;
