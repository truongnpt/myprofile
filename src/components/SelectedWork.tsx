"use client";

import React, { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolioData";

export const SelectedWork: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const { selectedWork } = portfolioData;

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return selectedWork.projects.filter((project) => {
      const title = t(project.title.vi, project.title.en).toLowerCase();
      const company = t(project.company.vi, project.company.en).toLowerCase();
      const description = t(
        project.description.vi,
        project.description.en
      ).toLowerCase();
      const techText = project.technologies.join(" ").toLowerCase();

      const matchesSearch =
        !query ||
        title.includes(query) ||
        company.includes(query) ||
        description.includes(query) ||
        techText.includes(query);

      const matchesFilter =
        !activeFilter || project.technologies.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchQuery, selectedWork.projects, t]);

  return (
    <>
      <div className="projects-toolbar">
        <div className="projects-search-wrap">
          <i className="fas fa-search projects-search__icon" aria-hidden />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              selectedWork.searchPlaceholder.vi,
              selectedWork.searchPlaceholder.en
            )}
            className="projects-search"
            aria-label={t(
              selectedWork.searchPlaceholder.vi,
              selectedWork.searchPlaceholder.en
            )}
          />
        </div>

        <div className="projects-filters" role="group" aria-label={t("Bộ lọc", "Filters")}>
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className={`projects-filter-pill${
              activeFilter === null ? " projects-filter-pill--active" : ""
            }`}
          >
            {t(
              selectedWork.allFilterLabel.vi,
              selectedWork.allFilterLabel.en
            )}
          </button>
          {selectedWork.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() =>
                setActiveFilter((current) =>
                  current === filter ? null : filter
                )
              }
              className={`projects-filter-pill${
                activeFilter === filter ? " projects-filter-pill--active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card__header">
                <span className="project-card__icon" aria-hidden>
                  <i className="fas fa-code" />
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={t("Xem dự án", "View project")}
                  >
                    <i className="fas fa-arrow-up-right-from-square" aria-hidden />
                  </a>
                )}
              </div>

              <h3 className="project-card__title">
                {t(project.title.vi, project.title.en)}
              </h3>
              <p className="project-card__company">
                {t(project.company.vi, project.company.en)}
              </p>
              <p className="project-card__description">
                {t(project.description.vi, project.description.en)}
              </p>

              <div className="project-card__tags">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="projects-empty">
          {t(
            "Không tìm thấy dự án phù hợp.",
            "No projects match your search."
          )}
        </p>
      )}
    </>
  );
};
