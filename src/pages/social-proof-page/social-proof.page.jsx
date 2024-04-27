import AnneAvatar from "../../assets/img/image-anne.jpg";
import ColtonAvatar from "../../assets/img/image-colton.jpg";
import IreneAvatar from "../../assets/img/image-irene.jpg";

export function SocialProofPage() {
  return (
    <div className="h-screen bg-no-repeat px-10 md:bg-[url('../../assets/svg/bg-pattern-top-desktop.svg')]">
      <div className="m-auto w-full max-w-[1200px] bg-[url('../../assets/svg/bg-pattern-top-mobile.svg')] bg-no-repeat pt-[80px] md:bg-[white]">
        <section>
          <div className="mb-12 grid w-full gap-9 md:grid-cols-6">
            <div className="md:col-span-3">
              <div className="grid gap-6 lg:place-content-center">
                <p className="max-w-[14ch] text-center text-4xl font-bold text-[#502050] md:text-left">
                  10,000+ of our users love our products.
                </p>
                <p className="max-w-[32ch] text-center font-medium text-[#937b92] md:max-w-[44ch] md:text-left">
                  We only provide great products combined with excellent
                  customer service. See what our satisfied customers are saying
                  about our services.
                </p>
              </div>
            </div>
            <div className="md:col-span-3" style={{ margin: "auto 0" }}>
              <div className="grid gap-4">
                <RatingBanner company="Reviews" />
                <div className="lg:ml-10">
                  <RatingBanner company="Report Guru" />
                </div>
                <div className="lg:ml-20">
                  <RatingBanner company="BestTech" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-9 md:gap-7 lg:px-[5%]">
          <div className="md:col-span-3">
            <CommentCard
              src={ColtonAvatar}
              name="Colton Smith"
              text="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
            />
          </div>
          <div className="md:col-span-3 lg:mt-4">
            <CommentCard
              src={IreneAvatar}
              name="Irene Roberts"
              text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
            />
          </div>
          <div className="md:col-span-3 lg:mt-8">
            <CommentCard
              src={AnneAvatar}
              name="Anne Wallace"
              text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
            />
          </div>
          <div className="h-[40px]"></div>
        </section>
      </div>
    </div>
  );
}

function RatingBanner({ company = "" }) {
  return (
    <div className="grid gap-2 rounded-lg bg-[#f7f2f7] p-4 md:flex md:max-w-[440px] md:gap-10 md:p-3 md:pl-6">
      <div className="flex justify-center gap-[10px] md:items-center">
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
      </div>
      <div className="md:flex md:items-center">
        <p className="truncate text-center font-bold text-[#502050]">
          Rated 5 Stars in {company}
        </p>
      </div>
    </div>
  );
}

function StarSvg() {
  return (
    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z"
        fill="#EF9546"
        fillRule="nonzero"
      />
    </svg>
  );
}

function CommentCard({ src, name, text }) {
  return (
    <div className="rounded-lg bg-[#502050] p-[23px]">
      <div className="m-auto">
        <div className="mb-4 flex gap-3">
          <div>
            <div className="flex items-center justify-center">
              <img
                src={src}
                alt="Avatar"
                className="size-12 rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-bold text-white">{name}</p>
            <p className="text-[#ee68a4]">Verified Buyer</p>
          </div>
        </div>
        <div>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}
