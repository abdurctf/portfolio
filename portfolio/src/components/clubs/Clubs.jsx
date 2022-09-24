import React from 'react'
import './clubs.css'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HackaBull from '../../assets/hackabull.png'
import Icpc from '../../assets/icpc.png'

const data=[
    {
      id:1,
      title:'USF SCP',
      position:"Member, 2020-Present",
      image:"https://media-exp1.licdn.com/dms/image/C4D0BAQE-8JJzumxbsg/company-logo_200_200/0/1615164906583?e=2147483647&v=beta&t=K6shtA3ooyYDQrjzhxYdwAUeckmY06tbZRPaMO6BI08"
    },
    {
      id:2,
      title:'USF SHPE',
      position:"Member, 2020-Present",
      image:"https://pbs.twimg.com/profile_images/1221841832599941121/OEoPC8Jh_400x400.jpg"
    },
    {
      id:3,
      title:'MSA USF',
      position:"Member, August 2020- Present",
      image:"https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.6435-9/34660003_1828210337217198_249448513685946368_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VHpldz1BykoAX_20GZI&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT-EeZpd_DVdHrDVF9irziFFiTiIR94358XxfgDAYrPenQ&oe=634B36DA"
    },
    {
      id:4,
      title:'TMC USF',
      position:"Jummah Coordinator, August 2022-Present",
      image:"https://yt3.ggpht.com/a/AATXAJx9Q3mNjtebf6BdJqWFcrlCbPNv5m-v3HBM3Q=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
      id:5,
      title:'Hackabull USF',
      position:"March 23,2022",
      image: HackaBull
    },
    {
      id:6,
      title:'ICPC 2022 Regionals',
      position:'March 8th, 2022',
      image: Icpc
    },
  
  
  ]

const clubs = () => {
  return (
    <section id='clubs'>
        
        <h2>ECAs</h2>

    <Swiper className="container clubs__container"
    modules={[Pagination, Autoplay]} spaceBetween={40}
    slidesPerView={1}
    pagination={{clickable:true}}
    autoplay={{delay:1500}}>
        {
            data.map(({title, position, image}, index) => {
                return(
                    <SwiperSlide key ={index} className="club">
                        <div className='club__image'>
                            <img src={image}/>

                        </div>
                        <h5 className='club__name'>{title}</h5>
                        <h5 className='club__name'>{position}</h5>
                        
                    </SwiperSlide>
                )
            
        })
}
    </Swiper>
    </section>
  )
}

export default clubs