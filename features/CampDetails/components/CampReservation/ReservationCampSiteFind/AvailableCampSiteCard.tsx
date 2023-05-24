import styled from "@emotion/styled";
import moment from "moment";
import Image from "next/image";
import { axiosSetting } from "api/api";
import { SiteInCampList } from "features/CampDetails/types";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";

interface Post {
  siteId: number;
  startDate: string;
  endDate: string;
  memberId: number;
  payment: number;
  humanCapacity: number;
}

interface Props {
  campSite: SiteInCampList;
  availableSites: any;
}

export default function AvailableCampSiteCard({
  campSite,
  availableSites,
}: Props) {
  const { name, checkIn, checkOut, price } = campSite;
  const { memberInfo } = useMemberInfo();
  const checkIndate = moment(checkIn).format("h");
  const checkOutdate = moment(checkOut).format("h");

  const onSubmit = async () => {
    if (memberInfo) {
      const postData: Post = {
        siteId: 4,
        startDate: "2023-07-07T15:54:16",
        endDate: "2023-07-08T15:53:52",
        memberId: 9,
        payment: price,
        humanCapacity: 1,
      };
      console.log(postData, "post");
      const response = await axiosSetting.post("/api/reservation", postData);
      console.log(response, "예약응답");
    }
  };

  return (
    <CardView>
      <CardContainer>
        <CardHeader>
          <Image
            src="http://placehold.it/500x200"
            width={500}
            height={200}
            alt="샘플이미지"
          />
        </CardHeader>
        <CardDetails>
          <CardTitle>{name}</CardTitle>
          <CardCheckTime>
            <p>
              체크인 : {checkIndate}시 체크아웃 : {checkOutdate}시
            </p>
            <CampPrice>
              {price} <span>원~</span>
            </CampPrice>
          </CardCheckTime>
        </CardDetails>

        {availableSites && (
          <Button onClick={onSubmit} isActive={availableSites}>
            예약하기
          </Button>
        )}
        {!availableSites && (
          <Button onClick={onSubmit} disabled>
            매진
          </Button>
        )}
      </CardContainer>
    </CardView>
  );
}

const CardView = styled.div`
  flex-basis: 47%;
  flex-grow: 0;
  border: 1px solid black;
`;

const CardContainer = styled.div`
  padding: 20px;
`;

const CardHeader = styled.header`
  width: 100%;
  border: 1px solid black;
`;
const CardDetails = styled.div`
  width: 100%;
  margin: auto 0;
  div:nth-of-type(1) {
    margin-bottom: 4px;
  }
`;

const CardTitle = styled.h4`
  font-size: 18px;
  padding: 5px 0;
`;

const CardCheckTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CampPrice = styled.span`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
  line-height: 1.8rem;
  & > span {
    font-weight: bold;
    font-size: 11px;
  }
`;

const Button = styled.button<any>`
  all: unset;
  width: 100px;
  border: 1px solid black;
  padding: 10px 3px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${(props) => (props.isActive ? "#35c5f0" : "#F8F8FA")};
  border-color: ${(props) => (props.isActive ? "#35c5f0" : "#F8F8FA")};
  color: ${(props) => (props.isActive ? "#fff" : "#374999")};
  font-weight: bold;
  float: right;
  margin-bottom: 20px;
`;
