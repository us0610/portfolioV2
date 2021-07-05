import React from 'react'

import { motion } from 'framer-motion'

// COMPONENTS
import Project from '../components/Project'

import star from '../images/Vector.svg'
// PROJECTS IMAGE
import honeybee from '../images/honeybee.jpg'
import zamira from '../images/zamira.jpg'
import webnovel from '../images/webnovel.jpg'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className='hero__section'>
        <div className='container'>
          {/* HERO TEXT CONTENT */}
          <div className='hero__text__content'>
            <div className='hero__subheading__wrapper'>
              <img src={star} alt='star' className='star' />
              <p className='hero__subheading'>
                Creative Developer and Desinger
              </p>
            </div>
            <h1 className='hero__heading'>
              Create Beautiful Web Presence For Your Brand.
            </h1>
            <p className='sub__hero__para'>
              Hi there 👋🏼! I am Ujjwal Sharma and I create beautiful web
              experiences using latest technologies. Representing yourself on
              web is the most crucial thing to do to get more clients/customers
              and awareness for your brand.📣
            </p>
          </div>
          {/* HERO IMAGE */}
          <div className='hero__image'></div>
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section className='projects' id='projects'>
        <div className='container'>
          <div className='grid-projects'>
            {projects.map((project) => {
              return <Project id={project.id} projectData={project} />
            })}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

const projects = [
  {
    id: 1,
    name: 'Web Novel',
    description: `A web novel created using webflow. Using webflow's CMS system and custom code I was able to achieve such results.`,
    image: webnovel,
    link: '#',
  },

  {
    id: 2,
    name: 'Honey Bee Yourself',
    description: `A dynamic e-commerce website for an artist who sells cool custom vinyl stickers. Webflow was used to develop this site.`,
    image: honeybee,
    link: 'https://www.honeybeeyourself.com/',
  },

  {
    id: 3,
    name: 'Zamira Burns',
    image: zamira,
    description: `An influecer's website created using webflow. This website has cool and complex interactions purely built in webflow.`,
    link: 'https://influencerlist-6e8e25a3fa744a5c9155da42.webflow.io/',
  },
]
