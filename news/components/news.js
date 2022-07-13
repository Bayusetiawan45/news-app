export default function News({routes, data}) {

  console.log("data", data)

  return (
    <div >
      <img
        className="object-cover h-60 rounded-xl mb-3"
        src={data?.urlToImage ?? "./altImage.svg"}
        style={{width:"551px"}}
      />
      <h5 className="text-2xl font-semibold mb-3 text-gray-700" style={{width:"551px"}}>
        {data?.title ?? "No Title"}
      </h5>
      <p className="text-lg text-gray-500  mb-3">{data?.publishedAt ?? "No Publised Date"}</p>
      <p className="text-gray-700 text-base font-normal  mb-3">{data?.author}</p>
      <p className="text-gray-500  mb-5" style={{width:"551px"}} >
        {data?.description ?? "No Description"}
      </p>
      <p onClick={()=>{routes(data.title)}} className="text-lg mb-3" style={{ color: "#F67704", cursor:"pointer"}}>Read More</p>
    </div>
  );
}
