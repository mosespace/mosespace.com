"use client";
import React, { useState } from "react";
import { Delete, Edit } from "lucide-react";
import DeleteConfirmation from "./delete-confirmation";
import Image from "next/image";
import Link from "next/link";
import { apiRequest } from "@/utils/apiRequest";
import { useRouter } from "next/navigation";

export default function Project({ projects }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const onDelete = (id) => {
    setSelectedProjectId(id);
    setShowDeleteConfirmation(true);
  };

  const router = useRouter();
  const handleDeleteConfirmed = async () => {
    const id = selectedProjectId;
    // console.log(id);
    try {
      // Make a DELETE request to the endpoint with the provided id
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Deletion successful, handle any further actions
        toast.success("Project deleted successfully");
        // After deletion, close the modal
        setShowDeleteConfirmation(false);
        router.refresh();
      } else {
        // Deletion failed, handle errors
        toast.error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleCancelDelete = () => {
    // If user cancels deletion, close the modal
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      {projects?.map((project, i) => {
        return (
          <div
            key={i}
            className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1080}
              height={1080}
              className='w-full h-16 rounded-md object-cover object-center text-gray-500 dark:text-gray-400 mb-3'
            />

            <span>
              <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 line-clamp-1 dark:text-white'>
                {project.title}
              </h5>
            </span>
            <p className='mb-3 font-normal text-gray-500 dark:text-gray-400 line-clamp-2'>
              {project.description}
            </p>
            <div className='flex justify-between'>
              <Link
                href={`p/${project.id}`}
                className='inline-flex gap-2 font-medium items-center text-green-600 hover:underline'
              >
                Edit
                <Edit />
              </Link>
              <button
                // href={`p/${project.id}`}
                onClick={() => onDelete(project.id)}
                className='inline-flex gap-2 font-medium items-center text-red-600 hover:underline'
              >
                Delete
                <Delete />
              </button>
            </div>
          </div>
        );
      })}
      {showDeleteConfirmation && (
        <div className='absolute z-50 inset-0 h-screen overflow-hidden w-full place-content-center flex items-center mx-auto bg-white/30 backdrop-blur-md'>
          <div className=''>
            <DeleteConfirmation
              onConfirm={handleDeleteConfirmed}
              onCancel={handleCancelDelete}
            />
          </div>
        </div>
      )}
    </>
  );
}
