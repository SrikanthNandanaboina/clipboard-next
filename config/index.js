const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://clipboard-health-o33yjjy9z.vercel.app";
