import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Category = lazy(() => import('../pages/Category'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-aerovue-grey-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-aerovue-grey-100 border-t-aerovue-primary rounded-full animate-spin" />
        <p className="font-host-grotesk text-aerovue-grey-700">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Suspense>
    </Router>
  );
}