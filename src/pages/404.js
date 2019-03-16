import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from '../images/logo.jpeg'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className='flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-lg tracking-wide font-bold'>
        <img className='pt-4 max-w-sm' alt='STACK CHAT LOGO' src={logo}/>
        <h2 className="bg-yellow inline-block my-8 p-3 uppercase">
          Looks like this page doesn't exist yet...
        </h2>
        <a className="text-lg font-bold rounded-lg px-6 py-2 my-2 leading-normal bg-blue text-white hover:bg-purple hover:text-white no-underline" href='/'>BACK TO SAFETY</a>
      </div>
    </Layout>
  )
}

export default NotFoundPage;
