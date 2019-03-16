import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import logo from '../images/logo.jpeg'
import twitter from '../images/twitter.png'
import meetup from '../images/meetup.svg'
import email from '../images/email.png'

function IndexPage () {
  return (
    <Layout>
      <SEO title='StackChat - Home' />
      <div className='flex flex-col p-4 items-center justify-center bg-white rounded-lg shadow-lg tracking-wide font-bold'>
        <img alt='STACK CHAT LOGO' src={logo} />
        <h2 className='text-purple text-left text-4xl'> MONTHLY WEB DEVELOPMENT MEETUP</h2>
      </div>
      <div className='mt-6 flex items-center px-6 py-46 bg-white p-4 mx-auto rounded-t-lg w-full overflow-hidden'>
        <div className='text-center flex-grow'>
          <div className='text-left pl-6'>
            <p className='text-3xl leading-tight text-blue font-bold'>NEXT EVENT:</p>
            <p className='font-semibold text-lg text-purple'>THURSDAY 28TH MARCH 2019</p>
          </div>
        </div>
      </div>
      <div className='flex items-center px-6 py-4 bg-white p-4 mx-auto w-full overflow-hidden'>
        <div className='text-center flex-grow'>
          <div className='text-left pl-6'>
            <p className='text-blue text-3xl font-bold'>AT:</p>
            <a className='no-underline text-lg font-semibold text-purple' href='https://goo.gl/maps/5XfqxsJMVGw'>STUDIO 212, HARTLEBURY, WORCESTERSHIRE</a>
          </div>
        </div>
      </div>
      <div className='flex items-center px-6 py-4 bg-white p-4 mx-auto w-full rounded-b-lg overflow-hidden'>
        <div className='text-center flex-grow'>
          <div className='text-left pl-6'>
            <p className='text-3xl leading-tight text-blue font-bold'>DISCUSSING:</p>
            <p className='font-semibold text-purple text-lg'>AGILE & REACT HOOKS</p>
          </div>
        </div>
      </div>
      <a className='mt-6 p-3 bg-white mx-auto rounded-lg w-full overflow-hidden text-xl text-center font-bold rounded-lg leading-normal bg-white text-purple hover:bg-blue hover:text-white no-underline' href='https://www.meetup.com/StackChat/' target='_blank'>FIND OUT MORE</a>
      <div className='flex items-center justify-center text-center mt-4 py-4 mx-auto w-full rounded-lg overflow-hidden'>
        <div className='text-left'>
          <a href='https://www.twitter.com/stackchatuk' target='_blank'><img src={twitter} alt="twitter icon" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
          <a href='https://www.meetup.com/StackChat/' target='_blank'><img src={meetup} alt="meetup link icon" className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
          <a href='mailto:contact@stackchat.uk&subject=StackChat Enquiry' target='_blank'><img alt="send email icon" src={email} className='social-img max-w-sm max-h-sm h-16 m-2' /></a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage