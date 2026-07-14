"use client";

import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { SelectedWork } from "@/components/SelectedWork";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
function HomeContent() {
  const { t, language } = useLanguage();
  const heroRef = useIntersectionObserver();
  const selectedWorkRef = useIntersectionObserver();
  const personalProjectRef = useIntersectionObserver();
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
          className="hero-section flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32"
        >
          <NeuralNetworkBackground />
          <div className="hero-section__glow" aria-hidden />

          <div
            ref={heroRef}
            className="fade-in relative z-10 mx-auto w-full max-w-3xl text-center"
          >
            <div className="hero-availability mb-8 hero-interactive">
              <span className="hero-availability__dot" aria-hidden />
              {t(
                portfolioData.hero.availability.vi,
                portfolioData.hero.availability.en
              )}
            </div>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {t(portfolioData.hero.greeting.vi, portfolioData.hero.greeting.en)}
            </p>

            <h1 className="hero-name text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              {t(portfolioData.hero.name.vi, portfolioData.hero.name.en)}
            </h1>

            <p className="hero-role mt-4 text-base sm:text-lg">
              <span className="hero-role__title font-medium text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
                {t(portfolioData.hero.title.vi, portfolioData.hero.title.en)}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-500 dark:text-gray-400">
                {portfolioData.hero.yearsExperience}{" "}
                {t("năm", "years")}
              </span>
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              {t(
                portfolioData.hero.shortDescription.vi,
                portfolioData.hero.shortDescription.en
              )}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={portfolioData.hero.buttons.cv[language]}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-primary w-full sm:w-auto"
              >
                <i className="fas fa-download text-sm" aria-hidden />
                {t(
                  portfolioData.hero.buttons.resume.vi,
                  portfolioData.hero.buttons.resume.en
                )}
              </a>
              <a href="#contact" className="hero-btn-secondary w-full sm:w-auto">
                <i className="fas fa-envelope text-sm" aria-hidden />
                {t(
                  portfolioData.hero.buttons.contact.vi,
                  portfolioData.hero.buttons.contact.en
                )}
              </a>
            </div>

            <p className="hero-location mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              <i className="fas fa-map-marker-alt" aria-hidden />
              {t(
                portfolioData.about.contactInfo.location.vi,
                portfolioData.about.contactInfo.location.en
              )}
              , {t("Việt Nam", "Vietnam")}
            </p>

            <div className="hero-stats mx-auto mt-10 max-w-3xl">
              {portfolioData.about.stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="hero-stat__value">{stat.value}</div>
                  <div className="hero-stat__label">
                    {t(stat.label.vi, stat.label.en)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section py-20 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div ref={aboutRef} className="slide-up mb-12 text-center sm:mb-14">
              <span className="about-badge mb-5">
                # {t("GIỚI THIỆU", "ABOUT")}
              </span>
              <h2 className="about-headline">
                {t(
                  portfolioData.about.headline.vi,
                  portfolioData.about.headline.en
                )}
              </h2>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
              <div ref={aboutRef} className="slide-up space-y-5">
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {t(
                    portfolioData.about.description1.vi,
                    portfolioData.about.description1.en
                  )}
                </p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {t(
                    portfolioData.about.description2.vi,
                    portfolioData.about.description2.en
                  )}
                </p>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {t(
                    portfolioData.about.description3.vi,
                    portfolioData.about.description3.en
                  )}
                </p>
              </div>

              <div ref={aboutRef} className="slide-up space-y-3">
                {portfolioData.about.highlights.map((item, index) => (
                  <div key={index} className="about-highlight">
                    <i
                      className={`${item.icon} about-highlight__icon`}
                      aria-hidden
                    />
                    <p className="text-sm font-medium leading-relaxed text-gray-800 dark:text-gray-200 sm:text-[0.9375rem]">
                      {t(item.text.vi, item.text.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section py-20 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div ref={skillsRef} className="slide-up mb-12 text-center sm:mb-14">
              <span className="skills-badge mb-5">
                <i className="fas fa-sparkles text-[10px]" aria-hidden />
                {t("KỸ NĂNG", "SKILLS")}
              </span>
              <h2 className="skills-headline">
                {t(
                  portfolioData.skills.headline.vi,
                  portfolioData.skills.headline.en
                )}
              </h2>
              <p className="skills-subtitle mx-auto max-w-xl">
                {t(
                  portfolioData.skills.subtitle.vi,
                  portfolioData.skills.subtitle.en
                )}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioData.skills.categories.map((category, index) => (
                <div
                  key={index}
                  ref={skillsRef}
                  className="skill-category-card"
                >
                  <div className="skill-category-card__decor" aria-hidden />
                  <div className="skill-category-card__icon">
                    <i className={category.icon} aria-hidden />
                  </div>
                  <h3 className="skill-category-card__title">{category.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mt-16 sm:mt-20">
              <h3 className="mb-8 text-center text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                {t(
                  portfolioData.skills.softSkillsTitle.vi,
                  portfolioData.skills.softSkillsTitle.en
                )}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioData.skills.softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-category-card text-center"
                  >
                    <div className="skill-category-card__decor" aria-hidden />
                    <div className="skill-category-card__icon mx-auto">
                      <i className={skill.icon} aria-hidden />
                    </div>
                    <h4 className="skill-category-card__title">
                      {t(skill.title.vi, skill.title.en)}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {t(skill.description.vi, skill.description.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outstanding Strengths Section */}
        <section id="strengths" className="strengths-section py-20 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div ref={strengthsRef} className="slide-up mb-12 text-center sm:mb-14">
              <span className="strengths-badge mb-5">
                # {t("ĐIỂM MẠNH", "STRENGTHS")}
              </span>
              <h2 className="strengths-headline">
                {t(
                  portfolioData.strengths.headline.vi,
                  portfolioData.strengths.headline.en
                )}
              </h2>
            </div>

            <div ref={strengthsRef} className="slide-up strengths-panel">
              <div className="strengths-grid">
                {portfolioData.strengths.strengths.map((strength, index) => (
                  <div key={index} className="strength-cell">
                    <div className="strength-cell__icon">
                      <i className={strength.icon} aria-hidden />
                    </div>
                    <h3 className="strength-cell__title">
                      {t(strength.title.vi, strength.title.en)}
                    </h3>
                    <p className="strength-cell__desc">
                      {t(strength.description.vi, strength.description.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section py-20 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div ref={experienceRef} className="slide-up mb-12 text-center sm:mb-14">
              <span className="experience-badge mb-5">
                <i className="fas fa-sparkles text-[10px]" aria-hidden />
                {t("KINH NGHIỆM", "EXPERIENCE")}
              </span>
              <h2 className="experience-headline">
                {t(
                  portfolioData.experience.headline.vi,
                  portfolioData.experience.headline.en
                )}
              </h2>
              <p className="experience-subtitle mx-auto max-w-2xl">
                {t(
                  portfolioData.experience.subtitle.vi,
                  portfolioData.experience.subtitle.en
                )}
              </p>
            </div>

            <div className="experience-timeline">
              <div className="experience-timeline__line" aria-hidden />

              {portfolioData.experience.items.map((item, index) => {
                const isRight = index % 2 === 0;
                const primaryLink = item.links[0];

                return (
                  <article
                    key={index}
                    ref={experienceRef}
                    className={`experience-row ${isRight ? "experience-row--right" : "experience-row--left"}`}
                  >
                    <div className="experience-dot" aria-hidden />

                    <div className="experience-meta">
                      <p className="experience-period">{item.period}</p>
                      <p className="experience-company">{item.company}</p>
                    </div>

                    <div className="experience-card-wrap">
                      <div className="experience-card">
                        {primaryLink && (
                          <a
                            href={primaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-card__link"
                            aria-label={t("Xem dự án", "View project")}
                          >
                            <i className="fas fa-arrow-up-right-from-square text-xs" aria-hidden />
                          </a>
                        )}

                        <h3 className="experience-card__title">{item.title}</h3>
                        <p className="experience-card__project">{item.project}</p>

                        <ul className="experience-card__list mt-4 space-y-2">
                          {item.responsibilities.map((resp, ri) => (
                            <li key={ri} className="[overflow-wrap:anywhere]">
                              {t(resp.vi, resp.en).replace(/^[•·]\s*/, "")}
                            </li>
                          ))}
                        </ul>

                        <div className="experience-tags">
                          {item.technologies.map((tech, ti) => (
                            <span key={ti} className="experience-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education & Languages Section */}
        <section id="education-languages" className="edu-lang-section py-20 sm:py-24">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div id="education" ref={educationRef} className="slide-up edu-lang-card">
                <p className="edu-lang-label">
                  {t("HỌC VẤN", "EDUCATION")}
                </p>
                {portfolioData.education.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="edu-lang-title">
                      {t(item.institution.vi, item.institution.en)}
                    </h3>
                    <p className="edu-lang-detail">
                      {t(item.major.vi, item.major.en)}
                    </p>
                    <p className="edu-lang-period">{item.period}</p>
                  </div>
                ))}
              </div>

              <div id="languages" ref={languagesRef} className="slide-up edu-lang-card">
                <p className="edu-lang-label">
                  {t("NGÔN NGỮ", "LANGUAGES")}
                </p>
                {portfolioData.languages.items.map((item, index) => (
                  <div
                    key={index}
                    className={index > 0 ? "edu-lang-entry" : ""}
                  >
                    <h3 className="edu-lang-title">
                      {t(item.language.vi, item.language.en)}
                    </h3>
                    <p className="edu-lang-detail">
                      {t(item.proficiency.vi, item.proficiency.en)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Project — KinderCRM */}
        <section id="personal-project" className="personal-project-section">
          <div className="personal-project-section__grid" aria-hidden />
          <div className="personal-project-section__glow" aria-hidden />

          <div
            ref={personalProjectRef}
            className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"
          >
            <div className="slide-up personal-project__intro">
              <span className="personal-project-badge">
                {t(
                  portfolioData.personalProject.badge.vi,
                  portfolioData.personalProject.badge.en
                )}
              </span>

              <h2 className="personal-project-brand">
                {portfolioData.personalProject.brand}
              </h2>

              <p className="personal-project-title">
                {t(
                  portfolioData.personalProject.title.vi,
                  portfolioData.personalProject.title.en
                )}
              </p>

              <p className="personal-project-desc">
                {t(
                  portfolioData.personalProject.description.vi,
                  portfolioData.personalProject.description.en
                )}
              </p>

              <div className="personal-project-techs">
                {portfolioData.personalProject.technologies.map((tech) => (
                  <span key={tech} className="personal-project-tech">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={portfolioData.personalProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="personal-project-cta"
              >
                {t(
                  portfolioData.personalProject.cta.vi,
                  portfolioData.personalProject.cta.en
                )}
                <i className="fas fa-arrow-up-right-from-square text-xs" aria-hidden />
              </a>
            </div>
          </div>

          <div className="slide-up personal-project-banner-wrap">
            <a
              href={portfolioData.personalProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="personal-project-banner-link"
              aria-label={t(
                `Xem ${portfolioData.personalProject.brand}`,
                `View ${portfolioData.personalProject.brand}`
              )}
            >
              <Image
                src={portfolioData.personalProject.image}
                alt={t(
                  portfolioData.personalProject.title.vi,
                  portfolioData.personalProject.title.en
                )}
                width={1920}
                height={1080}
                className="personal-project-banner"
                sizes="100vw"
                priority={false}
              />
            </a>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="selected-work" className="projects-section py-20 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div ref={selectedWorkRef} className="slide-up mb-12 text-center sm:mb-14">
              <span className="projects-badge mb-5">
                🚀 {t("DỰ ÁN", "PROJECTS")}
              </span>
              <h2 className="projects-headline">
                {t(
                  portfolioData.selectedWork.headline.vi,
                  portfolioData.selectedWork.headline.en
                )}
              </h2>
              <p className="projects-subtitle mx-auto max-w-2xl">
                {t(
                  portfolioData.selectedWork.subtitle.vi,
                  portfolioData.selectedWork.subtitle.en
                )}
              </p>
            </div>

            <div ref={selectedWorkRef} className="slide-up">
              <SelectedWork />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section py-20 sm:py-24">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div ref={contactRef} className="slide-up mb-12 text-center sm:mb-14">
              <span className="contact-badge mb-5">
                # {t("LIÊN HỆ", "CONTACT")}
              </span>
              <h2 className="contact-headline">
                {t(
                  portfolioData.contact.headline.vi,
                  portfolioData.contact.headline.en
                )}
              </h2>
              <p className="contact-subtitle mx-auto max-w-2xl">
                {t(
                  portfolioData.contact.subtitle.vi,
                  portfolioData.contact.subtitle.en
                )}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div ref={contactRef} className="slide-up space-y-3">
                {[
                  {
                    icon: "fas fa-envelope",
                    label: "EMAIL",
                    value: portfolioData.contact.contactInfo.email,
                    href: `mailto:${portfolioData.contact.contactInfo.email}`,
                  },
                  {
                    icon: "fas fa-envelope",
                    label: t("EMAIL PHỤ", "SECONDARY"),
                    value: portfolioData.contact.contactInfo.secondaryEmail,
                    href: `mailto:${portfolioData.contact.contactInfo.secondaryEmail}`,
                  },
                  {
                    icon: "fas fa-phone",
                    label: t("ĐIỆN THOẠI", "PHONE"),
                    value: portfolioData.contact.contactInfo.phone,
                    href: `tel:${portfolioData.contact.contactInfo.phone}`,
                  },
                  {
                    icon: "fab fa-linkedin",
                    label: "LINKEDIN",
                    value: "truongnguyen1998",
                    href: portfolioData.contact.contactInfo.linkedin,
                  },
                  {
                    icon: "fab fa-github",
                    label: "GITHUB",
                    value: "truongnpt",
                    href: portfolioData.contact.contactInfo.github,
                  },
                  {
                    icon: "fas fa-map-marker-alt",
                    label: t("ĐỊA CHỈ", "LOCATION"),
                    value: `${t(
                      portfolioData.contact.contactInfo.location.vi,
                      portfolioData.contact.contactInfo.location.en
                    )}, ${t("Việt Nam", "Vietnam")}`,
                  },
                ].map((item, index) => (
                  <div key={index} className="contact-info-card">
                    <span className="contact-info-card__icon">
                      <i className={item.icon} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="contact-info-card__label">{item.label}</p>
                      <p className="contact-info-card__value">
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="smooth-transition hover:text-[var(--color-primary)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div ref={contactRef} className="slide-up contact-form-panel">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="site-footer__main">
            <div className="site-footer__brand">
              <a href="#home" className="site-footer__logo" aria-label={t("Về đầu trang", "Back to home")}>
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full shadow-md shadow-teal-700/30 ring-3 ring-[#0f766e] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10 dark:ring-[#14b8a6]/25">
            <Image
              src="/images/hero.png"
              alt={t(portfolioData.hero.name.vi, portfolioData.hero.name.en)}
              fill
              sizes="40px"
              className="object-cover object-[center_18%]"
              priority
            />
          </span>
              </a>
              <h2 className="site-footer__name">
                {t(portfolioData.footer.name.vi, portfolioData.footer.name.en)}
              </h2>
              <p className="site-footer__role">
                {t(portfolioData.hero.title.vi, portfolioData.hero.title.en)}
              </p>
              <p className="site-footer__desc">
                {t(
                  portfolioData.footer.description.vi,
                  portfolioData.footer.description.en
                )}
              </p>
            </div>

            <div>
              <p className="site-footer__label">
                {t("Điều hướng", "Navigation")}
              </p>
              <ul className="site-footer__links !grid grid-cols-2 gap-2">
                {portfolioData.navigation.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="site-footer__link">
                      {t(link.vi, link.en)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="site-footer__label">
                {t("Kết nối", "Connect")}
              </p>
              <div className="site-footer__social">
                {portfolioData.footer.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="site-footer__social-link"
                    aria-label={t(link.label.vi, link.label.en)}
                  >
                    <i className={link.icon} aria-hidden />
                  </a>
                ))}
              </div>
              <a href="#contact" className="site-footer__cta">
                {t("Liên hệ", "Get in touch")}
                <i className="fas fa-arrow-right text-xs" aria-hidden />
              </a>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p>
              {t(
                portfolioData.footer.copyright.vi,
                portfolioData.footer.copyright.en
              )}
            </p>
            <a href="#home" className="site-footer__back-top">
              {t("Về đầu trang", "Back to top")}
              <i className="fas fa-arrow-up text-xs" aria-hidden />
            </a>
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
