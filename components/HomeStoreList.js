import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import HomeStoreCard from "./HomeStoreCard";
import Loja1 from "../public/imgs/lojas/loja1.jpg";
import Loja2 from "../public/imgs/lojas/loja2.jpg";
import Loja3 from "../public/imgs/lojas/loja3.jpg";
import Loja4 from "../public/imgs/lojas/loja4.jpg";
import Loja5 from "../public/imgs/lojas/loja5.jpg";
import Loja6 from "../public/imgs/lojas/loja6.jpg";
import Loja7 from "../public/imgs/lojas/loja7.jpg";
import Loja8 from "../public/imgs/lojas/loja8.jpg";
import Loja9 from "../public/imgs/lojas/loja9.jpg";

export default function HomeStoreList() {
  let lojas = [];
  let lojasImg = [
    Loja1,
    Loja2,
    Loja3,
    Loja4,
    Loja5,
    Loja6,
    Loja7,
    Loja8,
    Loja9,
  ];

  for (let i = 0; i < 9; i++) {
    lojas.push({
      id: i,
      name: `Minha super Loja ${i}`,
      img: lojasImg[i],
    })
  }

  const [storeList, setStoreList] = useState([]);
  const [storeToShow, setStoreToshow] = useState([
    lojas[0],
    lojas[1],
    lojas[2],
  ]);

  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);

  function goRight() {
    if (!disableRight) {
      const index = lojas.findIndex((e) => e.id === storeToShow[2].id);
      if (lojas.length - 1 !== index) {
        storeToShow.shift();
        storeToShow.push(lojas[index + 1]);
        setDisableRight(false);
        setDisableLeft(false);
      }
      if (lojas[lojas.length - 1].id === storeToShow[2].id) {
        setDisableRight(true);
      }
      setStoreToshow([...storeToShow]);
    }
  }

  function goLeft() {
    if (!disableLeft) {

      const index = lojas.findIndex((e) => e.id === storeToShow[0].id);
      if (index !== 0) {
        storeToShow.pop();
        storeToShow.unshift(lojas[index - 1]);
        setDisableLeft(false);
        setDisableRight(false);
      }
      if (lojas[0].id === storeToShow[0].id) {
        setDisableLeft(true);
      }
      setStoreToshow([...storeToShow]);
    }
  }

  return <>
    <Row className="text-center">
      <Col>
        <Icon.ArrowLeftCircleFill onClick={goLeft} size={96}
          color={disableLeft ? "gray" : "black"} />
      </Col>
      {storeToShow.map(((e) => (
        <Col key={e.id}>{e.name}</Col>
      )
      ))}
      <Col>
        <Icon.ArrowRightCircleFill onClick={goRight} size={96}
          color={disableRight ? "gray" : "black"} />
      </Col>
    </Row>
  </>;
}
