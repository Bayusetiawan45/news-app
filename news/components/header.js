export default function Header() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex space-x-4">
        <div
          className="flex justify-center text-5xl font-semibold text-white rounded-2xl py-0.5 pxt-3"
          style={{
            backgroundColor: "#F67704",
            width: "54px",
            height: "54px",
          }}
        >
          <span>S</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold" style={{ color: "#F67704" }}>
            Serba
          </span>
          <span className="text-xl font-semibold" style={{ color: "#F67704" }}>
            Serbi
          </span>
        </div>
      </div>
      <div>
        <ul className="flex space-x-10 font-semibold text-gray-500 text-base">
          <li>Home</li>
          <li>Article</li>
        </ul>
      </div>
      <div />
    </div>
  );
}
