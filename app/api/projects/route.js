import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, image, description } = await req.json();
    //  console.log({ description,title })

    // Check if the project exists already in the database
    const existingProject = await db.project.findFirst({
      where: {
        title: title,
      },
    });
    // console.log(existingProject)

    // When the project already exists the database, show an error message
    if (existingProject) {
      return NextResponse.json(
        {
          error: "Project with this title  already exists",
          message: "title creation failed",
        },
        {
          status: 400,
        }
      );
    }

    // Create project if it doesn't exit in the database
    const project = await db.project.create({
      data: {
        title,
        image,
        description,
      },
    });

    console.log("Project created Successfully and added to the db:", project);
    return NextResponse.json(project);
  } catch (error) {
    console.error("Error creating the project and adding it to the db:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a project",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req) {
  try {
    const projects = await db.project.findMany();

    console.log("Projects GET 'method' Successful:", projects);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch back projects",
      },
      {
        status: 500,
      }
    );
  }
}
