"use client";

import styled from "styled-components";

export const MainContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 16px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.smMax} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Container = styled.div`
    overflow: auto;
    overflow-x: hidden;

`
