/**
 * Joins class names, skipping falsy values: cx("card", open && "open").
 * Use this instead of `${a}${cond ? " b" : ""}` — Prettier's Tailwind plugin trims the leading
 * space in those strings, which silently glues class names together.
 */
export const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");
