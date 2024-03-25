import React, { useState } from "react";
import styled from "styled-components";
import { achievement } from "../../data/constants";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import { CloseRounded } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Div = styled.div`
  margin-bottom: 35px;
  margin-top: 25px;
`;

const Container2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper2 = styled.div`
  max-width: 500px;
  width: 50%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title2 = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Index = ({ achievement }) => {
  const [open, setOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleOpen = (achievement) => {
    setSelectedAchievement(achievement);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container id="achievement ">
      <Wrapper>
        <Title>Certificates & Badges</Title>
        <Desc>Explore a collection of my certifications and badges</Desc>
        <Div>
          <CardActionArea>
            {achievement.map((ach, index) => (
              <CardMedia key={ach.id} component="img" height="140" image={ach.img} onClick={() => handleOpen(ach)} />
            ))}
          </CardActionArea>
        </Div>
      </Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={
        //   // {height: '80vh', }
        // }
      >
        <Container2>
          <Wrapper2>
            <CloseRounded
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            <Image src={selectedAchievement?.img}/>
          </Wrapper2>
        </Container2>
      </Modal>
    </Container>
  );
};

export default Index;
