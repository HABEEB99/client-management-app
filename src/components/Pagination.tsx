import { IClient } from "../../typings";

interface IPaginationProps {
  data: IClient[];
}

const Pagination: React.FC<IPaginationProps> = ({ data }) => {
  return <div>Pagination</div>;
};

export default Pagination;
