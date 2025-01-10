import type { FormKitNode } from "@formkit/core";

export function rootClasses(
  sectionName: string,
  node: FormKitNode
): Record<string, boolean> {
  const key = `${node.props.type}__${sectionName}`;
  const semanticKey = `formkit-${sectionName}`;
  const familyKey = node.props.family
    ? `family:${node.props.family}__${sectionName}`
    : "";
  const memoKey = `${key}__${familyKey}`;
  if (!(memoKey in classes)) {
    const sectionClasses = classes[key] ?? globals[sectionName] ?? {};
    sectionClasses[semanticKey] = true;
    if (familyKey in classes) {
      classes[memoKey] = { ...classes[familyKey], ...sectionClasses };
    } else {
      classes[memoKey] = sectionClasses;
    }
  }
  return classes[memoKey] ?? { [semanticKey]: true };
}

const classes: Record<string, Record<string, boolean>> = {
  "family:button__input": {
    "appearance-none": true,
    "font-normal": true,
    "rounded-lg": true,
    "outline-none": true,
    "mt-4": true,
    "px-7": true,
    "py-3": true,
    "[@media(max-width:431px)]:w-[-webkit-fill-available]": true,
    "[@media(min-width:431px)]:w-96": true,
    "flex": true,
    "items-center": true,
    "justify-center": true,
    "text-[18px]": true,
    "border": true,
    "bg-violet-900": true,
    "text-white": true
  },
  "family:text__wrapper": {
    "flex": true,
    "flex-col": true,
    "items-start": true,
    "justify-start": true,
    "mb-1.5": true,
    "last:mb-0": true
  },
  "family:text__label": {
    "block": true,
    "text-gray-700": true,
    "text-sm": true,
    "font-bold": true,
    "!inline-flex": true,
    "mb-1": true
  },
  "family:text__inner": {
    "text-base": true,
    "flex": true,
    "items-center": true,
    "w-full": true,
    "py-2": true,
    "px-3": true,
    "rounded": true,
    "border": true,
    "border-violet-100": true,
    "bg-white": true,
    "focus:!border-gradientViolet": true,
    "focus-within:!border-gradientViolet": true,
    "group-data-[invalid]:border-red-500": true,
    "group-data-[invalid]:ring-1": true,
    "group-data-[invalid]:ring-red-500": true,
    "group-data-[disabled]:bg-gray-100": true,
    "group-data-[disabled]:!cursor-not-allowed": true
  },
  "family:text__input": {
    "appearance-none": true,
    "selection:text-gray-700": true,
    "group-data-[has-overlay]:selection:!text-transparent": true,
    "text-base": true,
    "text-gray-700": true,
    "min-w-0": true,
    "min-h-[1.5em]": true,
    "grow": true,
    "outline-none": true,
    "bg-transparent": true,
    "placeholder:text-gray-400": true,
    "group-data-[disabled]:!cursor-not-allowed": true,
    "border-none": true,
    "p-0": true,
    "focus:ring-0": true
  },
  "button__input": {
    "appearance-none": true,
    "selection:text-grey": true,
    "group-data-[has-overlay]:selection:!text-transparent": true,
    "bg-violet-900": true,
    "hover:bg-violet-100": true
  },
  "form__form": {
    "group/form": true
  },
  "form__messages": {
    "": true
  },
  "form__message": {
    "text-red-600": true,
    "mb-1.5": true,
    "text-[12px]": true,
    "group-[]/summary:text-sm": true
  },
  "form__messageLink": {
    "group-[]/summary:outline-none": true,
    "group-[]/summary:focus-visible:ring-2": true,
    "group-[]/summary:ring-violet-600": true
  },
  "mask__inner": {
    relative: true
  },
  "mask__input": {
    "appearance-none": true,
    "selection:text-gray-700": true,
    "group-data-[has-overlay]:selection:!text-transparent": true,
    "group-data-[has-overlay]:!caret-gray-700": true
  }
};

/**
 * Globals are merged prior to generating this file — these are included for
 * any other non-matching inputs.
 **/
const globals: Record<string, Record<string, boolean>> = {
  outer: {
    "group": true,
    "min-w-0": true,
    "grow": true,
    "mb-8": true,
    "data-[disabled]:select-none": true,
    "data-[disabled]:opacity-50": true,
    "text-xs": true
  },
  label: {
    "block": true,
    "text-violet-900": true,
    "text-xs": true,
    "mb-3": true,
    "uppercase": true,
    "font-medium": true,
    "tracking-widest": true
  },
  legend: {
    "block": true,
    "text-gray-700": true,
    "text-sm": true,
    "font-bold": true
  },
  input: {
    "appearance-none": true,
    "selection:text-gray-700": true,
    "group-data-[has-overlay]:selection:!text-transparent": true
  },
  help: {
    "text-gray-500": true,
    "text-xs": true
  },
  message: {
    "text-red-600": true,
    "mb-1.5": true,
    "!text-[12px]": true
  }
};
