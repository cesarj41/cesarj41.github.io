import { render } from "@testing-library/preact";
import { LandingPage } from "./landing-page";

describe(LandingPage.name, () => {
  it("Should render PortfolioLandingPage", () => {
    const wrapper = render(<LandingPage />);

    expect(wrapper.container).toMatchSnapshot();
  });
});
