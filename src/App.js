const Layout = ({ header, children, footer }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-blue-500 p-4 shadow-md">
      <h1 className="text-2xl font-bold text-white">{header}</h1>
    </header>
    <main className="flex-1 p-4 flex items-center justify-center text-3xl">
      {children}
    </main>
    <footer className="bg-blue-400 p-4 text-center text-white">
      {footer}
    </footer>
  </div>
);

function App() {
  return (
    <div className="App">
        <Layout header="YJG30737's Tailwind CSS tutorial with React" footer="Powered by React & Tailwind CSS">
          <p>This is the main content of the app.</p>
        </Layout>
    </div>
  );
}

export default App;
