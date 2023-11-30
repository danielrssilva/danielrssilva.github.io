import { compareDates } from "@/helpers";

interface WorkProps {
  role: string;
  company: string;
  dateStart: Date;
  dateEnd?: Date;
}

export default function Work(props: WorkProps) {
  const { role, company, dateStart, dateEnd } = props;
  return (
    <div className="flex flex-col gap-2 text-white items-end relative justify-center">
      <h2 className="text-[2.75rem]">{role}</h2>
      <h1 className="text-[4rem] font-bold uppercase">{company}</h1>
      <h2 className="text-[2.5rem] font-thin">
        {dateStart.getFullYear()} - {dateEnd ? dateEnd.getFullYear() : "now"}
      </h2>
      <span className="text-[11rem] font-thin text-purple absolute -right-28">
        //
      </span>
      <span className="text-[2.75rem] text-purple -rotate-[71deg] absolute -right-44 w-38 text-center">
        {compareDates(dateStart, dateEnd)}
      </span>
    </div>
  );
}
