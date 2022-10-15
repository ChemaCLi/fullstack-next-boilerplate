import 'antd/dist/antd.css';
import { Searchbar } from "../src/client/ui/components/shared"

export default {
  title: "SearchBar/WideSearchBar",
  component: Searchbar
}

export const HeaderSearchBarInHeader = args => {
  return <Searchbar />
}

HeaderSearchBarInHeader.args = {
  placeholder: "Search users"
}
