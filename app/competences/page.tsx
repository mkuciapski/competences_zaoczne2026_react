import competences from "../assets/competences";
import CompetenceCard from "./CompetenceCard";

const listCompetences = competences
  .filter((competence) => competence.Level > 0)
  .map((competence) => (
    <CompetenceCard key={competence.Id} {...competence}></CompetenceCard>
  ));

export default function Competences() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">{listCompetences}</div>
  );
}
