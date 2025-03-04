import { Wrapper } from "@/components/ui";
import serviceData  from "@/app/data/services.json";

export default function Services() {
  return (
    <Wrapper isContent>
      <section id="services" className="grid grid-cols-4 w-full text-text py-[102px] gap-4">
        <article className="col-span-4 mb-2">
          <h1 className="text-4xl font-semibold mb-6 text-center">Services</h1>
          <p className="text-lg font-medium">
            I offer comprehensive software development services to create scalable, modern, and efficient web applications with a full stack approach.
          </p>
        </article>

        {serviceData.map((service, index) => (
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
