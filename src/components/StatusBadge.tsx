import iconPass from "../assets/iconPass.svg";
import iconFail from "../assets/iconFail.svg";

/**
 * Props for the {@link StatusBadge} component.
 */
interface StatusBadgeProps {
    /** Indicates the status type to display. Accepts `"pass"` or `"fail"`. */
    status: "pass" | "fail";
}

/**
 * Renders a coloured badge with an icon and label representing either a "pass" or "fail" status.
 *
 * This is used to visually indicate the result of a contrast check.
 *
 * @param {StatusBadgeProps} props - The component props
 * @returns A badge element styled according to the status
 */
export default function StatusBadge({ status }: StatusBadgeProps) {
    const statuses = {
        pass: {
            bg: "bg-green-100",
            text: "text-green-700",
            label: "Pass",
            icon: iconPass,
        },
        fail: {
            bg: "bg-red-100",
            text: "text-red-700",
            label: "Fail",
            icon: iconFail,
        },
    };

    const { bg, text, label, icon } = statuses[status];

    return (
        <span
            className={`flex items-center gap-1 rounded px-2 py-1 text-sm ${bg} ${text}`}
        >
            <img
                src={icon}
                className="pointer-events-none h-4 w-4 select-none"
                draggable="false"
                alt=""
                aria-hidden="true"
            />
            {label}
        </span>
    );
}
