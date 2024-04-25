import { useEffect, useRef, useState } from "preact/hooks";
import dragula from "react-dragula";
import { Autocomplete } from "../../components/autocomplete";
import { ClearIcon } from "../../components/icons";

const options = generateArray(5);

export function SortableListPage() {
  const draggable = useRef();
  const [skillList, setSkillList] = useState(skill_list);
  const [suggestedList, setSuggestedList] = useState(suggested_skill_list);
  const [skills, setSkills] = useState({});

  useEffect(() => {
    if (draggable.current) {
      console.log("yes");
      dragula([draggable.current]);
    }
  }, []);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100 px-8">
      <p className="mb-8 text-center text-[40px] font-semibold text-[#172554]">
        Select your top 5 tech skills
      </p>
      <div className="flex w-full max-w-[718px] flex-wrap gap-[64px] rounded-2xl bg-white p-[64px]">
        <div className="flex flex-1">
          <div ref={draggable} className="grid w-full gap-[18px]">
            {options.map((opt) => {
              const placeholder = `${opt}. Add Skill`;
              return (
                <OptionPicker
                  key={placeholder}
                  skills={skillList}
                  value={skills[opt]}
                  disabled={opt !== 1 && !skills[opt - 1]}
                  placeholder={placeholder}
                  onChange={(v) => setSkills((curr) => ({ ...curr, [opt]: v }))}
                  onRemove={() =>
                    setSkills((curr) => {
                      const skills_copy = { ...curr };
                      delete skills_copy[opt];
                      return skills_copy;
                    })
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="mx-auto">
          <p className="font-semibold text-[#0D2167]">Suggested Skills</p>
          <div className="mt-4 grid gap-2">
            {suggestedList.map((s) => (
              <button
                key={s.label}
                className="cursor-pointer text-[#5A6793]"
                onClick={() => {
                  setSkillList((curr) => [...curr, s]);
                  setSuggestedList((curr) =>
                    curr.filter((sk) => sk.label !== s.label)
                  );
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionPicker({
  skills = [],
  disabled = false,
  placeholder = "",
  value,
  onChange,
  onRemove
}) {
  if (value) {
    return (
      <div className="flex w-full max-w-[392px] cursor-grab items-center justify-between rounded-md bg-[#0D2167] px-6 py-4 text-white">
        <div>
          <p>{value.label}</p>
        </div>
        <div>
          <button
            onClick={onRemove}
            className="flex self-center rounded-[4px] border-0 bg-transparent px-0.5 py-0 shadow-none outline-0 hover:cursor-pointer hover:shadow dark:hover:bg-gray-700"
          >
            <ClearIcon color="white" className="translate-y-[2px] scale-90" />
          </button>
        </div>
      </div>
    );
  }

  if (disabled) {
    return (
      <div className="flex w-full max-w-[392px] cursor-not-allowed items-center justify-between rounded-md border bg-[#E5E7EB] px-6 py-4 text-[#9CA3AF]">
        <p>{placeholder}</p>
      </div>
    );
  }

  return <Autocomplete options={skills} onChange={(_, v) => onChange(v)} />;
}

const skill_list = [
  { label: "JavaScript" },
  { label: "ReactJs" },
  { label: "NextJs" },
  { label: "React Native" },
  { label: "Svelte" },
  { label: "TailwindCss" }
];

const suggested_skill_list = [
  { label: "CSS" },
  { label: "HTML" },
  { label: "Bootstrap" },
  { label: "Typescript" },
  { label: "VueJs" },
  { label: "Angular" },
  { label: "NodeJs" }
];

function generateArray(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
