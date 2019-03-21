import * as React from "react";
import * as Scrivito from "scrivito";
import styled from "styled-components";
import { clearFix } from "polished";

Scrivito.provideComponent("TickListWidget", ({ widget }) => (
  <StyledUl tag="ul" className="tick-list" content={widget} attribute="items" />
));

const StyledUl = styled(Scrivito.ContentTag)`
  list-style-type: none;
  padding-left: 15px;
  ${clearFix()}
`;
