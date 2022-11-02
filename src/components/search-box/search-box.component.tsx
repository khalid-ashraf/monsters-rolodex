import { ChangeEventHandler } from "react";

import "./search-box.style.css";

//Types for TS
type SearchBoxProps = {
	className: string;
	placeholder?: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

//SearchBox component
const SearchBox = ({
	className,
	placeholder,
	onChangeHandler,
}: SearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
