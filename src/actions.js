"use server";
import { unstable_cache } from "next/cache";
import { Databases, ID } from "appwrite";
import { client } from "./appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getPosts = async () => {
  try {
    const databases = new Databases(client);
    const result = await databases.listDocuments(
      "crud", // databaseId
      "post", // collectionId
      [] // queries (optional)
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getPostsWithCache = async () => {
  try {
    const databases = new Databases(client);
    const result = await unstable_cache(
      () => databases.listDocuments("crud", "post", []),
      [],
      { revalidate: 60 } // revailate the data after 60 seconds ( 1 minutes )
    )();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (id) => {
  try {
    const databases = new Databases(client);
    const result = await databases.getDocument(
      "crud", // databaseId
      "post", // collectionId
      `${id}`, // documentId
      [] // queries (optional)
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addPost = async (prevState, formData) => {
  const title = formData.get("title");
  try {
    const databases = new Databases(client);
    const result = await databases.createDocument(
      "crud", // databaseId
      "post", // collectionId
      ID.unique(), // documentId
      { title }, // data
      [] // permissions (optional)
    );
  } catch (error) {
    console.log(error);
    return { status: false, message: "Could Not Add Post." };
  }
  revalidatePath("/posts");
};

export const deletePost = async (id) => {
  try {
    const databases = new Databases(client);
    const result = await databases.deleteDocument(
      "crud", // databaseId
      "post", // collectionId
      `${id}` // documentId
    );
  } catch (error) {
    console.log(error);
  }
  // revalidatePath("/posts");
  redirect("/posts");
};
