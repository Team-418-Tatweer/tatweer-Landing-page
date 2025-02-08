import NavBar from "./header";

export default function Hero(){
    return(
        <section>
            <div className="bg-[#172755] h-screen w-full bg-[url('/images/hero/vector.svg'),url('/images/hero/group1000003694.svg')] bg-no-repeat bg-cover bg-[position:center,botom]">
            <NavBar/>
                
            <div className=" flex flex-row justify-between items-center w-full mt-24 ">
                <div className="text-white ml-12 ">
                <h1 className=" text-3xl md:text-4xl font-bold mb-4">AI-Driven Business Planning & Execution</h1>
            <p className="text-xl md:text-2xl mb-6">Stay Ahead of the Game</p>
            <p className="text-base md:text-lg mb-8">SynexFlow helps businesses synchronize sales, operations, and logistics with AI-powered real-time decision-making</p>
<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Request a Demo</button>

                </div>
               <img src="/images/hero/group1000003695.svg"/>
            </div>
            
            
                </div>
        </section>
    )
}