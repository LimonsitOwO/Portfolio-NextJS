'use client'
import { useState, useEffect } from "react";
import { Wrapper } from "@/components/ui/index";
import experienceData from "@/app/data/experience.json";
import Link from "next/link";

const ITEMS_PER_PAGE_MD = 3;
const ITEMS_PER_PAGE_SM = 1;

export default function Experience() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_SM);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? ITEMS_PER_PAGE_MD : ITEMS_PER_PAGE_SM);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(experienceData.length / itemsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <Wrapper isContent>
      <section id="experience" className="w-full text-text py-[102px]">
        <h1 className="text-4xl font-semibold mb-10 text-center">Experience</h1>
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div key={pageIndex} className="min-w-full flex gap-4 justify-center">
                {experienceData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((experience, index) => (
                  <article
                    key={index}
                    className="flex flex-col bg-secondary rounded-xl w-full md:mx-0 mx-2 md:w-1/3 p-3"
                  >
                    <h1 className="text-[20px] font-semibold text-center">{experience.title}</h1>
                    <p className="text-[12px] font-semibold text-center">{experience.position}</p>
                    <p className="text-[10px] font-normal text-center text-border">{experience.date}</p>
                    <ul className="text-[10px] font-normal list-disc list-inside flex-grow mb-4">
                      {experience.responsibilities.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-col mt-auto">
                      <p className="text-[10px] font-semibold text-center">{experience.skills.join(", ")}</p>
                      {experience.link && (
                        <Link
                          href={experience.link}
                          target="_blank"
                          className="w-[100px] text-[10px] font-medium bg-primary active:bg-hover text-text rounded-full leading-4 mx-auto py-1.5 text-center mt-2 hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300"
                        >
                          Visit the page
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className={`p-2 bg-primary rounded-full ${page === 0 ? "opacity-20 cursor-not-allowed" : ""}`}
          >
            <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300">
              <path d="M16.6666 30.3333L3.33329 17L16.6666 3.66663" stroke="white" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={nextPage}
            disabled={page === totalPages - 1}
            className={`p-2 bg-primary rounded-full ${page === totalPages - 1 ? "opacity-20 cursor-not-allowed" : ""}`}
          >
            <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:drop-shadow-[0_0_8px_#F50057] transition-all duration-300">
              <path d="M3.33325 30.3333L16.6666 17L3.33325 3.66663" stroke="white" strokeWidth="6.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </Wrapper>
  );
}