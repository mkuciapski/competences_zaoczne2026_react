import competences from "../assets/competences";

const listCompetences = competences
  .filter((competence) => competence.Level > 0)
  .map((competence) => (
    <div key={competence.Id} className="card bg-base-100 w-48 shadow-sm">
      <h2 className="card-title">{competence.Name}</h2>
      <img src={`assets/${competence.Picture}`} />
      <div className="card-body">
        <p>Poziom: {competence.Level}</p>
        {competence.Description && <p>Opis: {competence.Description}</p>}
      </div>
    </div>
  ));

export default function Competences() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">{listCompetences}</div>
  );
}
