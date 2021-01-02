const search = (jobs, searchText) => {
  const names = jobs.map((ele) => ele.name);
  const jobItems = jobs.map((ele) => ele.items).flat(Infinity);
  const result = jobItems.filter((ele) => checkString(ele, searchText));
  const finalResult = {};
  result.forEach((element) => {
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

const checkString = (obj, searchText) => {
  const jobKeys = Object.keys(obj);
  for (const key of jobKeys) {
    if (obj[key].toString().toLowerCase().includes(searchText)) {
      return true;
    }
  }
};

export default search;
