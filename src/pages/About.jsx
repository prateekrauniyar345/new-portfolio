// About.jsx
import { getRandomInt } from '../utils/Random';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './About.css'; 


const images = [
      {
        'image' : 'IMG_1100.png', 
        'location' : 'University of Idaho, Idaho, 2023'

      }, {
        'image' : 'IMG_1544.png',
        'location' : 'Wallowa Lake, Oregon, 2024'
      }, {
        'image' : 'IMG_1819.png',
        'location' : 'U of I Arboretum, Idaho, 2024'
      }, {
        'image' : 'IMG_4681.png',
        'location' : 'Sand Point, Idaho, 2015'
      }
    ]; 

const baseCardStyle = {
  width: 200,
  height: 210,
  marginRight: 10,
  borderRadius: 10,
  overflow: 'hidden',
  position: 'relative',
  perspective: '1000px',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.6s ease',
  // transform-origin: 'center',
  display: 'block',
  // will-change: 'transform'
};

const jobsExperience = [
  {
    company: 'University of Idaho',
    title: 'RCDS/IIDS Internal Helper',
    description: 'Developed and deployed a web-based budget analysis tool; built a research proposal automation platform; conducting research on structured output generation using LLMs.',
    duration: 'August 2024 - Current',
    color:'green', 
  },
  {
    company: 'University of Idaho',
    title: 'NSF REU Internal Helper',
    description: 'Performed data validation and testing on regional raster datasets; integrated regional models into the SDImax framework; contributed to building an ArcGIS toolbox.',
    duration: 'August 2024 - January 2025',
    color: 'orange',
  },
  {
    company: 'NSF REU',
    title: 'Intern',
    description: 'Helped develop and test a machine learning model for calculating SDImax; implemented new web app features; performed rigorous testing and quality checking of rasters; created a package for offline SDImax calculation; helped upgrade the SDImax model.',
    duration: 'May 2024 - August 2024',
    color:'yellow',
  }
];

// Projects
const projects = [
  {
    project: 'Research Budget Analysis Tool',
    skills: ['Flask', 'Plotly', 'MySQL', 'Git'],
    link:'/confidential?project=Research Budget Analysis Tool',
    description:
      'Internally Deployed, Full-stack dashboard that ingests university expenditure data and renders interactive charts and drill-downs for department-level analytics.',
  },
  {
    project: 'SDImax Calculator',
    skills: ['Flask', 'JavaScript', 'ArcGIS API'],
    link:'/confidential/?project=SDImax Calculator',
    description:
      'Enterprise level, End-to-end web application with ML integration that predicts Maximum Trees Stand Density Index, given different parameters as Input or in the form of Shapefile.',
  },
  {
    project: 'Sentiment Analysis Pipeline',
    skills: ['Python', 'DeepSeek LLM', 'Gradio', 'Reddit API'],
    link:'https://github.com/prateekrauniyar345/sentiment_analysis',
    description:
      'Built a real-time Reddit sentiment monitor with a DeepSeek LLM backbone, live word-cloud visualisation, and a Gradio front-end for interactive exploration.',
  },
  {
    project: 'WorkSync AI',
    skills: ['Next.js', 'Express', 'DeepSeek LLM'],
    link:'https://github.com/prateekrauniyar345/workspace_creator',
    description:
      'Workspace-orchestration tool that launches and arranges development environments automatically, using an LLM agent to infer optimal layouts from project metadata.',
  },
  {
    project: 'Research Grant Budget Generator',
    skills: ['Flask', 'JavaScript', 'SQL', 'Plotly'],
    link:'https://github.com/prateekrauniyar345/grant-budget-manager',
    description:
      'Full Stack web app for generating and managing research grant budgets with features to download, share and export budgets in various formats.',
  },
  {
    project: 'Valora (Online Fashion Store)',
    skills: ['React', 'NodeJS', 'Express', 'MongoDB', 'Stripe'],
    link:'https://github.com/prateekrauniyar345/Valora.git',
    description:
      'E-Commerce platform with user authentication, product listings, and a shopping cart, integrating Stripe for secure payments.',
  },

];

const certifications = [
  {
    title: 'SQL for Data Science',
    provider: 'Coursera — University of California, Davis',
    referenceId: 'turn0search0',   // official course page
    link: 'https://courses.edx.org/certificates/742e2f851cef479b87f91cfe877c6fce',
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    provider: 'DeepLearning.AI / Coursera — Machine Learning Specialization (Course 1)',
    referenceId: 'turn0search3',   // official course page
    link: 'https://www.coursera.org/account/accomplishments/verify/VDULR30U389G',
  },
];


const techColours = {
  /* ── languages ─────────────────────────────── */
  Python:        '#3776AB',  // official Python blue
  JavaScript:    '#facc15',  // yellow  
  TypeScript:    '#3b82f6',  // blue
  SQL:           '#e38c00',  // amber / ANSI SQL

  /* ── back-end / frameworks ─────────────────── */
  Flask:         '#ffffff',  // black (Flask logo)
  'Next.js':     '#6b7280',  // grey
  Express:       '#fb923c',  // orange  (alias below)
  'Express.js':  '#fb923c',
  'DeepSeek LLM':'#8b5cf6',  // violet
  MongoDB:       '#47a248',  // MongoDB green

  /* ── front-end / UI libs ───────────────────── */
  React:         '#06b6d4',  // cyan
  Plotly:        '#119dff',  // Plotly blue
  Gradio:        '#38bdf8',  // light cyan

  /* ── APIs / cloud / services ───────────────── */
  'ArcGIS API':  '#00b33c',  // ESRI green
  'Reddit API':  '#ff4500',  // Reddit orange
  'Spotify API': '#22c55e',  // Spotify green
  AWS:           '#f97316',  // orange-red
  Supabase:      '#10b981',  // emerald

  /* ── tools / VCS / DB ──────────────────────── */
  Git:           '#f34f29',  // Git orange
  MySQL:         '#00758F',  // MySQL teal
  'Stripe':      '#f59e0b',  // Stripe yellow
};


