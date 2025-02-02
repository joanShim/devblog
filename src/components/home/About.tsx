import { Github, Globe, Linkedin } from "lucide-react";
import DynamicText from "./DynamicText";
import RandomEmojis from "./RandomEmojis";
import Link from "next/link";

export default function About() {
  return (
    <section className="pt-5">
      <div className="flex flex-col gap-7">
        <RandomEmojis />
        <div className="mb-3 text-4xl font-bold leading-snug">
          <DynamicText
            texts={["유저를 생각하는", "다정한 프로덕트를 만드는"]}
          />
          <h1>프론트엔드 엔지니어</h1>
        </div>
      </div>
      <div className="pt-5 text-base leading-6">
        {/* <p>
          대학에서 <strong>UX디자인</strong>과 <strong>서비스 기획</strong>에
          대해 공부했고,
        </p>
        <p>
          직접 동작하는 프로덕트를 만드는 매력에 빠져{" "}
          <strong>프론트엔드 개발</strong>을 시작했습니다.
        </p> */}
        <p>
          공감을 기반으로 사용자에게 <strong>다정한 경험</strong>을 제공하는
          프로덕트를 지향합니다.
        </p>
        <p>
          사용하기 좋은 인터페이스와 적확한 정보 전달을 위해{" "}
          <strong>디자인적 관점</strong>으로 생각합니다.
        </p>
        {/* <p>시각적 디테일을 만들어 내는 데 즐거움을 느낍니다.</p> */}
        {/* <p>
            공감할 수 있는 프로덕트를 만나면 빠르게 몰입하고 구석구석 살핍니다.
          </p> */}
        <p>
          직군을 넘어 <strong>말이 잘 통하는</strong> 프로덕트 엔지니어가 되는
          것이 목표입니다.
        </p>
      </div>
      {/* <div className="flex flex-col gap-2 py-5">
        <div className="flex gap-2">
          <Globe strokeWidth={0.75} />
          <span>서울</span>
        </div>
        <Link href="https://github.com/joanShim" target="_blank">
          <Github strokeWidth={0.75} />
        </Link>
        <Link href="https://www.linkedin.com/in/jeongahshim" target="_blank">
          <Linkedin strokeWidth={0.75} />
        </Link>
      </div> */}
    </section>
  );
}
