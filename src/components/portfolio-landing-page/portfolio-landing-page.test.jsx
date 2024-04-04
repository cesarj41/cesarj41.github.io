import { render } from "@testing-library/preact";
import { PortfolioLandingPage } from "./portfolio-landing-page";

describe(PortfolioLandingPage.name, () => {
  it("Should render PortfolioLandingPage", () => {
    const wrapper = render(<PortfolioLandingPage />);

    expect(wrapper.container).toMatchSnapshot();
  });
});
