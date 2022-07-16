import { useState } from "react";

export const useForm = (initial) => {
  const [formData, setFormData] = useState(initial);
  const [loading, setIsloading] = useState(false);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    postData();
  };
  async function postData() {
    await fetch(`https://infoset-backend.herokuapp.com/movie/create`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => alert("sucessful"))
      .catch((error) => alert("Facing issue"))
      .finally(() => {
        setIsloading(false);
      });
  }

  return { loading, formData, setFormData, handleInputChange, handleSubmit };
};
