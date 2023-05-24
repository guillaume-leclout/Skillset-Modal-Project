import './index.css';
import Skill from './components/Skill';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddSkill from './components/AddSkill';
import './app.css';

function App() {
  const [level, setLevel] = useState('Mastered');
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: 'HTML',
      level: 'Mastered',
      img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--IVWVKZ0b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oi03cmuyeesegovxmnrq.jpeg',
    },
    {
      id: 2,
      name: 'CSS',
      level: 'Mastered',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcWyiKmvn3KtjEUB0VuBqQwtdypNZLI2EtZMB1se1MzewhEH2',
    },
    {
      id: 3,
      name: 'JS',
      level: 'Intermediate',
      img: 'https://blog.logrocket.com/wp-content/uploads/2021/01/javascript-record-tuple-proposal.png',
    },
    {
      id: 4,
      name: 'NODE JS',
      level: 'Intermediate',
      img: 'https://t2.gstatic.com/images?q=tbn:ANd9GcTSuTp4TVJFBJbbuFZIX-uD9ghdBd_0Z7qOn2eUS_XZpLVOoUkl',
    },
    {
      id: 5,
      name: 'REACT',
      level: 'Advanced',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnZ0ksmIlGQPOyLd_ua4X4UqkEFcr96sBWTrEu-qIN4AlkDOqk',
    },
    {
      id: 6,
      name: 'Express JS',
      level: 'Learning in progress',
      img: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
    },
    {
      id: 7,
      name: 'MySQL',
      level: 'Learning in progress',
      img: 'https://servicenav.coservit.com/wp-content/uploads/2022/05/41-3.jpg',
    },
    {
      id: 8,
      name: 'GITHUB',
      level: 'Mastered',
      img: 'https://umaar.github.io/experiments/github-3d-logo/render-2.jpg',
    },
  ]);

  function updateSkill(id, newName, newLevel) {
    const updatedSkills = skills.map((skill) => {
      if (id == skill.id) {
        return { ...skill, name: newName, level: newLevel };
      }
      return skill;
    });
    setSkills(updatedSkills);
  }

  function newSkill(name, level, img) {
    const newSkill = {
      id: uuidv4(),
      name: name,
      level: level,
      img: img,
    };
    setSkills([...skills, newSkill]);
  }
  const showSkills = true;

  return (
    <div className="app">
      <h1 className="main-title">My Web Developping curriculum</h1>
      {showSkills ? (
        <>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  id={skill.id}
                  name={skill.name}
                  level={skill.level}
                  img={skill.img}
                  updateSkill={updateSkill}
                />
              );
            })}
          </div>
          <AddSkill newSkill={newSkill} />
        </>
      ) : (
        <p>You cannot see the skills</p>
      )}
    </div>
  );
}

export default App;
