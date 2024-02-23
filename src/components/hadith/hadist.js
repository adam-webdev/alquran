import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WrappHeader, WrappMain } from "../../globalStyle";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Title as Judul } from "../surah/daftar-surah";
import ArrowLeft from "../../partials/button-back";
import { baseUrlHadith } from "./../../App";
import Skeleton from "./../../partials/skeleton/index";
const WrappHadist = styled(WrappMain)`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-right: 0;
  grid-template-columns: 30% 30% 30%;
  margin-bottom: 100px;
`;
const Title = styled("p")`
  font-size: 18px;
  text-indent: 50px;

  margin-top: 30px;
  @media (max-width: 600px) {
    font-size: 16px;
    width: 100%;
  }
`;
const Card = styled("div")`
  width: 100%;
  padding: 12px 4px 12px 10px;
  // background:#e1f7e4;
  border: 1px solid #31b052;
  border-radius: 4px;
  justify-content: center;
  position: relative;
  font-size: 16px;
  box-sizing: none;
  box-shadow: 0 2px 7px x rgba(0, 0, 0, 0.19);
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const NameHadist = styled("h2")`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const HadistIcon = styled(BsBook)`
  width: 20px;
  height: 20px;
  align-items: center;
  color: #000;
`;
const Href = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #eaeaea;
  margin-right: 20px;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 10px;
    margin-left: 0;
  }
`;

function Hadist() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getHadist() {
      try {
        const result = await fetch(`${baseUrlHadith}/books`);
        const json = await result.json();
        console.log("hadis", json.data);
        if (json.code !== 200) {
          setError(true);
        } else {
          setData(json.data);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getHadist();
  }, []);

  return (
    <>
      <WrappHeader>
        <ArrowLeft />
        <Judul>Hadist</Judul>
        <span></span>
      </WrappHeader>
      <WrappMain>
        <Title>
          Hadits dalam bahasa Arab: الحديث, har. yang artinya 'berbicara,
          perkataan, percakapan'‎, ejaan dalam KBBI: Hadis disebut juga sunnah,
          adalah perkataan (sabda), perbuatan, ketetapan dan persetujuan dari
          Nabi Muhammad yang dijadikan landasan syariat Islam. Hadis dijadikan
          sumber hukum Islam selain al-Qur'an, dalam hal ini kedudukan hadis
          merupakan sumber hukum kedua setelah al-Qur'an.
        </Title>

        <WrappHadist left="30px">
          {loading ? (
            <Skeleton width={"100%"} height={"130px"} amount={9} />
          ) : (
            data?.map((hadist, index) => (
              <Href key={index} to={`/hadist/${hadist?.id}`}>
                <Card>
                  <HadistIcon />
                  <NameHadist>{hadist?.name}</NameHadist>
                  <NameHadist>({hadist?.available})</NameHadist>
                </Card>
              </Href>
            ))
          )}
        </WrappHadist>
      </WrappMain>
    </>
  );
}
export default Hadist;
