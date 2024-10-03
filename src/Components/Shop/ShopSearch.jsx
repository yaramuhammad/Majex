import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopSearch() {
  return (
    <>
      <h2 className="text-3xl font-bold text-primary py-5">
        Shop Right Now
      </h2>
      <form className="flex border-2 items-center text-primary p-2 rounded-lg">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          name="search"
          placeholder="Search your product"
          className="border-none ml-2 rtl:mr-2 w-full focus:outline-none"
        />
      </form>
    </>
  );
}
export default ShopSearch;
