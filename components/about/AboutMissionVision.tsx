import ScrollReveal from "@/components/motion/ScrollReveal";
import { missionVisionContent } from "@/lib/data/about";

export default function AboutMissionVision() {
  const { mission, vision } = missionVisionContent;
  const MissionIcon = mission.icon;
  const VisionIcon = vision.icon;
  return (
    <section className="py-24 px-6 bg-white border-y border-neutral-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-[#FCFCFF] border border-neutral-100 rounded-2xl p-10 h-full">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <MissionIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-4">{mission.title}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {mission.text}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-[#FCFCFF] border border-neutral-100 rounded-2xl p-10 h-full">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <VisionIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-light text-neutral-900 mb-4">{vision.title}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {vision.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
