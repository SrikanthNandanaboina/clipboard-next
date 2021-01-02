// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from "../../data/jobs";
import Search from "./utils/searchfunc";
import SortFunc from "./utils/sortfunc";

export default async function handleJobs(req, res) {
  res.statusCode = 200;

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  const { search, role, experience, location } = req.query;
  let matchedJobs = jobs;
  if (search && search !== "null") matchedJobs = Search(jobs, search);
  if ([role, experience, location].some((ele) => ele !== "null")) {
    matchedJobs = SortFunc(jobs, { location, role, experience });
  }
  res.json(matchedJobs);
}
