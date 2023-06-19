import getClient from "@/requests/getClient";
import { IClient } from "../../../../typings";
import { ClientDetails } from "@/components";

interface IClientDetailsProp {
  params: {
    clientId: string;
  };
}

export default async function Client({
  params: { clientId },
}: IClientDetailsProp) {
  const clientDetails: IClient = await getClient(clientId);

  return (
    <main className="w-full h-full overflow-x-hidden">
      <div className="wrapper h-full w-full py-6 flex items-center justify-center">
        <ClientDetails data={clientDetails} />
      </div>
    </main>
  );
}
