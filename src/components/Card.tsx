import React from "react";
import { Card_Wrapper, ContainerCard, ContainerImg, ContainerImgWrap, ContainerP, ContainerTitle, Content_Title, ModalInnerContainer } from "../styles/General";
import Modal from "./Modal";

const CardContainer = ({url,Title,Text,normal}:any) => {
  return (<>
  <ContainerCard>
    <ContainerImgWrap>
    <ContainerImg normal={normal} src={url} alt='Photo'/>
    </ContainerImgWrap>
    <ContainerTitle>{Title}</ContainerTitle>
    <ContainerP>{Text} </ContainerP>
  </ContainerCard>
  </>

)};


const Card = ({url,Title,Text,children,normal}:any) => {
  return (
      <Modal Card={CardContainer({url:url,Title:Title,normal:normal, Text:Text})}>
        {children}
      </Modal>
  );
};

export default Card;
