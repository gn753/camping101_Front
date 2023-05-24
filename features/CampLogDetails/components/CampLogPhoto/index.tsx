import Image from "next/image";

interface Props {
  image?: string;
}

export default function CampLogPhoto({ image }: Props) {
  return (
    <figure className="photo">
      <Image
        src="/imgs/img-camplogDetails-01.jpg"
        width="1924"
        height="200"
        alt="샘플이미지"
      />
    </figure>
  );
}
