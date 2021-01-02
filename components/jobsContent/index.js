import React, { useState, useEffect } from "react";
import { Up, Down } from "./arrowIcons";
import { server } from "../../config";
import PostDataWrapper from "./jobDetails";
import JobItems from "./jobTitles";

const JobContent = ({ searchText }) => {
  const [jobs, setJobs] = useState(null);
  const [selectedIndex, setIndex] = useState(null);
  const [jobId, setJobId] = useState(null);
  const [sortData, setSortData] = useState({
    Location: null,
    Role: null,
    // Department: null,
    // Education: null,
    Experience: null,
  });
  const [error, setError] = useState(false);

  const getJobsData = async () => {
    const { Location, Role, Experience } = sortData;
    try {
      const data = await fetch(
        `${server}/api/jobs?search=${searchText}&location=${Location}&role=${Role}&experience=${Experience}`
      );
      const jobsData = await data.json();
      setJobs(jobsData);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    setJobs(null);
    getJobsData();
  }, [sortData.Location, sortData.Role, sortData.Experience, searchText]);

  useEffect(() => {
    getJobsData();
  }, []);

  if (error)
    return (
      <div class="bg-white p-4 w-full flex justify-center items-center text-red-600 font-bold text-2xl">
        Failed to load
      </div>
    );

  if (!jobs)
    return (
      <div class="bg-white p-4 w-full flex justify-center items-center font-bold text-2xl">
        Loading...
      </div>
    );

  let jobslist = jobs;

  const count = jobslist
    .map((ele) => ele.items.length)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  const setSelectedIndex = (index) => {
    if (index === selectedIndex) setIndex(null);
    else setIndex(index);
  };

  const setSelectedJobId = (job_id) => {
    if (job_id === jobId) setJobId(null);
    else setJobId(job_id);
  };

  const setSelectedSort = (key) => {
    const sortDataClone = { ...sortData };
    const value = sortDataClone[key];
    if (value === "asc") sortDataClone[key] = "desc";
    if (value === "desc") sortDataClone[key] = null;
    if (value === null) sortDataClone[key] = "asc";
    setSortData(sortDataClone);
  };

  return (
    <div class="bg-white p-4 w-full">
      <div class="flex justify-between">
        <div>
          <span class="font-bold">{count} </span>
          <span class="font-medium">job postings</span>
        </div>
        <div class="hidden xl:flex flex-row">
          <span class="pointer capitalize mx-2 text-gray-400">Sort by</span>
          {Object.keys(sortData).map((ele) => (
            <span
              class="cursor-pointer capitalize mx-2 text-black flex"
              onMouseDown={() => setSelectedSort(ele)}
              key={ele}
            >
              <span>{ele}</span>
              <span>
                {sortData[ele] === "asc" && <Up />}
                {sortData[ele] === "desc" && <Down />}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div class="my-2 mx-4 cursor-pointer pr-4">
        {jobslist.map((ele, index) => (
          <div key={ele.name}>
            <div
              class="py-2 flex items-center"
              onMouseDown={() => setSelectedIndex(index)}
            >
              <span class="p-2 bg-gray-400 mr-2 rounded-lg text-white font-medium">
                {ele.items[0].state}
              </span>
              <span class="font-medium text-sm leading-6">
                {ele.total_jobs_in_hospital} jobs for {ele.name}
              </span>
            </div>
            {selectedIndex === index &&
              ele.items.map((job) => (
                <div class="border-t border-gray-200 py-2" key={job.job_id}>
                  <JobItems job={job} setSelectedJobId={setSelectedJobId} />
                  {jobId === job.job_id && <PostDataWrapper job={job} />}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobContent;
