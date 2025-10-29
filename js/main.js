import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const productForm = document.getElementById("productForm");
const status = document.createElement("p");
productForm.appendChild(status);

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value.trim();

  try {
    const docRef = await addDoc(collection(db, "products"), {
      name,
      price,
      description
    });
    status.textContent = `Product added! ID: ${docRef.id}`;
    status.style.color = "green";
    productForm.reset();
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
    status.style.color = "red";
  }
});
