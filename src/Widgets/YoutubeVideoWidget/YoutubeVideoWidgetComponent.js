import * as React from "react";
import * as Scrivito from "scrivito";
import styled from "styled-components";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("YoutubeVideoWidget", ({ widget }) => {
  const youtubeVideoId = widget.get("youtubeVideoId");
  const aspectRatio = aspectRatioToFloat(widget.get("aspectRatio"));

  if (!youtubeVideoId) {
    return (
      <InPlaceEditingPlaceholder center>
        Provide a YouTube video ID in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  return (
    <StyledDiv aspectRatio={aspectRatio}>
      <StyledIframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      />
    </StyledDiv>
  );
});

const StyledDiv = styled.div`
  position: relative;
  padding-top: ${props => 100 / props.aspectRatio}%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function aspectRatioToFloat(aspectRatio) {
  switch (aspectRatio) {
    case "21:9":
      return 21 / 9;
    case "16:9":
      return 16 / 9;
    case "4:3":
      return 4 / 3;
    case "1:1":
      return 1;
    case "3:4":
      return 3 / 4;
    case "9:16":
      return 9 / 16;
    default:
      return 16 / 9;
  }
}
