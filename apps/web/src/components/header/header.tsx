import { SearchBar } from "./components/search";
import { SmallButton } from "@repo/ui/buttons";
import { BaseHeader } from "./header.style";



export const Header = () => {
    return (
        <BaseHeader>
            <div></div>
            <SearchBar/>
            <SmallButton label='로그인'></SmallButton>
        </BaseHeader>
    )
}