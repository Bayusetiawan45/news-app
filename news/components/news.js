export default function News({routes}) {
  return (
    <div onClick={()=>{routes('tampan bgt')}}>
      <img
        class="object-cover h-60 rounded-xl mb-3"
        src="https://bit.ly/dan-abramov"
        style={{width:"551px"}}
        
      />
      <h5 class="text-2xl font-semibold mb-3 text-gray-700" style={{width:"551px"}}>
        safe and reliable shipment of your product is our top priority
      </h5>
      <p className="text-lg text-gray-500  mb-3">12 Desember 2021</p>
      <p className="text-gray-700 text-base font-normal  mb-3">#ship</p>
      <p class="text-gray-500  mb-5" style={{width:"551px"}} >
        Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci,
        nec ornare metus semper sed. Integer volutpat ornare erat sit amet
        rutrum.
      </p>
      <p className="text-lg mb-3" style={{ color: "#F67704" }}>Read More</p>
    </div>
  );
}
