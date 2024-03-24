import React from "react"
import Select from "react-select"
import "./FilterBox.css" // Import the CSS file

function FilterBox({ options, onChange }) {
  const handleSelectChange = (selectedOptions) => {
    onChange(selectedOptions.map((option) => option.value)) // Pass an array of selected values to the parent component
  }

  // Convert options array into an array of objects with label and value properties
  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }))

  return (
    <div className='select-container'>
      {" "}
      {/* Apply the class name */}
      <h3>Filter Options</h3>
      <Select
        options={selectOptions}
        isMulti
        onChange={handleSelectChange}
        className='select-menu'
        classNamePrefix='select'
      />
    </div>
  )
}

export default FilterBox
