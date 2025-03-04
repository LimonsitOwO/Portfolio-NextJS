import { Wrapper } from "@/components/ui";
import knowledgeData  from "@/app/data/knowledge.json";

export default function Knowledge() {
  return (
    <Wrapper isContent>
      <section className="grid grid-cols-4 w-full text-text py-[102px] gap-4">
        <article className="col-span-4 mb-2">
          <h1 className="text-4xl font-semibold mb-6 text-center">Knowledge</h1>
          <p className="text-lg font-medium">
            My technical knowledge spans a wide range of frontend and backend technologies for building modern, scalable, and high-performance applications.
          </p>
        </article>

        {knowledgeData.map((service, index) => (
          <article key={index} className="bg-secondary rounded-xl xl:col-span-1 lg:col-span-2 col-span-4 xl:min-h-[237px] lg:min-h-[180px] min-h-[140px] p-3">
            <h1 className="text-[16px] font-semibold mb-2 text-center">
              {service.title}
            </h1>
            <ul className="text-[12px] font-normal list-disc list-inside">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </Wrapper>
  );
}
