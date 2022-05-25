import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const JsonServer = () => {
  const [pets, setPets] = useState([]);
  const [isNewPetOpen, setNewPetOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Example 1: Chain up Promises
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/pets")
      .then((res) => {
        return res.json();
      })
      .then((pets) => setPets(pets))
      .finally(() => setLoading(false));
  }, []);

  // Example 2: Use Async Function
  // async + await
  // 注意：一定要在 useEffect 里创建一个 async Function
  // 我个人觉得 Promise 好用很多

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch("http://localhost:3001/pets");
  //     const pets = await res.json();
  //     setPets(pets);
  //   }
  //   getData();
  // }, []);

  return (
    <main>
      <h1>API JsonServer: Adopt-a-Pet</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <ul>
            {pets.map((pet) => (
              <li key={pet.id}>
                <div className="pet-kind">
                  Kind: {pet.kind}, Name: {pet.name}
                </div>
                <button className="pet-name">Edit</button>

                <button className="adopt-btn">Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setNewPetOpen(true)}>Add a Pet</button>
        </div>
      )}
      <Modal isOpen={isNewPetOpen} onRequestClose={() => setNewPetOpen(false)}>
        hello
      </Modal>
    </main>
  );
};

export { JsonServer };
