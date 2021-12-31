import Index from "@/pages/index";
import { render } from "@testing-library/react";

describe("Index", (): void => {
  test("is components", () => {
    const { asFragment } = render(
        <Index />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
