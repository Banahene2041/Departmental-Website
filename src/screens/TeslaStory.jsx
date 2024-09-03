import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { assets } from "../assets/assets"

const TeslaStory = () => {
  return (
    <>
      <Header />
      <section className='text-[#080872] lg:mx-40 lg:mt-5 pb-[4rem] md:pb-[6rem] lg:pb-[10rem]'>
        <div className='lg:h-[70vh]'>
          <img
            src={assets.pathway}
            className='lg:h-[70vh] object-cover w-full'
            alt=''
          />
        </div>
        <p className='text-xl font-semibold leading-8 my-2 lg:text-[2.1rem] md:text-[1.4rem] mt-8 lg:font-semibold'>
          Tesla Launches New $300M AI Cluster for Advanced Computation
        </p>
        <p className='text-lg mb-6 lg:text-3xl font-normal lg:mb-16'>
          Aug 1, 2024. Source: HPC Wire
        </p>
        <p className='lg:text-2xl lg:leading-10 font-normal text-lg lg:mb-16'>
          Primarily tailored for artificial intelligence (AI) processes, the
          machine will also cater to high-performance computing (HPC) tasks.
          Based on the Nvidia H100 platform, it is expected to be a noteworthy
          addition in the industry. The system is equipped with 10,000 Nvidia
          H100 GPUs, enabling it to potentially reach a peak performance of 340
          FP64 PFLOPS for technical computing and 39.58 INT8 ExaFLOPS for AI
          applications. Tesla’s 340 FP64 PFLOPS is higher than 304 FP64 PFLOPS
          from CINECA’s Leonardo supercomputer, the fourth fastest in the world.
          A significant feature of this new cluster is its focus on bolstering
          Tesla’s full self-driving (FSD) technology. However, with Nvidia
          currently facing supply limitations, Tesla’s foresight is evident.
          They have diversified their approach with a strategic investment in a
          proprietary supercomputer named Dojo, which is anticipated to work in
          tandem with the Nvidia H100 GPU cluster. Credit:
          @SawyerMerritt/Twitter Beyond mere hardware, the computational
          infrastructure is set to provide Tesla with an edge in processing vast
          datasets, critical for real-world AI training scenarios. Elon Musk has
          alluded to the company’s long-term strategy, noting Tesla’s intent to
          direct substantial resources towards AI and FSD training in the
          subsequent years, emphasizing the pivotal role of computing in
          automotive advancements.
        </p>
      </section>
      <Footer />
    </>
  )
}

export default TeslaStory
