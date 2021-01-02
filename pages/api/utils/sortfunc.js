const sort = (jobs, sortData) => {
  const names = jobs.map((ele) => ele.name);
  let jobItems = jobs.map((ele) => ele.items).flat(Infinity);
  Object.keys(sortData).forEach((ele) => {
    let varKey;
    if (ele === "location") {
      varKey = "state";
    }
    if (ele === "role") {
      varKey = "job_title";
    }
    if (ele === "experience") {
      varKey = "experience";
    }
    if (sortData[ele] === "asc") asc(jobItems, varKey);
    else if (sortData[ele] === "desc") desc(jobItems, varKey);
  });
  const finalResult = {};
  jobItems.forEach((element) => {
    const status = finalResult[element.name];
    if (status) finalResult[element.name] = [...status, element];
    else finalResult[element.name] = [element];
  });
  const res = Object.keys(finalResult).map((ele) => ({
    name: ele,
    items: finalResult[ele],
    total_jobs_in_hospital: finalResult[ele].length,
    job_title: jobs[names.indexOf(ele)].job_title,
  }));
  return res;
};

const asc = (jobItems, key) =>
  jobItems.sort(function (a, b) {
    return a[key].localeCompare(b[key]);
  });

const desc = (jobItems, key) =>
  jobItems.sort(function (a, b) {
    return b[key].localeCompare(a[key]);
  });

export default sort;
