import React, { useState } from 'react'
import Modal from 'react-modal'
import Layout from '../components/layout'
import SEO from '../components/seo'
import logo from '../images/logo.jpeg'
import twitter from '../images/twitter.png'
import meetup from '../images/meetup.svg'
import email from '../images/email.png'
import drpg from '../images/drpg.png'
import spinks from '../images/spinks.png'
import wsource from '../images/wsource.jpeg'
import wspace from '../images/ws-logo.png'

function IndexPage () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <SEO title='Home' />
      <div className='flex flex-col mt-8 pb-4 bg-white rounded-lg shadow-lg tracking-wide font-bold'>
        <img alt='STACK CHAT LOGO' className="rounded-lg" src={logo} />
        <h2 className='text-blue text-left md:text-4xl xs:text-2xl pl-6 md:pl-11'> MONTHLY WEB DEVELOPMENT MEETUP</h2>
      </div>
      <div className='mt-6 flex items-center px-6 py-46 bg-white p-4 mx-auto rounded-t-lg w-full overflow-hidden'>
        <div className='text-center flex-grow'>
          <div className='text-left md:pl-6'>
            <p className='text-3xl leading-tight text-blue font-bold'>NEXT EVENT:</p>
            <p className='font-semibold text-lg text-purple'>TUESDAY 24TH SEPTEMBER 2019</p>
          </div>
        </div>
      </div>
      <div className='flex items-center px-6 py-4 bg-white p-4 mx-auto w-full overflow-hidden'>
        <div className='text-center flex-grow'>
          <div className='text-left md:pl-6'>
            <p className='text-blue text-3xl font-bold'>AT:</p>
            <a className='no-underline text-lg font-semibold text-purple' rel="noopener noreferrer" href='https://goo.gl/maps/5XfqxsJMVGw'>STUDIO 212, HARTLEBURY, WORCESTERSHIRE</a>
          </div>
        </div>
      </div>
      <div className='flex items-center px-6 py-4 bg-white p-4 mx-auto w-full rounded-b-lg overflow-hidden'>
        <div className='text-center flex-grow'>
          <div className='text-left md:pl-6'>
            <p className='text-3xl leading-tight text-blue font-bold'>DISCUSSING:</p>
            <p className='font-semibold text-purple text-lg'>DOMAIN DRIVEN DESIGN</p>
            <p className="text-purple italic text-md py-2">In this session you will learn about the patterns described in the Strategic section of the 2004 book, Domain Driven Design: Tackling Complexity at the Heart of Software and how you can use them to help model your high level domains.</p>
            <div className="mb-2 mt-4">
              <a className='py-3 px-8 bg-blue mx-auto rounded-lg w-32 overflow-hidden text-xl text-center font-bold leading-normal text-white hover:bg-dark-blue no-underline' rel="noopener noreferrer" href='https://www.meetup.com/StackChat/events/261505378/' target='_blank'>RSVP</a>
            </div>
            </div>
        </div>
      </div>
      <div className='flex items-center px-6 py-4 bg-white p-4 mx-auto w-full rounded-lg overflow-hidden mt-6'>
        <div className='text-center flex-grow'>
          <div className='text-left md:pl-6'>
            <p className='text-3xl leading-tight text-blue font-bold'>OUR FRIENDS & SPONSORS:</p>
            <a href='https://www.worcestersource.club/' rel="noopener noreferrer" target='_blank'><img src={wsource} alt="worcester source meetup logo" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
            <a href='https://www.drpgroup.com' rel="noopener noreferrer" target='_blank'><img src={drpg} alt="drpg sponsor logo" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
            <a href='https://www.mortimerspinks.com/' rel="noopener noreferrer" target='_blank'><img src={spinks} alt="mortimer spinks sponsor logo" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
            <a href='https://worcester.space/' rel="noopener noreferrer" target='_blank'><img src={wspace} alt="worcester space logo" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
            </div>
        </div>
      </div>
      <a className='mt-6 p-3 bg-blue mx-auto rounded-lg w-full overflow-hidden text-xl text-center font-bold rounded-lg leading-normal text-white hover:bg-dark-blue no-underline' rel="noopener noreferrer" href='https://www.meetup.com/StackChat/' target='_blank'>FIND OUT MORE</a>
      <div className='flex items-center justify-center text-center mt-4 py-4 mx-auto w-full rounded-lg overflow-hidden'>
        <div className='text-left'>
          <a href='https://www.twitter.com/stackchatuk' rel="noopener noreferrer"  target='_blank'><img src={twitter} alt="twitter logo" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
          <a href='https://www.meetup.com/StackChat/' rel="noopener noreferrer" target='_blank'><img src={meetup} alt="meetup link logo" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
          <a href='mailto:contact@stackchat.uk?subject=StackChat Enquiry' rel="noopener noreferrer" target='_blank'><img alt="send email icon" src={email} className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
        </div>
      </div>
      <div className='pt-4 pr-4 w-full text-center'>
        <button value='Code of Conduct' className='font-bold text-white p-4 cursor-pointer underline hover:text-blue' onClick={() => setIsModalOpen(true)}>Code Of Conduct</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Code of Conduct"
        className='m-8 bg-white rounded-lg shadow-lg p-16 max-h-full-minus overflow-y-scroll'
      >
        <div>
          <h1 className='py-2'>Code of Conduct</h1>
          <p>
            All participants of StackChat are expected to
            abide by our Code of Conduct, both online and during
            in-person events that are hosted and/or associated
            with StackChat.
          </p>
          <h2 className='py-2'>The Pledge</h2>
          <p>
            In the interest of fostering an open and welcoming
            environment, we pledge to make participation in our
            project and our community a harassment-free experience
            for everyone, regardless of age, body size, disability,
            ethnicity, gender identity and expression, level of
            experience, nationality, personal appearance, race,
            religion, or sexual identity and orientation.
          </p>
          <h2 className='py-2'>The Standards</h2>
          <p className='font-bold py-2'>
            Examples of behaviour that contributes to creating a
            positive environment include:
          </p>
          <ul>
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain</li>
          </ul>
          <p className='font-bold py-2'>
            Examples of unacceptable behaviour by participants include:
          </p>
          <ul>
            <li>
              Trolling, insulting/derogatory comments, public
              or private harassment
            </li>
            <li>
              Publishing others' private information, such as
              a physical or electronic address, without explicit
              permission
            </li>
            <li>
              Not being respectful to reasonable communication
              boundaries, such as 'leave me alone,' 'go away,'
              or 'I’m not discussing this with you.'
            </li>
            <li>The usage of sexualised language or imagery and unwelcome sexual attention or advances</li>

            <li>Demonstrating the graphics or any other content you know may be considered disturbing</li>
            <li>Starting and/or participating in arguments related to politics</li>
            <li>Assuming or promoting any kind of inequality including but not limited to: age, body size, disability,
              ethnicity, gender identity and expression, nationality and race, personal appearance, religion, or sexual
              identity and orientation
            </li>
            <li>Drug promotion of any kind</li>
            <li>Attacking personal tastes</li>
            <li>
              Other conduct which you know could reasonably be
              considered inappropriate in a professional setting.
            </li>
          </ul>

          <h2 className='py-2'>Enforcement</h2>
          <p>
            Violations of the Code of Conduct may be reported by
            sending an email to <a href="mailto:abuse@stackchat.uk">abuse@stackchat.uk</a>. All reports will be
            reviewed and investigated and will result in a response
            that is deemed necessary and appropriate to the
            circumstances. Further details of specific enforcement
            policies may be posted separately.
          </p>
          <p>
            We hold the right and responsibility to remove comments
            or other contributions that are not aligned to this
            Code of Conduct, or to ban temporarily or permanently
            any members for other behaviours that they deem inappropriate,
            threatening, offensive, or harmful.
          </p>

          <h2 className='py-2 text-uppercase'>Attribution</h2>
          <p>
            This Code of Conduct is adapted from <a href="https://dev.to/code-of-conduct">dev.to</a>.
          </p>

          <button className='hover:bg-dark-blue mt-4 rounded-lg shadow-lg bg-blue text-white font-bold py-4 px-8' onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </Layout>
  )
}

export default IndexPage
