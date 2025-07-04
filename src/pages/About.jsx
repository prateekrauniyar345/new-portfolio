// About.jsx
import { getRandomInt } from '../utils/Random';

const images = ['IMG_1100.png', 'IMG_1544.png', 'IMG_1819.png', 'IMG_4681.png'];

const baseCardStyle = {
  width: 200,
  height: 210,
  marginRight: 10,
  borderRadius: 10,
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
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
      'Full-stack dashboard that ingests university expenditure data and renders interactive charts and drill-downs for department-level analytics. Deployed internally for faculty budget reviews.',
  },
  {
    project: 'SDImax Calculator',
    skills: ['Flask', 'JavaScript', 'ArcGIS API'],
    link:'/confidential/?project=SDImax Calculator',
    description:
      'End-to-end web application (and CLI package) that predicts Soil Dryness Index maximum values using a retrained ML model, with direct ArcGIS Pro integration for geospatial analysts.',
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
    project: 'Part Locator',
    skills: ['Flask', 'JavaScript', 'SQL'],
    link:'https://github.com/prateekrauniyar345/Parks-Locator',
    description:
      'Search engine for manufacturing parts that matches textual queries to a relational inventory, featuring fuzzy search algorithms and an intuitive web UI.',
  },
  {
    project: 'Research Grant Budget Generator',
    skills: ['Flask', 'JavaScript', 'SQL', 'Plotly'],
    link:'https://github.com/prateekrauniyar345/grant-budget-manager',
    description:
      'This project is a web-based tool designed to automate the generation of research grant budgets. It allows users to input various parameters and automatically calculates budget estimates, streamlining the grant application process.',
  },
  {
    project: 'Vlora (Online Fashion Store)',
    skills: ['React', 'NodeJS', 'Express', 'MongoDB', 'Stripe'],
    link:'https://github.com/prateekrauniyar345/lab-final',
    description:
      'This project is an online fashion store built with a modern MERN stack. It features user authentication, product listings, and a shopping cart, all while integrating Stripe for secure payments.',
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
};



export default function About() {
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
            <div style={cardStyle} key={file}>
              <img src={`/pp/${file}`} alt={`gallery ${i}`} style={imgStyle} />
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
                <p className='text-secondary small mb-0'>{job.description}</p>
              </div>
            );
          })}
        </div>
      </div>


      <div className="mt-4">
      <h3 className="mb-4">Projects</h3>

      {projects.map((proj, i) => (
        <div key={i} className="row gy-2 mb-3 align-items-start hoverEffect"
         onClick={(e) => {
            // Open the project link in a new tab
            if (proj.link) {
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

    <div className="mb-5"></div>

  </>
  );
}
