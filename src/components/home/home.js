import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import baner from '../img/ms.png'
import Clock from '../../partials/jam'
import { WrappHeader,WrappMain } from '../../globalStyle'
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from '../sidebar/sidebar';

const WrappHome = styled(WrappMain)`
    padding:0;
    top:0;
    @media ( max-width:900px){
        /* padding-top:50px; */
    }
`
    const Icon = styled('div')`
    display: flex;
    position: relative;
    cursor: pointer;
`
const Menu = styled(HiMenu)`
    width:30px;
    height:30px;
    font-weight:800;
    cursor: pointer;
    &:hover{
    transition:.2s ease-in;
        color:#010101;
    }
`
const Close = styled(CgClose)`
    width:30px;
    height:30px;
    position:absolute;
    left:220px;
    font-weight:600;
    z-index:999999;
    color:#31b052;
    cursor: pointer;
    &:hover{
    transition:.2s ease-in;
    }
    @media(max-width:600px){
        left:250px;
    }
   
    
`
const Search = styled(FiSearch)`
    width:18px;
    height:18px;
    cursor: pointer;
    &:hover{
    transition:.2s ease-in;
    color:#010101;
    }
`
const TextQuran = styled('h4')`
    color:#fff;
    font-size:1.4rem;
    font-weight:500;
    font-family:'Poppins' sans-serif;
`
// end Header
const WrapBanner = styled('img')`
    width:100%;
    height:400px;
    object-fit:contain;
    background-position:center;
    background:#e5e5e5;
    /* margin-bottom:5px; */
    @media(max-width:768px){
        padding-top: 100px;
        object-fit:cover;
        margin-top: -10px;

    }
 
`

const WrappCard = styled('div')`
    display:flex;
    width:100%;
    align-items:center;
    border-radius:4px;
    padding:20px 20px 30px 20px ;
    flex-direction:column;
    /* box-shadow:0 0 4px 1px rgba(0,0,0,0.1); */
    margin-top:4px;
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
    /* margin-right:14px; */
`
const NamaWatku = styled('p')`
    font-size:16px;
    color:#999;
    @media(max-width:768px){
    font-size:14px;
        
    }
`
const Jam = styled('h3')`
    color:#31b052;
    font-size:16px;
    padding: 10px 0;

`
const WrappKota = styled('div')`
    display:flex;
    justify-content:space-between;
    position: relative;
    margin-bottom:20px;
    width:60%;
    @media(max-width:768px){
        width:100%;
    }
`
const Select = styled('select')`
    font-size:12px;
    width:30%;
    outline:none;
    background:transparent;
    border-radius:4px;
    padding:6px 2px;
    cursor: pointer;
    border:1px solid #d1d1d1;
    @media(max-width:768px){
        width:40%;
    }
    option{
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`

const Option = styled('option')`
    width:100px;
    position: relative;
    font-size:14px;
    @media(max-width:768px){
        font-size:10px;
    }
`
const JadwalSholat = styled('h3')`
    font-size:16px;
    font-weight:500;
    margin-bottom:10px;
    text-transform:uppercase;
    color:#555;
    text-align:center;
    @media(max-width:768px){
        font-size:12px;
    }
`
const Footer = styled('h6')`
    font-size:.8rem;
    color:#555;
    text-align:center;
    font-weight:normal;
    margin-top:10px;
    @media (max-widht:900px){
        margin-bottom:-100px;
    }
`

const Home = () => {
    const [kota, setKota] = useState()
    const [idKota, setIdKota] = useState(1301)
    const [byKota, setByKota] = useState()
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(true)

    const[open, isOpen] = useState(false);
    const sidebar = () => isOpen(!open);

    useEffect(() => {
        const getKota = async() => {
            const response =  await fetch('https://api.myquran.com/v1/sholat/kota/semua')
            const result =  await response.json()
            setKota(result)
        }
        // console.log("GetKota dirender!")
        // if(kota !== ''){
        //     console.log("Masih ada data")
        // }
        getKota()
        return() => {
            isOpen(!open);
        }
    },[])

   
 
    useEffect(() => {
        const getByIdKota = async() => {
            const dates = new Date()
            const years = dates.getFullYear()
            const month = dates.getMonth() + 1
            const date = dates.getDate()
            try{
                const kota2 = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${idKota}/${years}/${month}/${date}`)
                const result2 = await kota2.json()
                if( result2.status === false){
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
        getByIdKota() 

       
     
    },[idKota])

    const handleChange = (e) => {
        setIdKota(e.target.value)
    } 
    
    if(error){
        return <p>Error ......</p>
    }
    
    return(
        <>
            <WrappHeader>
                <Icon onClick={sidebar}>
                    {open ? <Close /> : <Menu />}
                    {open ? <Sidebar /> : '' }
                </Icon>
                <TextQuran> quran</TextQuran>
                {/* <Search /> */}
                <div></div>
            </WrappHeader>
            <WrappHome>
                <WrapBanner src={baner} />
                <WrappCard>
                    <JadwalSholat>Jadwal sholat {byKota && byKota.lokasi} </JadwalSholat>
                    <WrappKota>
                    {   loading ? <p>mohon tunggu...</p> : (
                        byKota &&
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
                        <Select value={idKota} onChange={(e) => handleChange(e)} > 
                                {kota && kota.map((kota, index) => {
                                    return <Option key={index} value={kota.id}>{kota.lokasi}</Option>
                                })
                            }
                        </Select>
                        <Clock />
                    </WrappKota>
                </WrappCard>
                <Footer>&copy; dibuat oleh adamdwimaulana</Footer>
            </WrappHome>
        </>
    )
}
export default Home