const Hobbies = [
  { 
    title: 'Gaming', 
    description: 'I enjoy playing video games, both single-player and multiplayer.' ,
    dos : 'valorant',
    iconTypes : 'img',
    iconSrc : '/valorant.png',
    color : '#facc15'
  },
  { 
    title: 'Hiking', 
    description: 'I like to go hiking and explore nature on weekends.' ,
    dos : 'Wallowa Lake Trailhead(recent)',
    iconTypes : 'fontawesome',
    iconSrc : faLocationDot,
    color : '#47a248'
  },
  { 
    title: 'Cooking', 
    description: 'I enjoy experimenting with new recipes and cooking for friends and family.' ,
    dos : 'momos',
    iconTypes : 'img',
    iconSrc : '/momos.png',
    color : '#f59e0b',
  },
  { 
    title: 'Traveling', 
    description: 'I love to travel and experience new cultures and cuisines.' ,
    dos : 'Oregon Coast(recent)',
    iconTypes : 'fontawesome',
    iconSrc : faLocationDot,
    color : '#38bdf8',
  },
];



export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column mt-4">
        <h3>About</h3>
        <p>Who am I?</p>
      </div>

      <div className="d-flex flex-row flex-nowrap mt-4 p-5" style={{overflow:"hidden"}} >
        {images.map((file, i) => {
          /* ▶︎ Compute a random tilt for THIS card */
          const degree = getRandomInt(10, 15) * (i % 2 === 0 ? 1 : -1); // alternate direction
          const rotation = `rotate(${degree}deg)`;

          /* ▶︎ Clone the base styles and add the rotation */
          const cardStyle = { ...baseCardStyle, transform: rotation };
        //   const imgStyle  = { ...baseImgStyle, transform: rotation };

          return (
            <div style={cardStyle} key={file.image} className='photo'>
              <img src={`/pp/${file.image}`} alt={`gallery ${i}`} className="photo__img" />
              <div className="photo__overlay">
                <span className="photo__label">{`${file.location}`}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className='mt-4 mb-5'>
        <h3>Timeline</h3>
        {/* timeline structure */}
        <div className='border-start ps-4 mt-4'>
          {jobsExperience.map((job, index) => {
            return (
              <div className='pb-1 mb-3 hoverEffect' key={index}>
                {/* Timeline dot and company header */}
                <div className='d-flex align-items-center mb-2' style={{ marginLeft: '-1.85rem' }}>
                  <div 
                    className='rounded-circle me-3' 
                    style={{
                      width: '10px', 
                      height: '10px',
                      backgroundColor: job.color, 
                      boxShadow: `0 0 10px ${job.color}, 0 0 20px ${job.color}`,
                      filter: 'blur(0.5px)',
                      
                    }}
                    
                  ></div>
                  <p className='fw-bold fs-6 mb-0 flex-grow-1'>{job.company}</p>
                  <p className='text-secondary small mb-0'>{job.duration}</p>
                </div>
                
                {/* Job title */}
                <p className='text-secondary fs-6 mb-2'>{job.title}</p>
                
                {/* Job description */}
                <p className='text-secondary lh-sm mb-0 small'>{job.description}</p>
              </div>
            );
          })}
        </div>
      </div>


      <div className="mt-4">
      <h3 className="mb-2">Projects</h3>

      {projects.map((proj, i) => (
        <div key={i} className="row gy-2 mb-3 align-items-start hoverEffect"
         onClick={(e) => {
            // Check if it's an internal route (confidential page)
            if (proj.link === '/confidential') {
              // Navigate to internal route with project parameter
              navigate(`/confidential?project=${encodeURIComponent(proj.project)}`);
            } else if (proj.link) {
              // Open external links in new tab
              window.open(proj.link, '_blank', 'noopener,noreferrer');
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          {/* ▶︎ left column: name + description */}
          <div className="col-12 col-md-7">
            <p className="fw-bold mb-1">{proj.project}</p>
            <p className="text-secondary lh-sm mb-0 small">
              {proj.description}
            </p>
          </div>

          {/* ▶︎ right column: coloured badges */}
          <div className="col-12 col-md-5 d-flex flex-wrap gap-2 justify-content-md-end small">
            {proj.skills.map((skill, j) => (
              <span
                key={j}
                className="badge text-dark fw-medium "
                style={{
                  backgroundColor: techColours[skill] ?? '#6b7280',
                  borderRadius: '9999px',            // pill shape
                  padding: '.4rem .9rem',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>


    {/* Hobbies */}
    <div className="mt-5">
      <h3>Hobbies</h3>
      <div className="row">
        {Hobbies.map((hobby, index) => (
          <div className='col-md-6 col-12 mb-3 hoverEffect' key={index}>
            <p className='fw-bold'>
              {hobby.title}
            </p>
            <div className='text-secondary small mb-0 lh-sm'>
              {hobby.iconTypes === 'img' ? (
                <>
                  {hobby.description}
                  <p style={{color : hobby.color}}>
                    {hobby.dos}
                    <img src={hobby.iconSrc} alt={hobby.title} style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
                  </p>
                </>
              ) : (
                <>
                  {hobby.description}
                  <p style={{color : hobby.color}}>
                    {hobby.dos}
                    <FontAwesomeIcon
                      icon={hobby.iconSrc}     /* faLocationDot */
                      size="lg"
                    />
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="mb-3"></div>

  </>
  );
}
