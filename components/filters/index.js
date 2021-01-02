import React, { useState, useEffect } from "react";
import { server } from "../../config";

const Filter = () => {
  const [filters, addFilterData] = useState({});
  const [filterTypeState, setFilters] = useState([]);

  const getFilterData = async () => {
    const data = await fetch(`${server}/api/filters`);
    const filterData = await data.json();
    addFilterData(filterData);
    const filterTypes = Object.keys(filterData).map((ele) => ({
      key: ele,
      count: 10,
      expanded: false,
    }));
    setFilters(filterTypes);
  };

  useEffect(() => {
    getFilterData();
  }, []);

  const setFiltersData = (index, count) => {
    const data = [...filterTypeState];

    if (count > -1) {
      data[index].count = 10;
      data[index].expanded = false;
      setFilters(data);
    } else {
      data[index].count = filters[data[index].key].length;
      data[index].expanded = true;
      setFilters(data);
    }
  };

  return (
    <div class="hidden xl:flex flex-col w-1/4">
      {filterTypeState.map(({ key, expanded, count }, index) => (
        <div key={key} class="mr-4 mb-4 bg-white h-auto cursor-pointer p-6">
          <span class="font-bold uppercase">{key.split("_")}</span>
          {filters[key].slice(0, count).map((filterData) => (
            <div class="my-4" key={filterData.key}>
              <span class="font-medium mr-4 text-sm">{filterData.key}</span>
              <span class="font-normal text-xs text-gray-300">
                {filterData.doc_count}
              </span>
            </div>
          ))}
          {filters[key].length >= count &&
            (expanded ? (
              <span
                class="text-sm text-blue-600"
                onMouseDown={() => setFiltersData(index, 10)}
              >
                Show less
              </span>
            ) : (
              <span
                class="text-sm text-blue-600"
                onMouseDown={() => setFiltersData(index, -1)}
              >
                Show more
              </span>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
