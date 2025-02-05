// import Hero from './sections/Hero.jsx';
// import About from './sections/About.jsx';
import { MainLayout } from './components/layout/MainLayout.jsx';
// import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
// import Projects from './sections/Projects.jsx';
// import WorkExperience from './sections/Experience.jsx';
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
    // <main className="w-full mx-auto relative">
    //   <Navbar />
    //   <Hero />
    //   <WorkExperience />
    //   <About />
    //   <Projects />
    //   <Clients />
    //   <Contact />
    //   <Footer />
    //   {/* <About />
    //   <Projects />
    //   <Clients />
    //   <WorkExperience />
    //   <Contact />
    //   <Footer /> */}
    // </main>
  );
};

export default App;
