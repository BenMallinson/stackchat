import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo.jpeg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="StackChat - Home"
      />
      <div className='flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-lg tracking-wide font-bold'>
        <img className='pt-4' alt='STACK CHAT LOGO' src={logo}/>
        <h2 className='text-purple text-3xl'> MONTHLY WEB DEVELOPMENT MEETUP</h2>
        <div className="mt-6 bg-black mx-auto rounded-b-lg w-full overflow-hidden">
  <div className="flex items-center px-6 py-6">
    <div className="text-center flex-grow">
      <div className="mb-4 text-left pl-6">
        <p className="text-3xl leading-tight text-blue font-bold">NEXT EVENT: <span className='font-semibold text-purple'>THURSDAY 28TH MARCH 2019</span></p>
        <p className='text-blue text-2xl'><a className='no-underline text-blue font-bold' href='https://goo.gl/maps/5XfqxsJMVGw'>HOSTED AT:  <span className='font-semibold text-purple'>STUDIO 212, HARTLEBURY, WORCESTERSHIRE</span></a></p>
        <p className="text-xl leading-tight text-blue font-bold pb-2">DISCUSSING: <span className='font-semibold text-purple'>AGILE</span> & <span className='font-semibold text-purple'>REACT HOOKS</span></p>
      </div>
      <div>
        <a className="text-lg font-bold rounded-lg px-6 py-2 mt-2 leading-normal bg-white text-purple hover:bg-purple hover:text-white no-underline" href='https://www.meetup.com/StackChat/' target='_blank'>FIND OUT MORE</a>
      </div>
    </div>
    </div></div>
    </div>

    </Layout>
  )
}

export default IndexPage;
