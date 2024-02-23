import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { A, Card, Flex, Grid, WrappHeader } from "../../globalStyle";
import ArrowLeft from "../../partials/button-back";
import Skeleton from "../../partials/skeleton";
import { TextArrow } from "../detail-hadist/detail-hadist";
import { baseUrl, baseUrlQuran } from "./../../App";
import { useLocation, useHistory } from "react-router-dom";

export const Title = styled("h4")`
  font-size: 1em;
  color: #fff;
`;

const CardSurah = styled(Card)`
  transition: 0.2s ease;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  &:hover {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Surah = styled("div")`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const NameSurah = styled("h1")`
  font-size: 2rem;
  color: #000;
  font-weight: 600;
`;
const EnglishName = styled("p")`
  color: #333;
  font-size: 16px;
`;
const EnglishTranslation = styled("p")`
  color: #555;
  font-size: 12px;
`;
export const Select = styled("select")`
  font-size: 14px;
  color: #fff;
  padding: 2px 6px;
  border: 1px solid #fff;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "30px")};
  border-radius: 1px;
  cursor: pointer;
  background: transparent;
  outline: none;
  option {
    font-size: 14px;
    background: #f8f8f8;
    border: 1px solid #fff;
    color: #000;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  @media (max-width: 768px) {
    font-size: 12px;
    height: 20px;
  }
`;
function DaftarSurah() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [surah, setSurah] = useState();
  const location = useLocation();
  const history = useHistory();

  async function apiquran() {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrlQuran}/surah`);
      const json = await res.json();
      console.log("json => ", json);
      setData(json.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // const hash = location.hash;
    // Cek jika hash mengarah ke suatu fragment
    if (surah) {
      // Lakukan aksi sesuai kebutuhan
      console.log("Fragment URL:", surah);
      // Contoh: Scroll ke elemen dengan ID yang sesuai dengan fragment
      const element = document.getElementById(surah);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }, [surah]);

  useEffect(() => {
    apiquran();
  }, []);

  const handlesurah = (e) => {
    setSurah(e.target.value);
  };
  return (
    <>
      <WrappHeader bg="#31b052">
        <Flex>
          <ArrowLeft></ArrowLeft>
          <TextArrow color="fff">Kembali</TextArrow>
        </Flex>
        <Title>Daftar Surah</Title>
        <Select value={surah} onChange={(e) => handlesurah(e)}>
          {data &&
            data.map((surah, index) => (
              <option key={index} value={surah.number}>
                {surah.name.transliteration.id}
              </option>
            ))}
        </Select>
      </WrappHeader>
      <Grid r_gap="none">
        {error && <p>Mohon Maaf Server Sedang Gangguan </p>}
        {loading ? (
          <Skeleton width={"100%"} height={"130px"} amount={16} />
        ) : (
          data.map((sura, index) => (
            <A key={index} to={`/detail-surah/${sura.number}`}>
              <CardSurah id={sura.number}>
                {/* <NomorSurah>{sura.number}</NomorSurah> */}
                <Surah>
                  <NameSurah>{sura.name.transliteration.id}</NameSurah>
                  <EnglishTranslation>
                    ( {sura.name.translation.id} )
                  </EnglishTranslation>
                  <EnglishName>
                    {sura.name.short} ({sura.numberOfVerses} ayat){" "}
                  </EnglishName>
                  <EnglishTranslation>
                    ( {sura.revelation.id} )
                  </EnglishTranslation>
                </Surah>
              </CardSurah>
            </A>
          ))
        )}
      </Grid>
    </>
  );
}
export default DaftarSurah;
