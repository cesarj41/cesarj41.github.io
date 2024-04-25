import { computed, signal } from "@preact/signals";
import clsx from "clsx";
import {
  AdvanceSkillIcon,
  BeginnerSkillIcon,
  CheckIcon,
  CongratIcon,
  ExpertSkillIcon,
  IntermediateSkillIcon
} from "../../components/icons";
import { TextInput } from "../../components/text-input";

const page = signal(1);
const showFeedback = signal(false);
const form = signal({
  name: "",
  email: "",
  phone: "",
  link: "",
  skill: "",
  challenges: []
});
const advance = computed(() => {
  const current_page = page.value;
  if (current_page === 1) {
    return (
      form.value.name && form.value.email && form.value.phone && form.value.link
    );
  }

  if (current_page === 2) {
    return Boolean(form.value.skill);
  }

  if (current_page === 3) {
    return form.value.challenges.length > 0;
  }

  return true;
});

const handleNext = () => {
  if (page.value === 4) {
    showFeedback.value = true;
  }

  page.value += 1;
};

const handleBack = () => {
  if (page.value <= 1) {
    return;
  }

  page.value -= 1;
};

export function MultiStepFormPage() {
  if (showFeedback.value) {
    return (
      <div className="center h-screen bg-[#F3F3E3]">
        <div className="mx-8 w-full max-w-screen-sm">
          <div className="rounded-xl bg-[#FFFFFF] p-8">
            <FeedbackStep />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen overflow-auto bg-[#F3F3E3] py-8">
      <div className="mx-auto w-full max-w-[650px] px-8">
        <div className="mb-[32px]">
          <p className="mb-[14px] text-center text-[32px] font-semibold">
            Join our Community of Developers
          </p>
          <div className="flex justify-center">
            <p className="max-w-[47ch] text-center text-lg">
              To join our community and participate in frontend challenges.
              Please fill out the following form.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-[#FFFFFF] p-8">
          <div className="mb-8 flex gap-[18px] px-4">
            <Step value={1} selected={page.value >= 1} />
            <StepLine selected={page.value > 1} />
            <Step value={2} selected={page.value >= 2} />
            <StepLine selected={page.value > 2} />
            <Step value={3} selected={page.value >= 3} />
            <StepLine selected={page.value > 3} />
            <Step value={4} selected={page.value >= 4} />
          </div>
          <div className="mb-8 h-px w-full bg-[#E5E7EB]" />
          <div>
            {page.value === 1 && <PersonalInformationStep />}
            {page.value === 2 && <SkillLevelStep />}
            {page.value === 3 && <ChallengePreferenceStep />}
            {page.value === 4 && <ReviewStep />}
          </div>
          <div className="mb-8 mt-10 h-px w-full bg-[#E5E7EB]" />
          <div className="grid gap-4 md:grid-cols-2 md:gap-0">
            <div>
              {page.value > 1 && (
                <button
                  onClick={handleBack}
                  className="w-full rounded-lg border border-[#FC6C4C] py-[10px] font-medium text-[#FC6C4C] md:max-w-[110px]"
                >
                  Go Back
                </button>
              )}
            </div>
            <div>
              <div className="flex justify-end">
                <button
                  onClick={advance.value ? handleNext : undefined}
                  disabled={!advance.value}
                  className="w-full rounded-lg bg-[#FC6C4C] py-[10px] font-medium text-white disabled:bg-slate-300 md:max-w-[110px]"
                >
                  {page.value === 4 ? "Submit" : " Next Step"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ value, selected = false }) {
  return (
    <div
      className={clsx(
        "grid size-[34px] cursor-pointer place-content-center rounded-full bg-[#E5E7EB] font-medium",
        {
          "bg-[#FC6C4C] text-white": selected
        }
      )}
    >
      <p className="select-none">{value}</p>
    </div>
  );
}

function StepLine({ selected = false }) {
  return (
    <div className="mb-[1.5px] flex size-full flex-1 self-center">
      <div
        className={clsx("flex h-[8px] w-full rounded bg-[#E5E7EB]", {
          "bg-[#FC6C4C]": selected
        })}
      />
    </div>
  );
}

function StepContent({ title = "", description = "", children }) {
  return (
    <div>
      <p className="mb-[6px] text-2xl font-medium">{title}</p>
      <p className="mb-6 text-[#6B7280]">{description}</p>
      <div className="md:min-h-[167px]">{children}</div>
    </div>
  );
}

function PersonalInformationStep() {
  return (
    <StepContent
      title="Personal Information"
      description="Please provide your personal details so we can get to know you better."
    >
      <div className="grid gap-10 gap-y-[25px] md:grid-cols-2">
        <InformationInput
          label="Full Name"
          suggestion="Jhon Doe"
          value={form.value.name}
          onChange={(e) => {
            form.value = {
              ...form.value,
              name: e.target.value
            };
          }}
        />
        <InformationInput
          type="email"
          label="Email Address"
          suggestion="name@email.com"
          value={form.value.email}
          onChange={(e) => {
            form.value = {
              ...form.value,
              email: e.target.value
            };
          }}
        />
        <InformationInput
          label="Phone Number"
          suggestion="+91 1234567890"
          value={form.value.phone}
          onChange={(e) => {
            form.value = {
              ...form.value,
              phone: e.target.value
            };
          }}
        />
        <InformationInput
          label="Portfolio/GitHub Link"
          suggestion="github.com/rishipurwar1"
          value={form.value.link}
          onChange={(e) => {
            form.value = {
              ...form.value,
              link: e.target.value
            };
          }}
        />
      </div>
    </StepContent>
  );
}

function InformationInput({ label = "", ...restProps }) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">{label}</p>
      <div>
        <TextInput {...restProps} />
      </div>
    </div>
  );
}

const skill = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert"
};
function SkillLevelStep() {
  return (
    <StepContent
      title="Skill Level"
      description="Please tell us about your skill level in frontend development."
    >
      <div className="grid gap-10 gap-y-[25px] md:grid-cols-2">
        <SkillButton
          label={skill.beginner}
          Icon={BeginnerSkillIcon}
          value={form.value.skill === skill.beginner}
          onChange={() => {
            form.value = {
              ...form.value,
              skill: skill.beginner
            };
          }}
        />
        <SkillButton
          label={skill.intermediate}
          Icon={IntermediateSkillIcon}
          value={form.value.skill === skill.intermediate}
          onChange={() => {
            form.value = {
              ...form.value,
              skill: skill.intermediate
            };
          }}
        />
        <SkillButton
          label={skill.advanced}
          Icon={AdvanceSkillIcon}
          value={form.value.skill === skill.advanced}
          onChange={() => {
            form.value = {
              ...form.value,
              skill: skill.advanced
            };
          }}
        />
        <SkillButton
          label={skill.expert}
          Icon={ExpertSkillIcon}
          value={form.value.skill === skill.expert}
          onChange={() => {
            form.value = {
              ...form.value,
              skill: skill.expert
            };
          }}
        />
      </div>
    </StepContent>
  );
}

function SkillButton({ value = false, label = "", Icon, onChange }) {
  return (
    <button
      className={clsx(
        "flex gap-4 rounded-lg border px-[18px] pb-[19px] pt-4 hover:border-[#FC6C4C]",
        {
          "border-[#FC6C4C]": value
        }
      )}
      onClick={() => onChange(!value)}
    >
      <div className="grid size-[34px] place-content-center rounded-full bg-[#FC6C4C]">
        <Icon />
      </div>
      <p className="flex self-center font-medium">{label}</p>
    </button>
  );
}

const challenge = {
  html: "HTML/CSS/JS",
  react: "ReactJs",
  angular: "AngularJs",
  vue: "Vuejs"
};
function ChallengePreferenceStep() {
  return (
    <StepContent
      title="Challenge Preference"
      description="Please tell us which frontend challenges you would like to participate in."
    >
      <div className="grid gap-10 gap-y-[25px] md:grid-cols-2">
        <ChallengeButton
          label={challenge.html}
          value={
            form.value.challenges.findIndex((c) => c === challenge.html) >= 0
          }
          onChange={(newValue) => {
            const challenges = new Set(form.value.challenges);
            if (newValue) {
              challenges.add(challenge.html);
            } else {
              challenges.delete(challenge.html);
            }
            form.value = {
              ...form.value,
              challenges: Array.from(challenges)
            };
          }}
        />
        <ChallengeButton
          label={challenge.react}
          value={
            form.value.challenges.findIndex((c) => c === challenge.react) >= 0
          }
          onChange={(newValue) => {
            const challenges = new Set(form.value.challenges);
            if (newValue) {
              challenges.add(challenge.react);
            } else {
              challenges.delete(challenge.react);
            }
            form.value = {
              ...form.value,
              challenges: Array.from(challenges)
            };
          }}
        />
        <ChallengeButton
          label={challenge.angular}
          value={
            form.value.challenges.findIndex((c) => c === challenge.angular) >= 0
          }
          onChange={(newValue) => {
            const challenges = new Set(form.value.challenges);
            if (newValue) {
              challenges.add(challenge.angular);
            } else {
              challenges.delete(challenge.angular);
            }
            form.value = {
              ...form.value,
              challenges: Array.from(challenges)
            };
          }}
        />
        <ChallengeButton
          label={challenge.vue}
          value={
            form.value.challenges.findIndex((c) => c === challenge.vue) >= 0
          }
          onChange={(newValue) => {
            const challenges = new Set(form.value.challenges);
            if (newValue) {
              challenges.add(challenge.vue);
            } else {
              challenges.delete(challenge.vue);
            }
            form.value = {
              ...form.value,
              challenges: Array.from(challenges)
            };
          }}
        />
      </div>
    </StepContent>
  );
}

function ChallengeButton({ value = false, onChange, label = "" }) {
  return (
    <button
      className={clsx(
        "flex min-h-[71px] gap-4 rounded-lg border px-[18px] pb-[19px] pt-4 hover:border-[#FC6C4C]",
        {
          "border-[#FC6C4C]": value
        }
      )}
      onClick={() => onChange(!value)}
    >
      <div className="relative flex h-full">
        <div
          className={clsx(
            "grid size-[24px] place-content-center self-center rounded-md border border-[black]",
            {
              "border-none bg-[#FC6C4C]": value
            }
          )}
        >
          {value && <CheckIcon />}
        </div>
      </div>
      <p className="flex self-center">{label}</p>
    </button>
  );
}

function ReviewStep() {
  return (
    <StepContent
      title="Review and Confirm"
      description="Please review your information to make sure everything is accurate."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <ReviewItem label="Full Name" value={form.value.name} />
        <ReviewItem label="Email Address" value={form.value.email} />
        <ReviewItem label="Phone Number" value={form.value.phone} />
        <ReviewItem label="Portfolio/GitHub Link" value={form.value.link} />
        <ReviewItem label="Skill Level" value={form.value.skill} />
        <ReviewItem
          label="Challenge Preference"
          value={form.value.challenges.toString()}
        />
      </div>
    </StepContent>
  );
}

function ReviewItem({ label = "", value = "" }) {
  return (
    <div className="rounded-md bg-[#E5E7EB] px-[14px] py-4">
      <p className="text-xs text-[#4B5563]">{label}</p>
      <p className="truncate text-xs font-medium">{value}</p>
    </div>
  );
}

function FeedbackStep() {
  return (
    <div className="grid place-content-center md:min-h-[525px]">
      <div className="mb-6 flex justify-center">
        <CongratIcon />
      </div>
      <p className="mb-4 text-center text-2xl font-semibold">
        Congratulations! 🎉
      </p>
      <p className="max-w-[50ch] text-center text-sm text-[#6B7280]">
        Your profile has been created and you are now ready to start
        participating in challenges that match your interests and coding
        experience level.
      </p>
    </div>
  );
}
