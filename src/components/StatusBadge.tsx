import iconPass from "../assets/iconPass.svg";
import iconFail from "../assets/iconFail.svg";

/**
 * Props for the {@link StatusBadge} component.
 */
interface StatusBadgeProps {
    /** Indicates the status type to display. Accepts `"pass"` or `"fail"`. */
    status: "pass" | "fail";
    /** Optional extra classes for layout tweaks where used. */
    className?: string;
}

/**
 * Renders a coloured badge with an icon and label representing either a "pass" or "fail" status.
 *
 * This is used to visually indicate the result of a contrast check.
 *
 * @param {StatusBadgeProps} props - The component props
 * @returns A badge element styled according to the status
 */
export default function StatusBadge({
    status,
    className = "",
}: StatusBadgeProps) {
    const variants = {
        pass: {
            bg: "bg-emerald-100 dark:bg-emerald-900/30",
            text: "text-emerald-800 dark:text-emerald-300",
            border: "border-emerald-200 dark:border-emerald-800",
            label: "Pass",
            icon: iconPass,
        },
        fail: {
            bg: "bg-rose-100 dark:bg-rose-900/30",
            text: "text-rose-800 dark:text-rose-300",
            border: "border-rose-200 dark:border-rose-800",
            label: "Fail",
            icon: iconFail,
        },
    } as const;

    const { bg, text, border, label, icon } = variants[status];

    return (
        <span
            className={[
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium",
                "border shadow-sm",
                bg,
                text,
                border,
                className,
            ].join(" ")}
            // Helpful native tooltip, especially when truncated in tight layouts
            title={label}
        >
            <img
                src={icon}
                className="pointer-events-none h-4 w-4 select-none"
                draggable="false"
                alt=""
                aria-hidden="true"
            />
            <span>{label}</span>
        </span>
    );
}
