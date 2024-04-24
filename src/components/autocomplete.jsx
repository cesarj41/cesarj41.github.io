import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import clsx from "clsx";
import { forwardRef } from "preact/compat";
import { ClearIcon } from "./icons";

export const Autocomplete = forwardRef((props, ref) => {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    options,
    isOptionEqualToValue,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    dirty,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions
  } = useAutocomplete({
    ...props,
    componentName: "Autocomplete"
  });

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <>
      <div
        {...getRootProps(other)}
        ref={rootRef}
        className={clsx(
          "flex w-[392px] gap-[5px] overflow-hidden rounded-md border border-solid border-gray-200 bg-[#F7F7FA] pr-6 shadow-[0_2px_4px_rgb(0_0_0_/_0.05)] focus-visible:outline-0 dark:border-gray-700 dark:bg-gray-800 dark:shadow-[0_2px_4px_rgb(0_0_0_/_0.5)]",
          !focused &&
            "shadow-[0_2px_2px_transparent] shadow-gray-50 dark:shadow-gray-900",
          focused && " shadow-[0_0_0_3px_transparent]"
        )}
      >
        <input
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          {...getInputProps()}
          className="shrink-0 grow basis-auto rounded-[inherit] border-0 bg-inherit px-6 py-4 text-lg leading-[0.5] text-[#5A6793] outline-0 dark:text-gray-300"
        />
        {hasClearIcon && (
          <Button
            {...getClearProps()}
            className="self-center rounded-[4px] border-0 bg-transparent px-0.5 py-0 shadow-none outline-0 hover:cursor-pointer hover:bg-violet-100 dark:hover:bg-gray-700"
          >
            <ClearIcon className="translate-y-[2px] scale-90" />
          </Button>
        )}

        <Button
          {...getPopupIndicatorProps()}
          className="self-center rounded-[4px] border-0 bg-transparent px-0.5 py-0 pr-[7.4px] shadow-none outline-0 hover:cursor-pointer hover:bg-violet-100 dark:hover:bg-gray-700"
        >
          <ArrowDropDownIcon
            className={clsx("translate-y-[2px]", popupOpen && "rotate-180")}
          />
        </Button>
      </div>
      {anchorEl && (
        <Popper
          open={popupOpen}
          anchorEl={anchorEl}
          slotProps={{
            root: {
              className: "relative z-[1001] w-[392px]" // z-index: 1001 is needed to override ComponentPageTabs with z-index: 1000
            }
          }}
          modifiers={[
            { name: "flip", enabled: false },
            { name: "preventOverflow", enabled: false }
          ]}
        >
          <ul
            {...getListboxProps()}
            className="z-[1] mx-0 my-3 box-border max-h-[300px] min-w-[320px] overflow-auto rounded-xl border border-solid border-gray-200 bg-[#F7F7FA] p-1.5 px-0 text-sm text-gray-900 shadow-[0_4px_30px_transparent] shadow-gray-200 outline-0 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:shadow-gray-900"
          >
            {groupedOptions.map((option, index) => {
              const optionProps = getOptionProps({ option, index });

              return (
                <li
                  key={option.label}
                  {...optionProps}
                  className="ui-focused:bg-gray-100 dark:ui-focused:bg-gray-700 ui-focus-visible:bg-gray-100 dark:ui-focus-visible:bg-gray-800 ui-focused:text-gray-900 dark:ui-focused:text-gray-300 ui-focus-visible:text-gray-900 dark:ui-focus-visible:text-gray-300 ui-focus-visible:shadow-[0_0_0_3px_transparent] ui-focus-visible:shadow-violet-200 dark:ui-focus-visible:shadow-violet-500 ui-focused:aria-selected:bg-violet-100 dark:ui-focused:aria-selected:bg-violet-900 ui-focus-visible:aria-selected:bg-violet-100 dark:ui-focus-visible:aria-selected:bg-violet-900 ui-focused:aria-selected:text-violet-900 dark:ui-focused:aria-selected:text-violet-100 ui-focus-visible:aria-selected:text-violet-900 dark:ui-focus-visible:aria-selected:text-violet-100 cursor-default list-none p-2 text-[#5A6793] last-of-type:border-b-0 hover:cursor-pointer hover:bg-[#E3E5F1] aria-selected:bg-violet-100 aria-selected:text-violet-900 dark:aria-selected:bg-violet-900 dark:aria-selected:text-violet-100"
                >
                  {option.label}
                </li>
              );
            })}

            {groupedOptions.length === 0 && (
              <li className="cursor-default list-none p-2 text-[#5A6793]">
                No results
              </li>
            )}
          </ul>
        </Popper>
      )}
    </>
  );
});

function ArrowDropDownIcon() {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.852814L6 5.85281L11 0.852814"
        stroke="#5A6793"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
