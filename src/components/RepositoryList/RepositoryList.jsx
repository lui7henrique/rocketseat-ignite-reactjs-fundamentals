import { RepositoryItem } from "./RepositoryItem/RepositoryItem";
import { useEffect, useState } from "react";
import "../../styles/repositories.scss";

// const repository = {
//   name: 'henrique',
//   description: 'henrique',
//   link: 'https://google.com.br'
// }

export function RepositoryList() {
  const [repositories, setRepositores] = useState([]); // iniciar o estado do mesmo tipo que será armazenada

  useEffect(() => {
    fetch("https://api.github.com/users/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositores(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>📝 Repository List</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
