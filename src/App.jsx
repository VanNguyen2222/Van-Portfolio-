import { Box, Chip, Grid, Link, Paper, Slider, Typography } from '@mui/material'
import './App.css'
import MyButton from './components/Button'
import Nav from './components/Navbar'
import avatar from '../src/assets/avatar.png'
import avatarFb from '../src/assets/avatar_fb.jpg'
import contact from '../src/assets/contact.png'
import facebook from '../src/assets/facebook.png'
import communication from '../src/assets/communication.png'
import linkedin from '../src/assets/linkedin.png'
import telephone from '../src/assets/telephone.png'
import "@fontsource/parisienne";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'


const skillData = [
  {
    title: "Frontend",
    skills: ["ReactJS", "Next.js", "TypeScript", "JavaScript (ES6+)", "CSS3", "HTML5", "Redux"],
  },
  {
    title: "UI/UX",
    skills: ["Material-UI", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools",
    skills: ["Visual studio code", "Git", "Figma", "Postman"],
  },
];

const experience = [
  {
    icon: <BusinessCenterIcon/>,
    color : "primary",
    title: "Web developer - Junior",
    company: "Digibank Solutions",
    time: "December 2023 - Present",
    description: <Typography>- Developed responsive and user-friendly interfaces using React.js.<br/>- Designed and implemented reusable UI components using React Hooks.<br/>- Managed application state using Redux to ensure data consistency across the app.<br/>- Collaborated with team members to analyze requirements and design system features.<br/>- Integrated and consumed RESTful APIs from backend services.<br/>- Designed and developed backend APIs using Spring Boot.<br/>- Tested APIs using Postman and ensured data consistency.<br/>- Optimized application performance using memoization, lazy loading, and code splitting.<br/>- Used Git for version control, including branching, merging, and team collaboration.</Typography>,
  },
  {
    icon: <BusinessCenterIcon/>,
    color : "primary",
    title: "Frontend Developer Engineer - Fresher",
    company: "Hybrid Technologies",
    time: "June 2022 - September 2023",
    description: <Typography sx={{ textAlign: 'left'}}>- Strong foundation in HTML, CSS (SCSS, BEM), JavaScript (ES6+).<br/>- Proficient in React ecosystem (Hooks, Lifecycle, React Router).<br/>- Experienced with state management (Redux, Recoil).<br/>- Form handling & validation (React Hook Form, Yup).<br/>- API integration (Axios, JSON Server).<br/>- Responsive UI & modern styling (Styled Components).<br/>- Familiar with Next.js & TypeScript Version control (Git, Git Flow).<br/>- Deployment with Vercel, Heroku.<br/>- Worked in an Agile development environment, actively participated in requirements definition meetings, analyzed and estimated work, and ensured project progress and quality.<br/>- Collaborated with UX/UI designers to convert wireframes and mockups into interactive, high-quality interfaces.</Typography>,
  },
  {
    icon: <SchoolIcon/>,
    color : "secondary",
    title: "B.Sc. Bachelors Degree",
    description: <Typography>Bachelor of Information Technology Duy Tan University</Typography>,
  }
]

const contactInfo = [
  {
    icon: facebook,
    label: "Facebook",
    href: "https://www.facebook.com/van.van.818708/",
  },
  {
    icon: telephone,
    label: "Telephone",
    href: "tel:+84799421763",
  },
  {
    icon: linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/v%C3%A2n-nguy%E1%BB%85n-bb52382a7/",
  },
  {
    icon: communication,
    label: "Email",
    href: "mailto:ngthivan2222@gmail.com",
  }
]

function App() {

  const theme = useTheme();
  // Check if screen is medium or larger
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Nav />
      <main>
        <section id="home" className="section hero">
          <Grid container spacing={2} className="hero-grid">
            <Grid size={{ xs: 6, md: 8 }} sx={{textAlign: "center", position: "relative", width: "100%"}}>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  width: "50%",
                  height: "2px",
                  top: "-20px",
                  backgroundColor: "#111827",
                  transform: "scaleX(0)",           
                  transformOrigin: "left",          
                  animation: "lineReveal 1.2s ease forwards",
                  display: { xs: 'none', md: 'block' }
                }}
              />
                <Typography variant="h5" fontWeight="bold"  
                  sx={{
                    fontFamily: "'Parisienne', cursive",
                    fontSize: "2.5rem",
                  }}
                >
                    Hi, I'm
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                    Van Nguyen
                </Typography>
                <Typography variant="h5" fontWeight="bold" mt="1rem">
                    Frontend Developer
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      mt: 3,
                      wordBreak: "break-word"
                    }}
                  >
                    Build scalable web apps with ReactJS & modern frontend tech.
                </Typography>
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  width: "50%",
                  height: "2px",
                  backgroundColor: "#111827",
                  bottom: "-20px",
                  transform: "scaleX(0)",           
                  transformOrigin: "right",          
                  animation: "lineReveal 1.2s ease forwards",
                  display: { xs: 'none', md: 'block' }
                }}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 4 }} sx={{width:"100%"}}>
                <Box
                  component="img"
                  src={avatar}
                  alt="hero"
                  sx={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: 4,
                    boxShadow: 3
                  }}
                />
            </Grid>
          </Grid>
        </section>

        <section id="about" className="section about">
          <h2>About Me</h2>
            <Grid container spacing={2}
            className="about-grid"
             >
            <Grid size={{ xs: 6, md: 4 }} sx={{textAlign: "center", position: "relative", width: "100%"}}>
                <Box
                  component="img"
                  src={avatarFb}
                  alt="hero"
                  sx={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: 4,
                    boxShadow: 3
                  }}
                />
            </Grid>
            <Grid size={{ xs: 6, md: 8 }} sx={{width:"100%"}}>
              <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    wordBreak: "break-word"
                  }}
                >
                  I’m a <strong>Frontend Developer with over 3 years of experience</strong> building <strong>scalable web applications</strong> in the IT industry.
              </Typography>
              <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    wordBreak: "break-word"
                  }}
                >
                  I specialize in <strong>ReactJS</strong> and modern frontend technologies, with a strong focus on <strong>performance optimization</strong>, <strong>reusable components</strong>, and <strong>user-friendly interfaces</strong>.
              </Typography>
              <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    wordBreak: "break-word"
                  }}
                >
                  I have worked on a variety of projects, from simple websites to <strong>complex systems</strong>, ensuring <strong>high quality</strong> and <strong>cross-browser compatibility</strong>. I continuously stay updated with new technologies to improve my skills and deliver better solutions.
              </Typography>
              <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    wordBreak: "break-word"
                  }}
                >
                  I also collaborate effectively with <strong>designers</strong> and <strong>backend developers</strong>, contributing to both technical implementation and requirement understanding. Additionally, I have contributed as a <strong>Business Analyst</strong> in <strong>requirement gathering</strong>, <strong>BRD documentation</strong>, and bridging communication between <strong>stakeholders and development teams</strong>.
              </Typography>
              <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    wordBreak: "break-word"
                  }}
                >
                  My goal is to create <strong>efficient</strong>, <strong>maintainable</strong>, and <strong>impactful user experiences</strong>.
              </Typography>
            </Grid>
          </Grid>
        </section>

        <section id="skill" className="section skills">
          <h2>Skills</h2>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {skillData.map((group) => (
              <Box
                key={group.title}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "45%",
                    md: "22%",
                  },
                  p: 3,
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#7b7f83",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {group.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        borderRadius: "10px",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </section>
        <section id="experience" className="section experience">
          <h2>Experience</h2>
          <div className="experience-grid">
            <Timeline position={isDesktop ? 'alternate' : 'right'}>
              {experience.map((item, index) => (
              <TimelineItem key={item.title + index} sx={!isDesktop && { "&::before": { display: "none" } }}>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            {item.icon??<TimelineDot color={item.color}>
              {item.icon}
            </TimelineDot>}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }} color='textPrimary'>
            <Typography variant="h6" component="span" sx={{textAlign:'left'}}>
              {item.title && <strong>{item.title}</strong>}
              {item.company && <><br/>{item.company}</>}
              {item.time && <><br/><em>{item.time}</em></>}
            </Typography>
            {item.description??item.description}
          </TimelineContent>
        </TimelineItem>
            ))}
      </Timeline>
    </div>
        </section>

        <section id="contact" className="section contact">
            <h2>Contact</h2>
           <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
             <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    wordBreak: "break-word"
                  }}
                >
                  Ready to build something together? Send a message and I’ll reply shortly.
              </Typography>
              <div style={{display:'flex', gap: '50px', marginTop: '20px', flexWrap: 'wrap'}}>
                {contactInfo.map((contact) => (
                  <a
                className="secondary-link"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <img src={contact.icon} alt={contact.label} style={{ width: '40px', height: '40px' }} />
                {contact.label}
              </a>
                ))}
              </div>
              <Box
                  component="img"
                  src={contact}
                  alt="hero"
                  sx={{
                    height: "500px",
                  }}
                />
           </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Van Portfolio. Built with React.</p>
      </footer>
    </>
  )
}

export default App
