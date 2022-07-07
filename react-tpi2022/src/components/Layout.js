import Header from './Header';

function Layout(props) {
  return (
    <>
      <Header titulo="Título desde Layout" />
      {props.children}
    </>
  );
}

export default Layout;
