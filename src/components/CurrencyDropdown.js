import React from "react";
import "../App.css";

const CurrencyDropdown = ({ value, onChange }) => {
	return (
		<select
			className="form-select"
			value={value}
			onChange={onChange}>
			<option value="£">Currency (£ Pound)</option>
			<option value="$">Currency ($ Dollar)</option>
			<option value="€">Currency (€ Euro)</option>
			<option value="₹">Currency (₹ Rupee)</option>
		</select>
	);
};

export default CurrencyDropdown;
