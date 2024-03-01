import { FC } from "react";

type Props = {
  metadata: {
    author: {
      firstName: string;
      lastName: string;
    };
    postedAt: Date;
  };
};

const MetadataView: FC<Props> = ({ metadata }) => {
  const authorFullName = `${metadata.author.firstName} ${metadata.author.lastName}`;
  return (
    <h3>
      {authorFullName}, {metadata.postedAt.toDateString()}
    </h3>
  );
};

export default MetadataView;
