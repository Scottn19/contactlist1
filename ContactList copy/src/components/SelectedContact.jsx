import { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId, // Corrected prop name
  setSelectedContactId, // Corrected prop name
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSingleUser(userId) {
      try {
        const res = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${userId}`
        );
        const json = await res.json();
        console.log(json);
        setContact(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleUser(selectedContactId); // Corrected prop name
  }, [selectedContactId]); // Include selectedContactId in the dependency array

  return (
    <div>
      <p>Selected Contact is {contact?.name}</p>
      <p>website: {contact?.website}</p>
      <p>username: {contact?.username}</p>
      <button onClick={() => setSelectedContactId(null)}>Close</button>
    </div>
  );
}