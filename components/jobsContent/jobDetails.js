const PostDataWrapper = ({ job }) => (
  <div class="hidden md:flex flex-row">
    <div class="flex flex-col w-9/12">
      <div class="grid grid-cols-8 my-2">
        <span class="font-medium col-span-1">Department</span>
        <span class="text-justify col-start-4 col-span-4 font-medium text-sm leading-6">
          {job.department.join(", ")}
        </span>
      </div>
      <div class="grid grid-cols-8 my-2">
        <span class="font-medium col-span-1">Hours / shifts:</span>
        <span class="text-justify col-start-4 font-medium text-sm leading-6">
          {job.hours[0]} / {job.work_schedule}
        </span>
      </div>
      <div class="grid grid-cols-8 my-2">
        <span class="font-medium col-span-1">Summary</span>
        <span class="text-justify col-start-4 col-span-4 font-medium text-sm leading-6">
          {job.description}
        </span>
      </div>
    </div>
    <div class="w-1/4 flex flex-row justify-between text-center">
      <div></div>
      <div class="flex flex-col justify-end">
        <span class="p-2 bg-blue-500 text-white rounded-lg">Job details</span>
        <span class="py-1 px-2 border-4 border-light-blue-500 text-blue-500 rounded-lg m-2">
          Save job
        </span>
      </div>
    </div>
  </div>
);

export default PostDataWrapper;
