import { MainLayout } from './components/layout/MainLayout.jsx';
import { ProjectPage } from './pages/ProjectsPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
