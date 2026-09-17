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

/**
 * Fetches all case studies from the 'case-studies' node
 */
export async function getAllCaseStudies() {
  try {
    const caseRef = ref(db, "case-studies");
    const snapshot = await get(caseRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const caseArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      // Assuming they have a publishDate or similar
      return caseArray.sort((a, b) => new Date(b.publishDate || 0) - new Date(a.publishDate || 0));
    }
    return [];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

/**
 * Fetches all press articles from the 'press' node
 */
export async function getAllPress() {
  try {
    const pressRef = ref(db, "press");
    const snapshot = await get(pressRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const pressArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      return pressArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return [];
  } catch (error) {
    console.error("Error fetching press articles:", error);
    return [];
  }
}

/**
 * Fetches a single case study by its slug
 */
export async function getCaseStudyBySlug(slug) {
  try {
    const caseRef = ref(db, "case-studies");
    const directRef = ref(db, `case-studies/${slug}`);
    const directSnapshot = await get(directRef);

    if (directSnapshot.exists()) {
      return { id: slug, ...directSnapshot.val() };
    }

    const q = query(caseRef, orderByChild("slug"), equalTo(slug));
    const snapshot = await get(q);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const key = Object.keys(data)[0];
      return { id: key, ...data[key] };
    }

    return null;
  } catch (error) {
    console.error("Error fetching case study by slug:", error);
    return null;
  }
}
