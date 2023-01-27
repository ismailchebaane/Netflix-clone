import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { LiveHelpOutlined, Notifications, PersonOutlined, TransferWithinAStationOutlined } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
function NavBar() {
    const [hover,setHover]=useState(false)
    const [isScrolled,setisScrolled]=useState(false)
    window.onscroll=()=>{
        setisScrolled(window.pageYOffset===0?false:true)
        return ()=>(window.onscroll=null);
    }
    return (
        <div className={isScrolled?"scrolled NavBar text-white text-[14px] fixed top-0 w-full z-[999] ":"NavBar text-white text-[14px] fixed  top-0 w-[100%] z-[999] "}>
           <div className='container pl-[50px] h-[70px] justify-between  flex items-center '>
             <div className='left flex  items-center '>
                <Link to="/">
                <img className='h-[25px] mr-[20px] ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt="LogoNetflix"></img>
               </Link>
               <div className='responsive'>
                <span className='mr-[20px] cursor-pointer font-medium text-[16px]'>Home</span>
                <span className='mr-[20px] cursor-pointer font-medium text-[16px]'>TV Shows</span>
                <span className='mr-[20px] cursor-pointer font-medium text-[16px]'>Movies</span>
                <span className='mr-[20px] cursor-pointer font-medium text-[16px]'>Latest</span>
                <Link to='/cart' className='mr-[20px] cursor-pointer font-medium text-[16px]'>My List</Link>
                <span className='mr-[20px] cursor-pointer font-medium text-[16px]'>Browse my Languages</span>
                </div>
             </div>
             <div className='right flex items-center'>
                <SearchIcon className='mx-[15px] cursor-pointer'/>
               <span className='cursor-pointer'>Kid</span>
               <Notifications  className="mx-[15px]  cursor-pointer" />
               <img className='h-[30px] w-[30px] rounded-lg cover cursor-pointer' alt="" src='http://occ-0-7200-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR4RKoiXYmbWb3Njd95htSvRgpNFQ6OUFvXKrY25yhqFRMkinVLvqGPRDBhKHP8UiaqXar2GVfR1If2AvxvlDMLwi_TJXj4.png?r=08c'></img>
              <div  className='Profile '>
                <ArrowDropDownIcon onMouseEnter={()=>{setHover(!hover)}} onMouseLeave={()=>{setHover(false)}} className="mx-[15px]  cursor-pointer" />
                 <div  onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}} className={hover?'option flex flex-col absolute lg:right-20 right-0 h-max w-max pt-2 pb-2  bg-black rounded-sm  ':'option hidden'}>
                  <div className='pr-14  pb-2 flex flex-col'> <Link className="flex p-[10px] items-center cursor-pointer"><img className='mr-2 rounded-lg' src="http://occ-0-7200-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXvHfQy06KCq87W959_ASfZ78T-34XjYXvXndSdD6n9DKjeKaMooe7LiYFm2kVFFtB_wH6sT4g_5TC1cDFHso1g86IUDq10.png?r=962"></img> <Link className="hover:underline" to="/">Jorge</Link></Link>
                   <Link to="/" className="flex p-[10px] items-center cursor-pointer"><img className='mr-2 rounded-lg' src="http://occ-0-7200-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdIXMD_52SU6VaM4SDv-3zdHe6d1y0lFE1v1x3qZP9lGfqAgTv2ygzn5eHbwlOWJZWJF1-_hReALYoltF6e_wtEbB5ZHKgYET1_mAT1-L-WEGZRmctjMX6cIUQiPEoQ0D6FMrrKaTUUv6g.png?r=a13"></img> <Link className="hover:underline" to="/">David/nico</Link></Link>
                   <Link to="/" className="flex p-[10px] items-center cursor-pointer"><img className='mr-2 rounded-lg' src="http://occ-0-7200-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABblk273QcrCjR5jPR9T6L9taELQ9mbaVRrNiR2HzjkJRGuz7kz-ZQAPz4hEXsNe2xFZP7FZtdetaa8xsfjD1apzCdT9BqtE.png?r=3e2"></img> <Link className="hover:underline" to="/">Dad</Link></Link>
                   <Link to="/" className="flex p-[10px] items-center cursor-pointer"><img className='mr-2 rounded-lg' src="http://occ-0-7200-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdzFYgOGZMXGJmvcNvlVm7PXX9JfiS8Hbssnb0cVEpfs2bP__tJsihUnUZkIxir1KTMQTPWYC5eGvF4rFnVoA1KHOqU0_cg.png?r=156"></img> <Link className="hover:underline" to="/">Mom</Link></Link>
                   <Link to="/"  className="mt-2 ml-2"><SettingsOutlinedIcon fontSize='large' /> <Link to='/'  className="ml-1 hover:underline">Manage Profiles</Link></Link>
                   <Link to="/"  className="mt-2 ml-2"><TransferWithinAStationOutlined fontSize='large' /> <Link to='/'  className="ml-1 hover:underline">Transfer Profile</Link></Link>
                   <Link to="/"  className="mt-2 ml-2"><PersonOutlined  fontSize='large'/> <Link to='/'  className="ml-1 hover:underline">Account</Link></Link>
                   <Link to="/"  className="mt-2 ml-2"><LiveHelpOutlined  fontSize='large'/> <Link to='/' className="ml-1 hover:underline">Help Center</Link></Link>
                 </div>
                   <hr></hr>
                    <span className='p-[10px] mt-1   flex items-center justify-center hover:underline' ><Link to="/">Sign out of Netflix</Link></span>
                 </div>
              </div>
                 </div>     
           </div>
        </div>
    )
}

export default NavBar
