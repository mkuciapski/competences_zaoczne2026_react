import competences from "../assets/competences";
export default function Competences() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      competences
      <div className="card bg-base-100 w-48 shadow-sm">
        <h2 className="card-title">{competences[0].Name}</h2>
        <img src={`assets/${competences[0].Picture}`} />
        <div className="card-body">
          <p>Poziom: {competences[0].Level}</p>
          <p>Opis: {competences[0].Description}</p>
        </div>
      </div>
    </div>
  );
}
