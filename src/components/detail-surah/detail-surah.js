import React, { useEffect, useState } from 'react'
import { Card, WrappMain } from '../../globalStyle'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


function DetailSurah(){
    const [data, setData] = useState({})
    const {id} = useParams();

    async function Surah(){
        const res = await fetch(`https://api.quran.sutanlab.id/surah/${id}`)
        const json = await res.json()
        setData(json.data)
    }
   
    useEffect(() => {
        Surah()
    },[])

    const CardHeader = styled('div')`
        display:flex;
        justify-content:space-between;
        align-items:center;
        position: relative;
        @media (max-width:768px){
            padding:0 8px;
        }
    `
    const CardBody = styled(CardHeader)`
        margin-top:10px;
        flex-direction:column;
    `
    const TextQuran = styled('h1')`
        font-size:1.7rem;
        line-height:60px;
        text-align:end;
        padding:10px 10px;
        font-weight:normal;
        margin-bottom:20px;
    `
    const TextLatin = styled('h3')`
        font-size:1rem;
        font-weight:normal;
        color:#6a6a6a;
        margin-top:20px;
        text-align:start;
    `
    const Detail = styled('div')`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:10px;
        margin:10px 0;
    `
    return(
        <WrappMain>
            { 
                data.verses.map((ayah) => {
                    console.log("DATA : " + ayah)
                    return(
                            <Card key={ayah.number.inQuran}>
                                <CardHeader>
                                    <p>ayat {ayah.number.inSurah}</p>
                                    <div>
                                        <a href="/">Share</a>
                                    </div>
                                </CardHeader> 
                                <CardBody>
                                    <TextQuran>{ayah.text.arab}</TextQuran>
                                    <TextLatin>{ayah.text.transliteration.en}</TextLatin>
                                </CardBody>
                            </Card>
                        )
                })
            }
        </WrappMain>
    )
}
export default DetailSurah
   // useEffect(() => {
    //     fetch(`https://api.banghasan.com/quran/format/json/surat/${id}`)
    //     // fetch(`https://api.quran.sutanlab.id/surah/${id}`)
    //     .then(res => res.json())
    //     .then(item => {
    //         // console.log(item)
    //         setData(item)
    //     })
    //     .catch(err => console.log(err))
    // },[])