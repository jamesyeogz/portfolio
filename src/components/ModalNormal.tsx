import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import Threeimage from "../Reactthree/threeimage";
import { ContainerP, DescriptionSmall, SmallSpan } from "../styles/General";
import {
  Content,
  Content_Modal_P,
  Img_fit,
  InfoWrap,
  Line,
  Modal_Container_Content,
  Modal_ReactThree,
  Modal_Title,
  Wrapper,
} from "../styles/ModalContainer";
const ModalNormal = (props: any) => {
  const [Clicked, isClicked] = useState<any>(null);
  const contentTitle = props.title;
  const contentinfo = props.info;
  var image_static: string = "";
  if (props.hasOwnProperty("img")) {
    image_static = props.img;
  }

  return (
    <Modal_Container_Content>
      <Modal_ReactThree>
        {props.usethree ? (
          <Threeimage isClicked={isClicked} Clicked={Clicked} />
        ) : Clicked ? (
          <Img_fit src={Clicked.image} />
        ) : (
          <Img_fit src={image_static} />
        )}
      </Modal_ReactThree>
      <Content>
        <Wrapper>
          <Modal_Title>{contentTitle}</Modal_Title>
          <Line />
          {contentinfo.map((content: any, idx: number) => (
            <>
              {content.image ? (
                <InfoWrap
                  key={idx}
                  onClick={() => {
                    isClicked(content);
                  }}
                >
                  <DescriptionSmall
                    style={{ textAlign: "left", margin: 0, padding: 0 }}
                  >
                    {content.certificate}
                  </DescriptionSmall>
                  {content.url ? (
                    <a href={content.url}>
                      <Icon
                        style={{ color: "white" }}
                        icon="material-symbols:download-rounded"
                        height="30"
                      />
                    </a>
                  ) : null}
                </InfoWrap>
              ) : (
                <Content_Modal_P>{content.paragraph}</Content_Modal_P>
              )}
              {content.duration ? (
                <SmallSpan
                  style={{ marginLeft: "10px", fontFamily: "Monserrat" }}
                >
                  {content.duration}
                </SmallSpan>
              ) : (
                <></>
              )}
            </>
          ))}
        </Wrapper>
      </Content>
    </Modal_Container_Content>
  );
};

export default ModalNormal;
