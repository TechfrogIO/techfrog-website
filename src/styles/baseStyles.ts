import { css } from "@emotion/react";

export const baseCardContentStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "350px",
  minWidth: "200px",
  margin: "0 2rem 1.5rem 0",
  paddingBlock: ".5rem 1.5rem",
  paddingInline: "1.8rem",
});

export const baseCardStyle = css({
  border: "solid 2px #000",
  borderRadius: "1rem",
  boxShadow: ".5rem .5rem .8rem #b3b3b3",
  backgroundColor: "#f2f2f2",
});

export const baseFontStyle = css({
  fontFamily: "Arial, Helvetica, Verdana, sans-serif",
  fontSize: "1rem",
  color: "#000",
});
