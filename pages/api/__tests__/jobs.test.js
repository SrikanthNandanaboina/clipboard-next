import { createMocks } from "node-mocks-http";
import handleJobs from "../jobs";
import jobs from "../../../data/jobs";

describe("Jobs handler", () => {
  beforeAll(() => {
    // search.mockReturnValue([{ name: jobs[0].name }]);
    // sortFunc.mockReturnValue([jobs[0]])
  });

  test("should get response status to be 200", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "null",
        location: "null",
        experience: "null",
        role: "null",
      },
    });

    await handleJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  test("should get searched response", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "mammoth",
        location: "null",
        experience: "null",
        role: "null",
      },
    });

    await handleJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()[0].name).toBe(jobs[0].name);
  });

  test("should get sorted response", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "null",
        location: "ca",
        experience: "null",
        role: "null",
      },
    });

    await handleJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()[0].items[0].state).toBe(jobs[0].items[0].state);
  });
});
