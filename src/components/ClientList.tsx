import { AiFillFilter } from "react-icons/ai";
import { IClient } from "../../typings";
import Client from "./Client";

import getClients from "@/requests/getClients";

const ClientList = async () => {
  const clients: IClient[] = await getClients();

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center py-4">
      <div className="w-full h-[7vh] flex items-center space-x-2">
        <AiFillFilter className="text-5xl text-icon font-bold" />
        <select
          id="status"
          className="w-36 h-10 rounded-lg text-white bg-gray-600 px-2"
        >
          <option value="" disabled selected hidden>
            Sort by status
          </option>
          <option value="">All</option>
          <option value="active" className="my-4">
            Active
          </option>
          <option value="inActive">InActive</option>
        </select>

        <select
          id="status"
          className="w-36 h-10 rounded-lg text-white bg-gray-600 px-2"
        >
          <option value="" disabled selected hidden>
            Sort by date
          </option>
          <option value="active" className="mb-4">
            Acsending
          </option>
          <option value="inActive">Descending</option>
        </select>
      </div>
      <div className="w-full flex-1 my-4 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {clients?.map((client) => (
          <Client key={client.id} data={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientList;
