import Index from "@/pages/index";
import { render } from "@testing-library/react";

jest.mock("@/hooks/useMeta", () => ({
  useMeta: () => {
    return {
      title: "",
      metadata: [],
      favicon: "",
    };
  },
}));

describe("Index", (): void => {
  test("is components", () => {
    const { asFragment } = render(<Index />);
    expect(asFragment()).toMatchSnapshot();
  });
});
