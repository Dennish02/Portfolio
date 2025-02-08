import React from 'react'

function Studing() {
    const languages = [
        {
            id: 1,
            name: 'Kotlin',
        },
        {
            id: 2,
            name: 'Tensorflow',
        },
        {
            id: 3,
            name: 'Python',
        }
    ]

  return (
   <section>
         <h2>Studing</h2>
         <div className='TechnicalSkills'>
              {languages.map((language , index)=> (
                <p key={language.id + index}>{language.name}</p>
              ))}
       </div>
   </section>
  )
}

export default Studing