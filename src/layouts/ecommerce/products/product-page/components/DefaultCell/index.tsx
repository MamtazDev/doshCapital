import { ReactNode } from "react";

//  React TS components
import MDTypography from "components/MDTypography";

function DefaultCell({ children }: { children: ReactNode }): JSX.Element {
  return (
    <MDTypography variant="button" color="secondary">
      {children}
    </MDTypography>
  );
}

export default DefaultCell;
