"use client";

import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ContactForm } from "@/components/ContactForm";
import { HeroPortrait } from "@/components/HeroPortrait";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { portfolioData } from "@/data/portfolioData";
function HomeContent() {
  const { t, language } = useLanguage();
  const heroRef = useIntersectionObserver();
  const aboutRef = useIntersectionObserver();
  const skillsRef = useIntersectionObserver();
  const strengthsRef = useIntersectionObserver();
  const educationRef = useIntersectionObserver();
  const languagesRef = useIntersectionObserver();
  const experienceRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();

  useSmoothScroll();

  return (
    <>
      <Navigation />

      {/* Main Content */}
      <main id="main" className="bg-white dark:bg-gray-950">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center gradient-bg py-24"
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div ref={heroRef} className="fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span>
                    {t(
                      portfolioData.hero.greeting.vi,
                      portfolioData.hero.greeting.en
                    )}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {t(portfolioData.hero.name.vi, portfolioData.hero.name.en)}
                  </span>
                </h1>
                <div className="text-xl md:text-2xl text-white mb-8 h-8 overflow-hidden w-[250px]">
                  <TypingAnimation
                    text={t(
                      portfolioData.hero.title.vi,
                      portfolioData.hero.title.en
                    )}
                    className="whitespace-nowrap"
                  />
                </div>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  {t(
                    portfolioData.hero.description.vi,
                    portfolioData.hero.description.en
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 smooth-transition text-center capitalize"
                  >
                    {t(
                      portfolioData.hero.buttons.contact.vi,
                      portfolioData.hero.buttons.contact.en
                    )}
                  </a>
                  <a
                    href={portfolioData.hero.buttons.cv[language]}
                    target="_blank"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 smooth-transition text-center capitalize"
                  >
                    {t(
                      portfolioData.hero.buttons.resume.vi,
                      portfolioData.hero.buttons.resume.en
                    )}
                  </a>
                </div>
              </div>
              <div
                ref={heroRef}
                className="slide-up flex justify-center md:justify-end"
              >
                <HeroPortrait />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 capitalize text-gray-900 dark:text-white">
                {t(portfolioData.about.title.vi, portfolioData.about.title.en)}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0f766e] to-[#115e59] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div ref={aboutRef} className="slide-up">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {portfolioData.about.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-3xl font-bold ${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {t(stat.label.vi, stat.label.en)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={aboutRef} className="slide-up">
                <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  {t(
                    portfolioData.about.description1.vi,
                    portfolioData.about.description1.en
                  )}
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  {t(
                    portfolioData.about.description2.vi,
                    portfolioData.about.description2.en
                  )}
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  {t(
                    portfolioData.about.description3.vi,
                    portfolioData.about.description3.en
                  )}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full">
                    <i className="fas fa-envelope mr-2"></i>
                    <span className="block truncate max-w-[179px]">{portfolioData.about.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full">
                    <i className="fas fa-phone mr-2"></i>
                    <span className="block truncate">{portfolioData.about.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span className="block truncate">
                      {t(
                        portfolioData.about.contactInfo.location.vi,
                        portfolioData.about.contactInfo.location.en
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 capitalize text-gray-900 dark:text-white">
                {t(
                  portfolioData.skills.title.vi,
                  portfolioData.skills.title.en
                )}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0f766e] to-[#115e59] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioData.skills.categories.map((category, index) => (
                <div
                  key={index}
                  ref={skillsRef}
                  className="skill-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg smooth-transition"
                >
                  <div className={`${category.iconColor} text-4xl mb-4`}>
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 capitalize text-gray-900 dark:text-white">
                {t(
                  portfolioData.skills.softSkillsTitle.vi,
                  portfolioData.skills.softSkillsTitle.en
                )}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.skills.softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                  >
                    <i
                      className={`${skill.icon} text-3xl ${skill.iconColor} mb-4`}
                    ></i>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      {t(skill.title.vi, skill.title.en)}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(skill.description.vi, skill.description.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outstanding Strengths Section */}
        <section id="strengths" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 capitalize text-gray-900 dark:text-white">
                {t(
                  portfolioData.strengths.title.vi,
                  portfolioData.strengths.title.en
                )}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0f766e] to-[#115e59] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.strengths.strengths.map((strength, index) => (
                <div
                  key={index}
                  ref={strengthsRef}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl smooth-transition group"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`${strength.iconColor} text-3xl flex-shrink-0 group-hover:scale-110 smooth-transition`}
                    >
                      <i className={strength.icon}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                        {t(strength.title.vi, strength.title.en)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {t(strength.description.vi, strength.description.en)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-16">
              <h2 className="mb-4 text-3xl font-bold capitalize text-gray-900 dark:text-white sm:text-4xl">
                {t(
                  portfolioData.experience.title.vi,
                  portfolioData.experience.title.en
                )}
              </h2>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#0f766e] to-[#115e59]"></div>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <div
                className="absolute bottom-2 left-[0.6875rem] top-2 hidden w-0.5 bg-gradient-to-b from-[#0f766e] to-[#115e59] md:block"
                aria-hidden
              />

              <div className="flex flex-col gap-5 sm:gap-6 md:gap-0">
                {portfolioData.experience.items.map((item, index) => (
                  <article
                    key={index}
                    ref={experienceRef}
                    className={`relative md:pb-12 ${index === portfolioData.experience.items.length - 1
                      ? "md:pb-0"
                      : ""
                      }`}
                  >
                    <div
                      className="absolute left-0 top-6 z-10 hidden h-4 w-4 rounded-full border-4 border-white bg-[#0f766e] ring-2 ring-[#0f766e]/20 dark:border-gray-800 dark:ring-[#14b8a6]/30 md:block"
                      aria-hidden
                    />

                    <div className="w-full rounded-xl border border-gray-200/80 border-l-4 border-l-[#0f766e] bg-gray-50 p-4 shadow-md dark:border-gray-700/50 dark:border-l-[#14b8a6] dark:bg-gray-800/90 dark:shadow-black/20 sm:p-6 md:ml-14 md:border md:border-l md:border-gray-200/80 lg:ml-16">
                      <header className="mb-4 space-y-2.5 sm:space-y-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
                          <h3
                            className={`text-lg font-bold leading-snug sm:text-xl ${item.color}`}
                          >
                            {item.title}
                          </h3>
                          <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#0f766e]/10 px-2.5 py-1 text-xs font-medium text-[#064635] dark:bg-[#14b8a6]/15 dark:text-[#14b8a6] sm:text-sm">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 sm:text-base">
                          {item.company}
                        </p>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {t("Dự án", "Project")}:
                          </span>{" "}
                          {item.project}
                        </p>
                      </header>

                      <ul className="space-y-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:space-y-2 sm:text-base">
                        {item.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="pl-0.5 [overflow-wrap:anywhere]"
                            >
                              {t(responsibility.vi, responsibility.en)}
                            </li>
                          )
                        )}
                      </ul>

                      {item.links.length > 0 && (
                        <div className="mt-5 border-t border-gray-200 pt-4 dark:border-gray-700">
                          <p className="mb-2.5 text-sm font-semibold text-gray-800 dark:text-gray-200">
                            {t("Liên kết", "Links")}
                          </p>
                          <ul className="space-y-2">
                            {item.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex max-w-full items-start gap-2 break-all text-sm text-[#0f766e] underline-offset-2 hover:text-[#115e59] hover:underline dark:text-[#14b8a6] dark:hover:text-[#2dd4bf] smooth-transition"
                                >
                                  <i
                                    className="fas fa-external-link-alt mt-1 shrink-0 text-[10px]"
                                    aria-hidden
                                  />
                                  <span>{link}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Languages Section */}
        <section
          id="education-languages"
          className="py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education Section */}
              <div id="education">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 capitalize text-gray-900 dark:text-white">
                    {t(
                      portfolioData.education.title.vi,
                      portfolioData.education.title.en
                    )}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#0f766e] to-[#115e59] mx-auto"></div>
                </div>

                <div className="space-y-6">
                  {portfolioData.education.items.map((item, index) => (
                    <div
                      key={index}
                      ref={educationRef}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl smooth-transition"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#115e59] rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-graduation-cap text-white text-xl"></i>
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-bold ${item.color} mb-2`}
                          >
                            {t(item.institution.vi, item.institution.en)}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {t(item.major.vi, item.major.en)}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages Section */}
              <div id="languages">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 capitalize text-gray-900 dark:text-white">
                    {t(
                      portfolioData.languages.title.vi,
                      portfolioData.languages.title.en
                    )}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#0f766e] to-[#115e59] mx-auto"></div>
                </div>

                <div className="space-y-6">
                  {portfolioData.languages.items.map((item, index) => (
                    <div
                      key={index}
                      ref={languagesRef}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl smooth-transition"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0f766e] to-[#115e59] rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-language text-white text-xl"></i>
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-bold ${item.color} mb-2`}
                          >
                            {t(item.language.vi, item.language.en)}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {t(item.proficiency.vi, item.proficiency.en)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 gradient-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 capitalize">
                {t(
                  portfolioData.contact.title.vi,
                  portfolioData.contact.title.en
                )}
              </h2>
              <p className="text-xl text-gray-200">
                {t(
                  portfolioData.contact.subtitle.vi,
                  portfolioData.contact.subtitle.en
                )}
              </p>
            </div>

            <div className="lg:max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {t(
                    portfolioData.contact.contactInfoTitle.vi,
                    portfolioData.contact.contactInfoTitle.en
                  )}
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold">{t("Email", "Email")}</p>
                      <p className="text-gray-200">
                        <a href={`mailto:${portfolioData.contact.contactInfo.email}`} className="block truncate max-w-[179px] md:max-w-full">{portfolioData.contact.contactInfo.email}</a>
                      </p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {t("Điện thoại", "Phone")}
                      </p>
                      <p className="text-gray-200">
                        <a href={`tel:${portfolioData.contact.contactInfo.phone}`} className="block truncate max-w-[179px]">{portfolioData.contact.contactInfo.phone}</a>
                      </p>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {t("Địa chỉ", "Location")}
                      </p>
                      <p className="text-gray-200">
                        {t(
                          portfolioData.contact.contactInfo.location.vi,
                          portfolioData.contact.contactInfo.location.en
                        )}
                      </p>
                    </div>
                  </div>
                  {/* LinkedIn */}
                  {portfolioData.contact.contactInfo.linkedin && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <i className="fab fa-linkedin text-xl"></i>
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-gray-200 break-all">
                          <a
                            href={portfolioData.contact.contactInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-[#0a66c2] transition-colors"
                          >
                            {portfolioData.contact.contactInfo.linkedin}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Github */}
                  {portfolioData.contact.contactInfo.github && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <i className="fab fa-github text-xl"></i>
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-gray-200 break-all">
                          <a
                            href={portfolioData.contact.contactInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-400 transition-colors"
                          >
                            {portfolioData.contact.contactInfo.github}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>


              <div
                ref={contactRef}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 dark:bg-black dark:border-t dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 capitalize">
              <span className="bg-gradient-to-r from-[#0f766e] to-[#115e59] bg-clip-text text-transparent dark:from-[#14b8a6] dark:to-[#5eead4]">
                {t(portfolioData.footer.name.vi, portfolioData.footer.name.en)}
              </span>
            </div>
            <p className="text-gray-400 mb-6 lg:max-w-lg mx-auto">
              {t(
                portfolioData.footer.description.vi,
                portfolioData.footer.description.en
              )}
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {portfolioData.footer.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center ${link.hoverColor} smooth-transition`}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                {t(
                  portfolioData.footer.copyright.vi,
                  portfolioData.footer.copyright.en
                )}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomeContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
