import { Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="header">
        <Home className="h-6 w-6" />
      </header>
      
      <section className="section-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Styled App</h1>
          <p className="mb-4">This page demonstrates the custom styles you requested.</p>
          <a href="https://example.com" className="underline">Example Link</a>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
};

export default Index;
