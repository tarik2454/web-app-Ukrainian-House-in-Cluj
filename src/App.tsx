import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './constants/routes';
import HomePage from './pages/HomePage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}
