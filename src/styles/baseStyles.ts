import { css } from "@emotion/react";

export const baseCardContentStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "350px",
  minWidth: "350px",
  margin: "0 2rem 1.5rem 0",
  paddingBlock: "1.5rem",
  paddingInline: "1.8rem",
  color: "#000",
  backgroundColor: "#f2f2f2",
});

export const baseCardBorderStyle = css({
  border: "solid 2px #000",
  borderRadius: "1rem",
  boxShadow: ".5rem .5rem .8rem #b3b3b3",
});
