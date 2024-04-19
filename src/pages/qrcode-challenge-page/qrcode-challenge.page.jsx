import { QRCodeSVG } from "qrcode.react";

export function QRCodeChallengePage() {
  return (
    <div className=" grid max-w-[320px] gap-6 rounded-[28px] border border-[#979797] bg-white p-4">
      <div className=" relative grid size-[288px] cursor-pointer place-content-center overflow-hidden rounded-2xl bg-[#2C7DFA]">
        <div className="z-50">
          <QRCodeSVG
            size={160}
            bgColor="transparent"
            fgColor="white"
            value="https://www.frontendmentor.io/challenges/"
          />
        </div>
        <div className="absolute left-[-132px] top-[-160px] size-[328px] rounded-[50%] bg-[#3685FF]" />
        <div className="absolute bottom-[-174px] right-[-132px] size-[270px] rounded-[50%] bg-[#3685FF]" />
      </div>
      <div className="mb-6 grid gap-4">
        <div>
          <p className="text-center text-[22px] font-bold text-[#1F314F]">
            Improve your front-end skills by building projects
          </p>
        </div>
        <div>
          <p className="text-center text-[#7D889E]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
