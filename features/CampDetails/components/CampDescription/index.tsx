import styled from "@emotion/styled";
interface Props {
  intro: string;
}

export default function CampDescription({ intro }: Props) {
  return (
    <section>
      <h3> 캠핑장 소개</h3>
      <IntroduceDetails>
        {intro}
        저희 더담다 캠핑장이 전국의 캠핑장 중 개별화장실이 있는 캠핑장의 기준이
        되겠습니다 !! ^^ 편리함과 편안함, 그리고 깨끗한 캠핑장을 찾으신다면 저희
        더담다 캠핑장으로 오세요 ^^ 모든 사이트 안에 단독 개별
        개수대+화장실+샤워실+50L온수기+콘센트단자함을 모두 갖추고 있는 더담다
        캠핑장입니다. 또한 캠핑장비가 없어도 공간만 대여해서 캠핑을 즐기실수
        있도록 세미글램핑 형식의 몽골텐트가 준비되어있습니다. ^^ 지친 일상 중
        더담다에서 편안한 힐링의 시간을 제공해 드리겠습니다^^
      </IntroduceDetails>
    </section>
  );
}

const IntroduceDetails = styled.p``;
