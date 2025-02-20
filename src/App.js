import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroImageRight } from './HeroImageRight';
import { FormPage } from './FormPage';
import ThankYouPage from './ThankYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroImageRight />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
