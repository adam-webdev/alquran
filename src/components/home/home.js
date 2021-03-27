import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import notfound from '../img/masjidilharam.jpeg'
import Clock from '../../partials/jam'
import { WrappMain } from '../../globalStyle'

function Home(){
    const [kota, setKota] = useState()
    const [idKota, setIdKota] = useState(1301)
    const [byKota, setByKota] = useState()
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(true)

    async function getKota(){
        
            const kota =  await fetch('https://api.myquran.com/v1/sholat/kota/semua')
            const result =  await kota.json()
            setKota(result)
        
    }

    useEffect(() => {
        getKota()
    },[])

    async function getByIdKota(){
        const dates = new Date()
        const years = dates.getFullYear()
        const month = dates.getMonth() + 1
        const date = dates.getDate()
        setLoading(true)
        try{
            const kota2 = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${idKota}/${years}/${month}/${date}`)
            const result2 = await kota2.json()
            if( result2.status == false){
                setError(true)
            } else {
            setByKota(result2.data)
            }
        } catch (error){
            setError(true);
        } finally{
             setLoading(false)
        }
    }
  
    const handleChange = (e) => {
        setIdKota(e.target.value)
    }  

    useEffect(() => {
        getByIdKota()
    },[idKota])


    const WrappHome = styled(WrappMain)`
        padding-top:60px; 
        top:0;
        @media ( max-width:900px){
            padding-top:50px;
        }
    `
    const WrapBanner = styled('img')`
        width:450px;
        height:250px;
        object-fit:cover;
        border-radius:4px;
        background:#e5e5e5;
        margin-bottom:5px;
        @media ( max-width: 900px){
            width:375px;
            border-radius:0 0 4px 4px;
        }
    `
  
    const WrappCard = styled('div')`
        display:flex;
        width:100%;
        align-items:center;
        background:#f8f8f8;
        border-radius:4px;
        padding:20px ;
        flex-direction:column;
        box-shadow:0 0 4px 1px rgba(0,0,0,0.1);
        margin-bottom:20px;
        margin-top:10px;
        box-sizing:border-box;
        @media ( max-width:900px){
            padding-left:10px;
            padding-right:10px;
        }
    `
    const CardWaktu = styled('div')`
        text-align:center;
        display:flex;
        flex-direction:column;
        font-size:16px;
        margin-right:14px;
    `
    const NamaWatku = styled('p')`
        font-size:12px;
        color:#999;
    `
    const Jam = styled('h3')`
        color:#31b052;
        font-size:16px;
    `
    const WrappKota = styled('div')`
        display:flex;
        justify-content:space-between;
        position: relative;
        margin-bottom:20px;
        width:100%;
  `
    const Kota = styled('select')`
        font-size:10px;
        width:150px;
        outline:none;
        background:transparent;
        border-radius:4px;
        padding:6px 2px;
        cursor: pointer;
        border:1px solid #d1d1d1;
    `
  
    const Option = styled('option')`
        width:100px;
        position: relative;
        font-size:10px;
    `
    const JadwalSholat = styled('h3')`
        font-size:14px;
        font-weight:500;
        margin-bottom:10px;
        text-transform:uppercase;
        color:#555;
        text-align:center;
    `
    const Footer = styled('h6')`
        font-size:.8rem;
        color:#555;
        text-align:center;
        font-weight:normal;
        margin-top:60px;
        @media (max-widht:900px){
            margin-bottom:-100px;
        }
    `
    console.log("ID KOTAA  : " + idKota);
    
   
    if(error){
        return <p>Error ......</p>
    }
    return(
        <>
            <WrappHome>
                <WrapBanner src={notfound} />
                <WrappCard>
                    
                    <JadwalSholat>Jadwal sholat {loading ? (<p>...</p>):(byKota.lokasi)}</JadwalSholat>
                    <WrappKota>
                    {
                        loading ? (<p> ....</p> ):
                        (
                          <> 
                         <CardWaktu><NamaWatku>Imsak</NamaWatku><Jam>{byKota.jadwal.imsak}</Jam></CardWaktu>
                         <CardWaktu><NamaWatku>Subuh</NamaWatku><Jam>{byKota.jadwal.subuh}</Jam></CardWaktu>
                         <CardWaktu><NamaWatku>Dhuha</NamaWatku><Jam>{byKota.jadwal.dhuha}</Jam></CardWaktu>
                         <CardWaktu><NamaWatku>Dzuhur</NamaWatku><Jam>{byKota.jadwal.dzuhur}</Jam></CardWaktu>
                         <CardWaktu><NamaWatku>Ashar</NamaWatku><Jam>{byKota.jadwal.ashar}</Jam></CardWaktu>
                         <CardWaktu><NamaWatku>Maghrib</NamaWatku><Jam>{byKota.jadwal.maghrib}</Jam></CardWaktu>
                         <CardWaktu><NamaWatku>Isya</NamaWatku><Jam>{byKota.jadwal.isya}</Jam></CardWaktu>
                           </> 
                        )
                    }
                    </WrappKota>
                    <WrappKota>
                        <Kota value={idKota} onChange={(event) => handleChange(event)} > 
                        { loading ? (<p>memuat data</p>):
                                (    
                                   kota && kota.map((kota, index) => {
                                        return <Option key={index} value={kota.id}>{kota.lokasi}</Option>
                                    })
                                )
                            }
                        </Kota>
                        <Clock />
                    </WrappKota>
                </WrappCard>
                <Footer>&copy; dibuat oleh adamdwimaulana</Footer>
            </WrappHome>
        </>
    )
}
export default Home