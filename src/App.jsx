import React from 'react'
import {  Routes, Route, NavLink } from 'react-router-dom';
import Test from './Component/Test'
import HomePage from './Component/HomePage';
const App = () => {
  return (
    <>
   <div class="w-[1440px] h-[2170px] relative bg-neutral-900">
    <div class="w-[571px] h-[601.35px] left-[6px] top-[-99px] absolute bg-slate-500 rounded-full blur-[400px]"></div>
    <div class="w-[1440px] h-[960px] left-0 top-0 absolute bg-gradient-to-b from-red-200 to-red-200"></div>
    <div class="w-[246px] h-[127px] left-[1125px] top-[815px] absolute">
        <div class="w-[97px] h-[127px] left-0 top-0 absolute">
            <div class="w-[97px] h-[127px] left-0 top-0 absolute bg-zinc-300"></div>
            <img class="w-[97px] h-[127px] left-0 top-0 absolute" src="https://via.placeholder.com/97x127" />
        </div>
        <div class="left-[121px] top-[20px] absolute text-white text-xl font-normal font-['?????']">Revenant</div>
        <div class="w-[125px] h-12 left-[121px] top-[60px] absolute">
            <div class="left-[61px] top-0 absolute text-white text-base font-normal font-['?????']">2015</div>
            <div class="left-[61px] top-[23px] absolute text-white text-sm font-normal font-['Figtree']">2 h 31 min</div>
            <div class="w-12 h-12 left-0 top-0 absolute">
                <div class="w-12 h-12 left-0 top-0 absolute opacity-20 bg-white rounded-full"></div>
                <div class="w-12 h-12 left-0 top-0 absolute bg-teal-300 rounded-full shadow"></div>
                <div class="left-[14px] top-[14px] absolute text-center text-white text-base font-normal font-['?????']">7.0</div>
            </div>
        </div>
    </div>
    <div class="w-[246px] h-[127px] left-[862px] top-[815px] absolute">
        <div class="w-[97px] h-[127px] left-0 top-0 absolute">
            <div class="w-[97px] h-[127px] left-0 top-0 absolute bg-zinc-300"></div>
            <img class="w-[97px] h-[127px] left-0 top-0 absolute" src="https://via.placeholder.com/97x127" />
        </div>
        <div class="left-[121px] top-[20px] absolute text-white text-xl font-normal font-['?????']">Interstellar</div>
        <div class="w-[125px] h-12 left-[121px] top-[60px] absolute">
            <div class="left-[61px] top-0 absolute text-white text-base font-normal font-['?????']">2012</div>
            <div class="left-[61px] top-[23px] absolute text-white text-sm font-normal font-['Figtree']">2 h 31 min</div>
            <div class="w-12 h-12 left-0 top-0 absolute">
                <div class="w-12 h-12 left-0 top-0 absolute opacity-20 bg-white rounded-full"></div>
                <div class="w-12 h-12 left-0 top-0 absolute bg-teal-300 rounded-full shadow"></div>
                <div class="left-[14px] top-[14px] absolute text-center text-white text-base font-normal font-['?????']">8.6</div>
            </div>
        </div>
    </div>
    <div class="left-[907px] top-[775px] absolute text-white text-xl font-normal font-['?????']">You might also like</div>
    <div class="w-[84px] h-[84px] left-[140px] top-[203px] absolute">
        <div class="w-[84px] h-[84px] left-0 top-0 absolute opacity-20 bg-white rounded-full"></div>
        <div class="w-[84px] h-[84px] left-0 top-0 absolute bg-teal-300 rounded-full shadow"></div>
        <div class="left-[28px] top-[27px] absolute text-center text-white text-2xl font-normal font-['?????']">7.0</div>
    </div>
    <div class="w-[1259px] h-[401px] left-[70px] top-[253px] absolute">
        <div class="w-12 h-12 p-3 left-[986px] top-[249px] absolute bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 inline-flex">
            <div class="justify-start items-center gap-4 flex">
                <div class="w-6 h-6 relative">
                    <div class="w-6 h-6 left-0 top-0 absolute opacity-0 bg-slate-200"></div>
                </div>
            </div>
        </div>
        <div class="w-[171px] h-12 px-5 py-3 left-[791px] top-[249px] absolute bg-white rounded justify-start items-center gap-2 inline-flex">
            <div class="text-black text-xl font-semibold font-['Figtree']">Watch now</div>
        </div>
        <div class="w-[232px] h-10 left-[791px] top-[177px] absolute justify-start items-start inline-flex">
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
            <img class="w-10 h-10 rounded-[40px]" src="https://via.placeholder.com/40x40" />
        </div>
        <div class="left-[791px] top-[144px] absolute text-white text-xl font-normal font-['?????']">Cast</div>
        <div class="w-[468px] left-[791px] top-0 absolute text-white text-base font-normal font-['?????'] leading-normal">One of the few remaining drone repairmen assigned to Earth, its surface devastated after decades of war with the alien Scavs, discovers a crashed spacecraft with contents that bring into question everything he believed about the war, and may even put the fate of mankind in his hands.</div>
        <div class="w-[236px] h-7 left-[17px] top-[373px] absolute justify-start items-start gap-4 inline-flex">
            <div class="px-2.5 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
                <div class="text-white text-xs font-normal font-['?????'] uppercase">Sci-fi</div>
            </div>
            <div class="px-2.5 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
                <div class="text-white text-xs font-normal font-['?????'] uppercase">Adventure</div>
            </div>
            <div class="px-2.5 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-2.5 flex">
                <div class="text-white text-xs font-normal font-['?????'] uppercase">ACTION</div>
            </div>
        </div>
        <div class="left-0 top-[281px] absolute text-white text-7xl font-normal font-['?????']">Oblivion</div>
    </div>
    <div class="w-[97px] h-[140px] left-[1359px] top-[424px] absolute text-white text-5xl font-normal font-['Inter']">...</div>
    <div class="left-[124px] top-[773px] absolute text-white text-xl font-bold font-['Inter']">Trending</div>
    <div class="left-[124px] top-[1316px] absolute text-white text-xl font-bold font-['Inter']">Popular</div>
    <div class="w-[246px] h-[147px] left-[73px] top-[813px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[56.12px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[40.74px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Joker</div>
            <div class="w-[56.12px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2019 Crime</div>
        </div>
    </div>
    <div class="w-[246px] h-[147px] left-[73px] top-[1027px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[56.12px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[40.74px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Joker</div>
            <div class="w-[56.12px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2019 Crime</div>
        </div>
    </div>
    <div class="w-[246px] h-[147px] left-[73px] top-[1359px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[56.12px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[40.74px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Joker</div>
            <div class="w-[56.12px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2019 Crime</div>
        </div>
    </div>
    <div class="w-[246px] h-[147px] left-[73px] top-[1596px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[56.12px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[40.74px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Joker</div>
            <div class="w-[56.12px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2019 Crime</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[336px] top-[813px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[336px] top-[1027px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[871px] top-[1027px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[336px] top-[1359px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[871px] top-[1361px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[336px] top-[1596px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[149px] left-[871px] top-[1598px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-[2px] absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[52.28px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[37.67px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Dune</div>
            <div class="w-[52.28px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2021 Sci-fi</div>
        </div>
    </div>
    <div class="w-[246px] h-[147px] left-[599px] top-[813px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
    <div class="w-[246px] h-[147px] left-[599px] top-[1027px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
    <div class="w-[246px] h-[147px] left-[1134px] top-[1027px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
    <div class="w-[246px] h-[147px] left-[599px] top-[1359px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
    <div class="w-[246px] h-[147px] left-[1134px] top-[1361px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
    <div class="w-[246px] h-[147px] left-[599px] top-[1596px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
    <div class="w-[246px] h-[147px] left-[1134px] top-[1598px] absolute">
        <div class="w-[246px] h-[147px] left-0 top-0 absolute">
            <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-black"></div>
            <img class="w-[246px] h-[147px] left-0 top-0 absolute" src="https://via.placeholder.com/246x147" />
        </div>
        <div class="w-[246px] h-[147px] left-0 top-0 absolute bg-gradient-to-b from-black to-black"></div>
        <div class="w-[68.42px] h-[39.15px] left-[18.45px] top-[88.68px] absolute">
            <div class="w-[68.42px] h-[19.17px] left-0 top-0 absolute text-white text-xl font-normal font-['?????']">Inception</div>
            <div class="w-[53.81px] h-[13.58px] left-0 top-[25.57px] absolute text-white text-sm font-normal font-['?????']">2010 Sci-fi</div>
        </div>
        <div class="w-[150.68px] h-[3.20px] left-0 top-[143.80px] absolute bg-teal-300"></div>
    </div>
</div>
        
      

    </>
  )
}

