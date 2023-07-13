import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { FactsData } from "@/components/FactsData";
import CommentSection from "@/components/CommentSection";
import React from 'react'

const facts = () => {
  return (
    <>
      <section className=" bg-gray-200 relative">
        <NavBar />
        <h1 className='text-2xl text-center font-bold pt-10 pb-4 uppercase'>Interesting facts about Romania</h1>
       <div className='h-[2px] w-[50%] mx-auto bg-primaryBrown/80 mb-10'></div>
        <ul className='list-none'>
          {FactsData.map((fact) => {
            return (
              <li key={fact.id}>
                <div className="flex flex-col items-center justify-between pb-10">
                  <div className="p-8 text-left text-lg max-w-[800px]">
                    <h3 className="font-semibold text-xl pb-4">{fact.title}</h3>
                    <p> {fact.text} </p>
                  </div>

                  <div>
                    <img
                      alt={fact.alt}
                      src={fact.imageSrc}
                      className="relative w-full  h-[400px] mx-auto  object-cover shadow-xl p-1"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <CommentSection />
      </section>
      <Footer />
    </>
  );
}

export default facts
