import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#">
                {car}
              </a>
            );
          })}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <img
          onClick={() => setBurgerStatus(true)}
          src="/images/hamburger.svg"
          alt=""
        />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose>
          <IoMdClose onClick={() => setBurgerStatus(false)} />
        </CustomClose>

        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href="3">{car}</a>
              </li>
            );
          })}

        <li>
          <a href="#">Existing Inventory</a>
        </li>

        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

  img {
    height: 20px;
    cursor: pointer;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;
