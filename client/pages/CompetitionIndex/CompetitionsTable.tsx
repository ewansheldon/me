import CompetitionsRow from "./CompetitionRow";
import CompetitionsHeader from "./CompetitionsHeader";

interface CompetitionsTableProps {
  competitions: Competition[];
}

export default function CompetitionsTable({ competitions }: CompetitionsTableProps) {
  return (
    <table>
      <CompetitionsHeader />
      <tbody>
        { 
          competitions.map((competition: Competition) => {
            return <CompetitionsRow key={competition.id} competition={competition} />
          })
        }
      </tbody>
    </table>
  );
}