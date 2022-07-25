import Header from "../component/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default DefaultLayout;
