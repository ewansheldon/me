import Heading from "../../utils/Heading";
import Description from "../../utils/Description";
import CompetitionTable from "./CompetitionsTable";
import { useEffect, useState } from "react";

interface Area {
  name: string;
}

interface CompetitionAPIResult {
  id: number;
  name: string;
  type: string;
  area: Area;
}

export default function CompetitionsIndex() {

  const [competitions, setCompetitions] = useState<Competition[]>([]);

  useEffect(() => {
    fetch('/api/competitions')
      .then((res) => res.json())
      .then((res) => {
        setCompetitions(res.competitions.map((competition: CompetitionAPIResult) => {
          return {
            id: competition.id,
            name: competition.name,
            type: competition.type,
            region: competition.area.name
          }
        }));
      });
  }, [])

  return (
    <>
      <Heading value="Competitions" />
      <img src="/dvd-video.png" className="img-dvd" />
      <Description value="A list of football competitions" />
      <CompetitionTable competitions={competitions} />
    </>
  )
}