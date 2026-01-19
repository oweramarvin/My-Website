import { useState } from "react";
import {
  FaGithub,
  FaDownload,
  FaFileAlt,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import type { Project } from "../../types/Project";
import { projects } from "../../pages/Projects/ProjectsPage";
import { colors } from "../../colors";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ backgroundColor: colors.background.modal.overlay }}
      onClick={onClose}
    >
      <div
        className="rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{ background: colors.background.modal.content }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 border-b px-6 py-4 flex items-center justify-between z-10"
          style={{
            background: colors.background.modal.content,
            borderColor: colors.border.subtle,
          }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ color: colors.text.title }}
          >
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="transition-colors"
            style={{ color: colors.icon.default }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.text.subtitle)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.icon.default)
            }
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          {project.videoUrl && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <video
                key={project.videoUrl}
                controls
                preload="metadata"
                className="w-full"
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {project.imageUrl && !project.videoUrl && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <p
            className="text-lg mb-4 font-medium"
            style={{ color: colors.text.muted }}
          >
            {project.shortDesc}
          </p>

          <div
            className="leading-relaxed mb-6"
            style={{ color: colors.text.subtitle }}
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: colors.button.accent.background,
                  color: colors.button.accent.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.button.accent.backgroundHover;
                  e.currentTarget.style.boxShadow = colors.glow.soft;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.button.accent.background;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaGithub />
                GitHub
              </a>
            )}

            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: colors.button.primary.background,
                  color: colors.button.primary.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.button.primary.backgroundHover;
                  e.currentTarget.style.boxShadow = colors.glow.soft;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.button.primary.background;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaDownload />
                Download
              </a>
            )}

            {project.documentUrl && (
              <a
                href={project.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: colors.button.accent.background,
                  color: colors.button.accent.text,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.button.accent.backgroundHover;
                  e.currentTarget.style.boxShadow = colors.glow.burgundy;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.button.accent.background;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaFileAlt />
                Documentation
              </a>
            )}

            {project.imageUrl && (
              <a
                href={project.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: colors.button.secondary.background,
                  color: colors.button.secondary.text,
                  border: `1px solid ${colors.button.secondary.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.button.secondary.backgroundHover;
                  e.currentTarget.style.borderColor = colors.button.secondary.borderHover;
                  e.currentTarget.style.boxShadow = colors.glow.soft;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.button.secondary.background;
                  e.currentTarget.style.borderColor = colors.button.secondary.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaExternalLinkAlt />
                View Image
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="projects"
        className="section-padding"
        style={{ background: colors.background.section.primary }}
      >
        <div className="container-max">
          <h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4"
            style={{ color: colors.text.title }}
          >
            My <span className="text-gradient">Projects</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-12"
            style={{
              background: colors.gradient.divider,
            }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden card-hover group cursor-pointer transition-all duration-300"
                style={{ 
                  background: colors.background.card.projects,
                  boxShadow: colors.glow.card,
                }}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.background.card.hover;
                  e.currentTarget.style.boxShadow = colors.glow.cardHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.background.card.projects;
                  e.currentTarget.style.boxShadow = colors.glow.card;
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p 
                      className="text-sm font-medium"
                      style={{ color: colors.text.title }}
                    >
                      Click to learn more
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.text.title }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm line-clamp-3"
                    style={{ color: colors.text.muted }}
                  >
                    {project.shortDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: colors.projects.badge.background,
                          color: colors.projects.badge.text,
                        }}
                      >
                        GitHub
                      </span>
                    )}
                    {project.downloadUrl && (
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: colors.button.accent.background,
                          color: colors.button.accent.text,
                        }}
                      >
                        Download
                      </span>
                    )}
                    {project.documentUrl && (
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          background: colors.button.primary.background,
                          color: colors.button.primary.text,
                        }}
                      >
                        Docs
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
