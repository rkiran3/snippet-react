import React from 'react';

export default function Filter({filter, handleFilter}) {

    return (
        <span className="c-cb">
            Filter <input 
                id="filter"
                name="filter"
                type="text" 
                value={filter}
                onChange={handleFilter} style={{color: "red", marginLeft: "32px" }} >
            </input>
      </span>
    )

}

