import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'henrique',
  description: 'henrique',
  link: 'https://google.com.br'
}

export function RepositoryList(){
  return (
    <section className="repositoryList">
      <h1>Repository List</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}