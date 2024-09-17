import './index.css';

import pic2 from './image/logo.jpeg';
import pic3 from './image/image.jpeg';
import pic4 from './image/global2.jpeg';
import pic5 from './image/global3.jpeg';
import pic6 from './image/global4.jpeg';
import pic7 from './image/global5.jpeg';
import pic8 from './image/global6.jpeg';
import pic9 from './image/global7.jpeg';
import pic10 from './image/global8.jpeg';
import pic11 from './image/global9.jpeg';
import pic12 from './image/global10.jpeg';
import pic13 from './image/global11.jpeg';
import pic14 from './image/golbal12.jpeg';
import pic15 from './image/global13.jpeg';
import pic16 from './image/global14.jpeg';
import pic17 from './image/image14.jpeg';
import pic18 from './image/image.jpeg';

function App() {
  return (
    <>
      <div className="container  bg-lime-300 h-52 max-w-none z-10 sticky top-0 hover:bg-green-300">

        <div className="flex">
          <img src={pic2} alt='pic2' style={{ height: "125px", width: "125px", marginTop: "50px", marginLeft: "30px" }}></img>
          <div className="flex ml-5 mt-24 font-extrabold text-2xl gap-2 mr-5">
            <h1>Culture</h1>
            <h1 className="h-8 w-8 rounded-xl text-cyan-400 bg-white">Of</h1>
            <h1>Architecture</h1>
            <div className="flex">
              <input placeholder="Search You Like..." className="h-7 ml-40 w-52 font-light text-lg rounded-lg"></input>
              <div className="flex relative right-7 top-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FBFD"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                <div className="flex ml-96 font-light text-base">
                  <button className="bg-sky-400 rounded-lg p-2 h-10 relative left-10 hover:bg-green-400">Sign</button>
                  <div className="flex">
                    <button className="bg-sky-400 rounded-lg ml-20 p-2 top-10 h-10 hover:bg-green-400">Login</button>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="container bg-green-300 h-8 max-w-none">
        <div className="flex justify-around text-center">
        
        <h1>Home</h1> 
        <h1>Awards</h1>
        <h1>Tecnology</h1>
        <h1>New Season</h1>
        <h1>Acadamy</h1>
        <h1>Treading</h1>
        <h1>Country</h1>
      </div>

      </div> <br></br>
    
      <div className="flex relative justify-center">
        <p className="text-xl font-extrabold hover:bg-emerald-300">NEW CONCEPTS</p>
      </div> <br></br>
      <div className="flex absolute ml-20"> 
        <img src={pic3} alt='pic3' style={{ height: "400px", width: "500px", marginTop: "0px", marginLeft: "30px"}}></img>
        <div className="flex justify-center relative">
        <p className="mt-100 bg-slate-200 hover:bg-lime-300">Asian architecture developed differently compared to Europe, and the Buddhist, Hindu and Sikh architectural styles have different characteristics. Unlike Indian and Chinese architecture, which had great influence on the surrounding regions, Japanese architecture did not. Some Asian architecture showed great regional diversity, in particular Buddhist architecture. Moreover, other architectural achievements in Asia is the Hindu temple architecture, which developed from around the 5th century CE, is in theory governed by concepts laid down in the Shastras, and is concerned with expressing the macrocosm and the microcosm.</p>
        <div className="flex justify-center">
      
      <button className="h-14 w-28 relative flex right-96 top-52 bg-green-300 items-center justify-center rounded-2xl hover:bg-green-800">Explore More</button>
      </div>
      </div>
      
      </div> <br></br>
      <div className="container">
        <div className="hover:bg-emerald-300 w-96 font-extrabold text-2xl">
        <p className="flex mt-96 text-center">Global Treading Architecture</p>
        </div>
      <div className="flex mt-10 justify-around ml-10 gap-14">
      <img src={pic4} alt='pic4' style={{height:"200px", width:"300px"}}></img>
      <img src={pic5} alt='pic5' style={{height:"200px", width:"300px"}}></img>
      <img src={pic6} alt='pic6' style={{height:"200px", width:"300px"}}></img>
      <img src={pic7} alt='pic7' style={{height:"200px", width:"300px"}}></img>
        
      </div>
    </div>
     <div className="container">
      <div className="flex mt-20 justify-around ml-10 gap-14">
      <img src={pic8} alt='pic8' style={{height:"200px", width:"300px"}}></img>
      <img src={pic9} alt='pic9' style={{height:"200px", width:"300px"}}></img>
      <img src={pic10} alt='pic10' style={{height:"200px", width:"300px"}}></img>
      <img src={pic11} alt='pic11' style={{height:"200px", width:"300px"}}></img>

      </div>
      </div>
      <div className="container">
      <div className="flex mt-20 justify-around ml-10 gap-14">
      <img src={pic12} alt='pic12' style={{height:"200px", width:"300px"}}className="animate__animated animate__heartBeat animate__infinite infinite"></img>
      <img src={pic13} alt='pic13' style={{height:"200px", width:"300px"}}></img>
      <img src={pic14} alt='pic14' style={{height:"200px", width:"300px"}}></img>
      <img src={pic15} alt='pic15' style={{height:"200px", width:"300px"}}></img>

      </div>
      </div> <br></br>
      <div className="container">
        <p className="ml-28 hover:bg-emerald-300 text-center">The CENTRE FOR GLOBAL ARCHITECTURE is an interdisciplinary initiative established to study the planetary changes affecting spatial production today.</p>
      

      </div> <br></br>
      <div className="container bg-green-300 h-60 max-w-none">
        <p className=" h-10 w-40 text-center p-1 font-extrabold text-xl">Useful Links</p>
        <div className="flex justify-around mt-10 font-bold">
      <h1>For designers</h1>
      <h1>Hire talents</h1>
      <h1>Inspiration</h1>
      <h1>Advertising</h1>
      <h1>Blog</h1>
      <h1>About</h1>
      <h1>Careers</h1>
      <h1>Support</h1>


      </div>
      <div className="flex mt-20 font-bold gap-20 ml-10">
        <h1>@2024 Culture Of Architecture</h1>
        <h1>Terms</h1>
        <h1>Privacy</h1>
        <h1>Cookies</h1>
        <div className="flex font-bold gap-20 justify-end mr-20">
        <h1>jobs</h1>
        <h1>Designers</h1>
        <h1>Freelancers</h1>
        <h1>Tags</h1>
        <h1>Eco</h1>
      

      </div>

      </div>
   

      </div>
      
      
      
    
     
      
      
    
    

    </>
    


  )
}

export default App;