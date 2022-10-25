import Image from 'next/image'


export default function About() {
  return (
    <div>
      <section className='cont-trabajo'>
      <h2>Work Experience</h2>
        <div className='trabajo'>
          <p>I'm working as a Front-End in </p>
          <Image
            width={50}
            height={25}
            src='/assets/image/pxsol1.png'
          />
        </div>
        <div className='linea-tiemp'>
          <div className='cont-1'>
            <div className='cont-pipe-date'>
            <div className='fecha-work'>
            <small className='start'>Nov-2021</small>
            </div> 
            <div className='work free'>
              <p title='Full Stack Developer' className='text-work'>FreeLance</p>
            </div>
            </div>
          </div>
          <div className='cont-2'>
          <div className='cont-pipe-date'>

          
            <div className='fecha-work'>
            <small className='start'>Jul-2022</small>
            </div>
            
            <div className='work henry'>
              <p title='Teaching Assistant in Henry' className='text-work'>Henry</p>
            </div>
            </div>
          </div>
          <div className='cont-3'>
          <div className='cont-pipe-date'>

         
            <div className='fecha-work'>
            <small className='start'>Oct-2022</small>
            
            </div>
            
            <div className='work pxsol'>
              <p title='Front-End Developer in Pxsol ' className='text-work'>Pxsol</p>
            </div>
            </div>
          </div>

        </div>
      </section>
      <h1>ABOUT ME</h1>
      <article>
      <h3 className="preguntas">Who I am? </h3>
        <p>
          
          🔸I'm a Full Stack Developer and have the ability to develop projects from both areas like Front-end or Back-end, always keeping in mind that codes can be scaled and reused to speed up team development.

        </p>
        <h3 className="preguntas"> What do I have?</h3>
        <p>
         
          🔸I am very committed to all activities or projects proposed in a development environment, I like challenges and eager for new learning to increase my professional knowledge to improving my work and the team where I belong to, I am punctual person and reliable. Has experience managing teams, easily adaptable to changes and different work environments and have the ability to resolve situations to be fixed.

        </p>
        <h3 className="preguntas">That I can contribute?</h3>
        <p>
          
          🔸If we have the pleasure of working together, you will know that I always seek to improve the teamwork, building tools that allow facilitate and help all members to carry out an activity more effectively. I consider that I can face every problem like challenges that arise and I know that I can solve and accomplish them. Additionally, I'm open minded  to ask for advice, receive corrections and give constructive feedback too
        </p>

      </article>
      <h2>Technical Skills</h2>
      <div className='TechnicalSkills'>
        <p>CSS3 <small className="years">+3 years</small></p>
        <p>HTML5 <small className="years">+3 years</small></p>
        <p>React.Js <small className="years">1 year</small></p>
        <p>Redux.Js <small className="years">1 year</small></p>
        <p>Next.Js <small className="years">1 year</small></p>
        <p>JavaScript <small className="years">+1 years</small></p>
        <p>PHP <small className="years">1 year</small></p>
        <p>SQL <small className="years">1 year</small></p>
        <p>MySQL <small className="years">1 year</small></p>
        <p>Git <small className="years">1 year</small></p>
        <p>Sass <small className="years">+1 years</small></p>
        <p>Gulp <small className="years">+1 years</small></p>
        <p>JWT <small className="years">0-1 year</small></p>
        <p>Firebase <small className="years">0-1 year</small></p>
        <p>PostgresSQL <small className="years">+3 year</small></p>
        <p>Express.js <small className="years">1 year</small></p>
        <p>MongoDb <small className="years">1 year</small></p>
        <p>Illustrator <small className="years">+2 years</small></p>
        <p>Photoshop <small className="years">+2 years</small></p>
        <p>Jest <small className="years">0-1 year</small> </p>
      </div>
      <h2>Soft Skill</h2>
      <div className='TechnicalSkills'>
        <p>Dedication</p>
        <p>Multitasking</p>
        <p>Flexibility</p>
        <p>Scrum</p>
        <p>Autodidact</p>
        <p>Team Player</p>
        <p>Problem Solving</p>
        <p>Comunication</p>
      </div>
      <h2>Studing</h2>
      <div className='TechnicalSkills'>        
        <p>TypeScript</p>
        <p>Docker</p>
        <p>React Native</p>
        <p>GraphQL</p>
       
        <p>Laravel</p>
      </div>
    </div>
  )
}
