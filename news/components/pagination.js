export default function Pagination({page, setPage}) {
    return (
      <div className=" flex mb-20 justify-center">
        {page !== 1 &&  <button onClick={() => setPage(1)} type="button" class="bg-white focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" style={{color:"#F67704"}}>Prev</button>}
        <button onClick={() => setPage(1)} type="button" class={`${page === 1 ? "bg-gray-300" : "bg-white"}  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`} style={{color:"#F67704"}}>1</button>
        <button onClick={() => setPage(2)} type="button" class={` ${page === 2 ? "bg-gray-300" : "bg-white"} focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`} style={{color:"#F67704"}}>2</button>
        {page !== 2 && <button onClick={() => setPage(2)} type="button" class="bg-white  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" style={{color:"#F67704"}}>Next</button>}
      </div>
    );
  }
  