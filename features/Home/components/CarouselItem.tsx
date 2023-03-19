import styled from "@emotion/styled";

interface Props {
  data:any;
  margin:number
}

export default function CarouselItem({ data,margin }: Props) {
  return (
    <Item  margin={margin}>
      <img src={data.image} />
      <CardBody>
        <CardTitle>Card title</CardTitle>
      </CardBody>
    </Item>
  );
}

interface ItemProps {
  margin: number;
}

const Item = styled.div<ItemProps>`
  flex-shrink: 0;
  width: calc((100% - 60px) / 4);
  overflow: hidden;
  margin-right: 20px;
  img {
    display: block;
    border-radius: 10px;
    width: 100%;
    height: 145px;
  }
`;

const CardBody = styled.div``;
const CardTitle = styled.h5`
  font-size: 18px;
  margin-top: 10px;
`;

/* width: ${(props) => props.width + "%"}; */
/* padding-left: ${(props) => props.margin + "px"}; */
/* padding-right: ${(props) => props.margin + "px"}; */
