import React from "react";

/**
 * Generic card for showcasing a project. Accepts props for image, title,
 * overview bullet points, tech stack string, and links.
 *
 * This component is fully responsive and uses Tailwind utility classes to
 * avoid repeating markup between project entries.  A parent container can
 * pass in an array of items and render several <ProjectCard /> instances.
 */
const ProjectCard = ({
  title,
  image,
  alt,
  points = [],
  tech = "",
  github,
  live,
}) => {
  return (
    <article className="relative max-w-3xl mx-auto w-full bg-gray-100 rounded-3xl shadow-xl overflow-hidden mb-12 flex flex-col md:flex-row">
      {/* Left side image */}
      <div className="flex-shrink-0 md:w-1/3 relative">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{title}</h2>

        {points.length > 0 && (
          <ul className="text-gray-600 text-sm md:text-base space-y-2 mb-4 list-disc pl-5">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}

        {tech && (
          <p className="text-sm md:text-base font-semibold text-gray-700 mb-4">
            {tech}
          </p>
        )}

        <div className="flex gap-4 text-2xl md:text-4xl text-black">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub`}
              className="hover:text-teal-600 transition-colors"
            >
              <i className="ri-github-fill"></i>
              <span className="sr-only">GitHub</span>
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="hover:text-teal-600 transition-colors"
            >
              <i className="ri-links-fill"></i>
              <span className="sr-only">Live</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
