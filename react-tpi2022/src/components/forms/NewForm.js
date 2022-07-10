import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

//useRef podemos usarlo para:
// 1- acceder a un elemento único del DOM
// 2- obtener y guardar valores sin tener que re-renderizar un componente

function NewForm() {
  // const [nombre, setNombre] = useState('');
  // const [formVisible, setFormVisible] = useState('');
  // const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se han enviado sus datos correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
    // navigate('/');
    // setFormVisible('none');
    window.location.href = '/';
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
          // style={{ display: formVisible }}
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

export default NewForm;
