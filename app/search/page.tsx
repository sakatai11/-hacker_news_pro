import Title from "../_components/elements/title/Index";
import * as Search from "../../features/search/components/Index"


export default async function SearchPage() {
  
  return (
      <>
        <Title text={"Search"} />
        <Search.SearchWrapper />
      </>
  );
}
