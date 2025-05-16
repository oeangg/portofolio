import Image from "next/image";

interface IExperience {
  time: string;
  position: string;
  company: string;
  // jobdesc: string[];
}

export const CardExperience = ({ time, position, company }: IExperience) => {
  return (
    <div className="flex flex-row items-center gap-4 text-xs tracking-tight">
      <Image src="/work.png" alt="work" width={50} height={50} />
      <div className="flex w-full flex-row items-center justify-between gap-4 border-b">
        <div className="space-y-0.25 flex flex-col">
          <h3 className="text-sm font-semibold">{company}</h3>
          <h2 className="font-normal">{position}</h2>
        </div>
        <h2 className="text-right font-normal">{time}</h2>
      </div>
    </div>
  );
};
