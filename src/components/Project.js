import React from 'react'

import { motion } from 'framer-motion'

export default function Project({ projectData }) {
  return (
    <motion.div whileHover={{ opacity: 0.7, y: -30 }}>
      <a
        href={projectData.link}
        target='_blank'
        className='project'
        rel='noreferrer'
      >
        <div className='project__number'>0{projectData.id}</div>
        <figure className='project__image'>
          <img src={projectData.image} alt={projectData.name} />
        </figure>
        <h3 className='project__heading'>{projectData.name}</h3>
        <p className='project__description'>{projectData.description}</p>
      </a>
      <a
        href={projectData.link}
        target='_blank'
        className='button__main ghost'
        rel='noreferrer'
      >
        VISIT WEBSITE
      </a>
    </motion.div>
  )
}
