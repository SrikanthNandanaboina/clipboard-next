import moment from "moment";

const JobItems = ({ job, setSelectedJobId }) => (
  <div class="flex flex-col" onMouseDown={() => setSelectedJobId(job.job_id)}>
    <span class="font-bold text-base">{job.job_title}</span>
    <div class="flex flex-col justify-between xl:flex-row">
      <span class="font-medium text-sm my-1">
        {job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} an hour
        | {job.county}, {job.state}
      </span>
      <span class="font-medium text-sm">{moment(job.created).fromNow()}</span>
    </div>
  </div>
);

export default JobItems;