export default App






















































// import React from 'react'
// import { useState } from 'react'
// import Ex from './Ex'
// const App = () => {
//   const [count,setCount]=useState(0)

// const add =()=>{
//   setCount(count+1)
// }

//   const [search,setSearch]=useState(
//     localStorage.getItem('search') || ""
//     )

//     React.useEffect(() => {
//       localStorage.setItem('search', search);
//       }, [search])
  


//       const handleSearch = event => {
//         setSearch(event.target.value);
       
//         };

//   const stories = [
//     {
//       title: "Introduction to Ethical Hacking",
//     },
//       {title: "John Doe",},
    

//     {
//       title: "Security Vulnerabilities in IoT Devices",}
//       ,{title: "Jane Smith"},
      
//     ]
// const filteredStories=stories.filter((event)=>{
// return event.title.toLowerCase().includes(search.toLowerCase())})

//   return (
       
//     <div>
//       <input type="text" 
//       placeholder='search...'
//       value={search}
//       onChange={handleSearch}
//        />

//        {filteredStories.map((item,index)=>(
//         <div key={index}>
//           {item.title}
//         </div>
//        ))}

//        <button onClick={add}> Describe </button>
//        <div>{count === 1 ? <Ex /> : <h1></h1>}</div>
//     </div>
//   )
// }

// export default App












// import React from 'react'
// import { useState } from 'react'

// import HOMEpage from './HOMEpage'
// import Mess from './Mess'
// import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
// const App = () => {


//   const [info,setInfo]=useState([])
  
// const click= (event)=>{
// event.preventDefault();
// const updatedInfo=[...info,item]
// setInfo(updatedInfo)
// }


//   return (
//     <div>
//       <div>

//       <BrowserRouter>
//       <header>
//         <nav>
//       <NavLink to='/'>Mess</NavLink>
//       <NavLink to='HOMEpage'>HOMEpage</NavLink>
//       </nav>
//       </header>
//       <main>
//       <Routes>
//         <Route path='/' element={<Mess click={click}/>}/>
//         <Route path='HOMEpage' element={<HOMEpage info={info}/>}/>
//       </Routes>
//       </main>
//       </BrowserRouter>

//       </div>
    
    
//     </div>
//   )
// }

// export default App























