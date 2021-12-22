import React from 'react'

function Filter({filterHandler}) {
    return (
        <div className="filter-wrapper">
            <label> SORT BY: </label>
            <select onChange={filterHandler}>
                <option value="all">All</option>
                <option value="finished">Finished</option>
                <option value="not">Not Finished</option>
            </select>
        </div>
    );
}

export default Filter
