import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import Homepage from "../../src/pages";
import { QueryClient, QueryClientProvider } from "react-query";
import * as React from "react";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(
    <QueryClientProvider client={new QueryClient()}>{ui}</QueryClientProvider>,
    options
  );

export { customRender as render };
