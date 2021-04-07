import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import notfound from '../img/masjidilharam.jpeg'
import Clock from '../../partials/jam'
import { A,WrappHeader,WrappMain } from '../../globalStyle'
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from '../sidebar/sidebar';
import Skeleton from '../../partials/skeleton'

const WrappHome = styled(WrappMain)`
    padding:0;
    top:0;
    @media ( max-width:900px){
        padding-top:50px;
    }
`
    const Icon = styled('div')`
    display: flex;
    position: relative;
    cursor: pointer;
`
const Menu = styled(HiMenu)`
    width:18px;
    height:18px;
    font-weight:800;
    cursor: pointer;
    &:hover{
    transition:.2s ease-in;
        color:#010101;
    }
`
const Close = styled(CgClose)`
    width:18px;
    height:18px;
    z-index:999999;
    color:#fff;
    cursor: pointer;
    &:hover{
    transition:.2s ease-in;
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
    object-fit:cover;
    background:#e5e5e5;
    margin-bottom:5px;
 
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
const Select = styled('select')`
    font-size:10px;
    width:40%;
    outline:none;
    background:transparent;
    border-radius:4px;
    padding:6px 2px;
    cursor: pointer;
    border:1px solid #d1d1d1;
    
    option{
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`
// const Select = styled.select`
//   width: 20%;
//   height: 35px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;

//   option {
//     color: black;
//     background: white;
//     display: flex;
//     white-space: pre;
//     min-height: 20px;
//     padding: 0px 2px 1px;
//   }
// `;
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

const Home = () => {
    console.log("function Home Dieksekusi")
    const [kota, setKota] = useState()
    const [idKota, setIdKota] = useState()
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
        console.log("Ops data kosong harus drender!")
    },[])

   
    const getByIdKota = async() => {
        const dates = new Date()
        const years = dates.getFullYear()
        const month = dates.getMonth() + 1
        const date = dates.getDate()
        try{
            const kota2 = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${idKota?idKota:1301}/${years}/${month}/${date}`)
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
    useEffect(() => {
        // console.log("getBYIDkota dirender~~!")
        // if(idKota === ''){
        //     console.log("Kosong tidak render ulang")
        // }
        getByIdKota() 
        console.log("ada render ulang")
     
    },[idKota])

    const handleChange = (e) => {
        console.log( "HandleChange Dirender~~")
        setIdKota(e.target.value)
    } 
    // const values = () => {
    //     if(idKota === null ){
    //         return "pilih kota"
    //     }else{
    //     return idKota
    //     }
    // }
    if(error){
        return <p>Error ......</p>
    }

    console.log("Component Dirender!")
    return(
        <>
            <WrappHeader>
                <Icon onClick={sidebar}>
                    {open ? <Close /> : <Menu />}
                    {open ? <Sidebar /> : '' }
                </Icon>
                <TextQuran> quran</TextQuran>
                <Search />
            </WrappHeader>
            <WrappHome>
                <WrapBanner src={notfound} />
                <WrappCard>
                    <JadwalSholat>Jadwal sholat {byKota && byKota.lokasi} </JadwalSholat>
                    <WrappKota>
                    {
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
                        // )
                    }
                    </WrappKota>
                    <WrappKota>
                        <Select value={idKota?idKota:1301} onChange={(e) => handleChange(e)} > 
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