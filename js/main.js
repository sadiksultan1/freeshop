import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const form = document.getElementById("productForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value;

  try {
    const docRef = await addDoc(collection(db, "products"), {
      name,
      price,
      description
    });
    status.textContent = `Product added! ID: ${docRef.id}`;
    form.reset();
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
  }
});
