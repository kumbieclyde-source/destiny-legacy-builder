import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-8">DESTINY Legacy Builder</h1>
        <p className="text-xl mb-8">Welcome to the DESTINY program</p>
        <Link to="/destiny" className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90">
          View Sales Page
        </Link>
      </div>
    </div>
  );
}
