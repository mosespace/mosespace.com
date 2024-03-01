import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(req, { params: { id } }) {
  // console.log(id);
  try {
    const { title, image, description, github_link, preview_link } =
      await req.json();

    console.log({ title, image, description, github_link, preview_link });

    const existingProject = await db.project.findUnique({
      where: {
        id,
      },
    });

    // // If the project doesn't exist, return a 404 Not Found response
    if (!existingProject) {
      return NextResponse.json(
        {
          error: "Project not found",
          message:
            "Failed to update project which doesn't exit in the database",
        },
        {
          status: 404,
        }
      );
    }

    // Update the project properties with the new values
    const updatedProject = await db.project.update({
      where: {
        id,
      },
      data: {
        title,
        image,
        description,
        github_link,
        preview_link,
      },
    });

    // console.log("Project updated successfully:", updatedProject);
    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Error updating the project:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to update the projects",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req, { params: { id } }) {
  // console.log(id);
  try {
    const existingProject = await db.project.findUnique({
      where: {
        id,
      },
    });

    // If the project doesn't exist, return a 404 Not Found response
    if (!existingProject) {
      return NextResponse.json(
        {
          error: "Project not found",
          message:
            "Failed to delete project which doesn't exit in the database",
        },
        {
          status: 404,
        }
      );
    }

    // Delete the project properties from the database
    const deletedProject = await db.project.delete({
      where: {
        id: existingProject.id,
      },
    });

    console.log("Project deleted successfully:", deletedProject);
    return NextResponse.json(deletedProject);
  } catch (error) {
    console.error("Error deleting the project:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to deleting the projects",
      },
      {
        status: 500,
      }
    );
  }
}
