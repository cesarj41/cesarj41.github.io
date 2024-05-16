import { Input as BaseInput } from "@mui/base/Input";
import clsx from "clsx";
import { forwardRef } from "preact/compat";

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn;

export const TextInput = forwardRef((props, ref) => {
  return (
    <BaseInput
      ref={ref}
      {...props}
      placeholder={props.suggestion}
      className={props.className}
      slotProps={{
        ...props.slotProps,
        input: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.input,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "w-full rounded-lg border border-solid border-[#9CA3AF] bg-white px-3 py-[9px] font-sans text-sm font-normal focus:border-[#FC6C4C] focus-visible:outline-0",
              resolvedSlotProps?.className
            )
          };
        }
      }}
    />
  );
});
