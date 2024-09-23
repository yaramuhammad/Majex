export default function TabButton({ label, isActive, onClick }) {
  return (
    <button onClick={onClick} className="w-full md:w-1/4">
      <div
        className={`text-center border-b-2 mb-4 md:mb-0 md:ml-10 ${
          isActive ? "border-red-900" : "border-black"
        }`}
      >
        <p
          className={`text-lg md:text-2xl font-bold ${
            isActive ? "text-primary" : ""
          }`}
        >
          {label}
        </p>
      </div>
    </button>
  );
}
