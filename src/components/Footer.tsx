import { BsInfoSquareFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaCodepen, FaRss } from "react-icons/fa";

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

    const socialLinks = [
        {
            href: "https://www.karlhorning.dev/",
            label: "Personal site",
            icon: <BsInfoSquareFill />,
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
        {
            href: "https://www.karlhorning.dev/rss.xml",
            label: "RSS Feed",
            icon: <FaRss />,
        },
    ];

    return (
        <footer
            id="footer"
            className="border-t border-slate-200 py-10 text-center text-slate-600 dark:border-slate-800 dark:text-slate-400"
            role="contentinfo"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 md:flex-row">
                <p className="text-sm" aria-label="Copyright notice">
                    &copy; {year} Made with ❤️ by{" "}
                    <a
                        href="https://www.karlhorning.dev"
                        className="underline hover:text-pink-600"
                    >
                        Karl Horning
                    </a>
                    .
                </p>
                <nav
                    aria-label="Social media links"
                    className="mt-4 flex space-x-6 md:mt-0"
                >
                    {socialLinks.map(({ label, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="hover:text-primary rounded p-1 text-4xl text-slate-600 transition-colors duration-300 hover:text-pink-600 md:text-xl dark:text-slate-400"
                            target={
                                href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                                href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            type={
                                label.startsWith("RSS")
                                    ? "application/rss+xml"
                                    : undefined
                            }
                        >
                            {icon}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
