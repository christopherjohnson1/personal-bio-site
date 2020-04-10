import 'bootstrap';
import '../styles/main.scss';
import projects from './projects/projects';

const init = () => {
  projects.createProjectCards();
};

init();
