import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export function getProjects() {
  const filePath = path.join(process.cwd(), "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContents);
  return projects;
}

export async function GET(request) {
  try {
    const projects = await getProjects();
    // console.log(projects);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
