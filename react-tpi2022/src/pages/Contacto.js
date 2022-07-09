import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';

function Contacto() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row justify="center" style={{ paddingTop: 100 }}>
      <Col xs={20} sm={12} lg={8}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Campo requerido. No completado',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Su nombre"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Campo requerido. No completado',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              type="email"
              placeholder="Su email"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Contacto;
