import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, placeholder, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "text-white mr-4 flex h-10  rounded-md border bg-black px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className,
          props.placeholder && "placeholder-white"
        )}
        ref={ref}
        placeholder={placeholder || "Votre email"}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
