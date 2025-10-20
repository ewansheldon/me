interface CompetitionsRowProps {
  competition: Competition
}

export default function CompetitionsRow({ competition }: CompetitionsRowProps) {
  return (
    <tr key={competition.id}>
      <td>{competition.id}</td>
      <td>{competition.name}</td>
      <td>{competition.type}</td>
      <td>{competition.region}</td>
    </tr>
  );
}