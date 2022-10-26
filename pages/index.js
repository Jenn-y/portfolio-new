import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ProfilePicture from "../components/ProfilePicture";
import AboutMe from "../components/AboutMe";
import WorkTimeline from "../components/WorkTimeline";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import AwardSection from "../components/AwardSection";
import ProjectSection from "../components/ProjectSection";
import ResearchSection from "../components/ResearchSection";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Projects");

  const tabs = [
    "Projects",
    "Work Experience",
    "Education",
    "Research Experience",
    "Awards",
    "Contact",
  ];

  const getActiveSection = () => {
    switch (activeTab) {
      case "Work Experience":
        return <WorkTimeline />;
      case "Education":
        return <EducationSection />;
      case "Research Experience":
        return <ResearchSection />;
      case "Awards":
        return <AwardSection />;
      case "Contact":
        return <ContactSection />;

      default:
        return <ProjectSection />;
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jenn Portfolio</title>
        <meta name="description" content="my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-[90vh]">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-start relative z-0">
            <ProfilePicture className="basis-2/3 flex-1" />
            <AboutMe className="basis-1/3 flex-1" />
          </div>
        </section>

        <div className="flex flex-row justify-between items-center font-chivo gap-[2px] border-b">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`py-2 basis-1/5 flex-1 shadow-lg rounded ${
                  activeTab == tab
                    ? "bg-rose-400 text-white"
                    : "text-cyan-600 hover:bg-gradient-to-bl from-rose-100 to-cyan-100 dark:text-white dark:hover:text-cyan-600"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <section>{getActiveSection()}</section>
      </main>
    </div>
  );
}
