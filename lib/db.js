import { db } from "./firebase";
import {
  ref,
  get,
  query,
  orderByChild,
  equalTo
} from "firebase/database";

/**
 * Fetches all blogs from the 'blogs' node
 */
export async function getAllBlogs() {
  try {
    const blogsRef = ref(db, "blogs");
    const snapshot = await get(blogsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      // RTDB returns an object, we convert it to an array
      const blogsArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      // Sort by publishDate desc
      return blogsArray.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    }
    return [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

/**
 * Fetches a single blog by its slug
 */
export async function getBlogBySlug(slug) {
  try {
    const blogsRef = ref(db, "blogs");
    // Try to get by key directly first (assuming key is the slug)
    const directRef = ref(db, `blogs/${slug}`);
    const directSnapshot = await get(directRef);

    if (directSnapshot.exists()) {
      return { id: slug, ...directSnapshot.val() };
    }

    // Fallback: search by slug property
    const q = query(blogsRef, orderByChild("slug"), equalTo(slug));
    const snapshot = await get(q);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const key = Object.keys(data)[0];
      return { id: key, ...data[key] };
    }

    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

/**
 * Fetches all research articles from the 'research' node
 */
export async function getAllResearch() {
  try {
    const researchRef = ref(db, "research-hub");
    const snapshot = await get(researchRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const researchArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      return researchArray.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    }
    return [];
  } catch (error) {
    console.error("Error fetching research:", error);
    return [];
  }
}

/**
 * Fetches a single research article by its slug
 */
export async function getResearchBySlug(slug) {
  try {
    const researchRef = ref(db, "research-hub");
    const directRef = ref(db, `research-hub/${slug}`);
    const directSnapshot = await get(directRef);

    if (directSnapshot.exists()) {
      return { id: slug, ...directSnapshot.val() };
    }

    const q = query(researchRef, orderByChild("slug"), equalTo(slug));
    const snapshot = await get(q);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const key = Object.keys(data)[0];
      return { id: key, ...data[key] };
    }

    return null;
  } catch (error) {
    console.error("Error fetching research by slug:", error);
    return null;
  }
}
