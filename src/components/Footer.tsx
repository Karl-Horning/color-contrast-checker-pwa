import { FaGithub, FaLinkedin, FaGlobe, FaCodepen } from "react-icons/fa";

/**
 * Global site footer with author attribution and social links.
 *
 * Renders:
 * - A short message with author credit
 * - Links to external profiles (personal site, GitHub, LinkedIn, CodePen)
 * - A dynamic copyright notice
 *
 * The social links are presented with accessible labels and focus styles
 * to ensure good usability in both light and dark modes.
 *
 * @returns A styled `<footer>` element with attribution, links, and copyright.
 */
export default function Footer() {
    const year = new Date().getFullYear();

    const links = [
        {
            href: "https://www.karlhorning.dev/",
            label: "Personal site",
            icon: <FaGlobe />,
        },
        {
            href: "https://github.com/Karl-Horning",
            label: "GitHub",
            icon: <FaGithub />,
        },
        {
            href: "https://www.linkedin.com/in/karl-horning/",
            label: "LinkedIn",
            icon: <FaLinkedin />,
        },
        {
            href: "https://codepen.io/karlhorning",
            label: "CodePen",
            icon: <FaCodepen />,
        },
    ];

    return (
        <footer className="mt-12 border-t border-slate-200 dark:border-slate-700">
            <div className="mx-auto max-w-3xl space-y-3 px-4 py-6">
                <p className="text-center text-slate-800 dark:text-slate-200">
                    Made with <span aria-hidden="true">❤️</span>
                    <span className="sr-only">love</span> by Karl Horning
                </p>

                {/* Social links */}
                <nav
                    aria-label="Social links"
                    className="flex justify-center gap-4"
                >
                    {links.map(({ href, label, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={[
                                "text-slate-600 hover:text-slate-900",
                                "dark:text-slate-400 dark:hover:text-slate-200",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2",
                                "ring-offset-white dark:ring-offset-slate-900",
                                "transition-colors motion-safe:duration-150",
                                "text-lg",
                            ].join(" ")}
                        >
                            {icon}
                        </a>
                    ))}
                </nav>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                    © {year} Karl Horning. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
