import "@/utils/hooks/monaco";
import Head from "next/head";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ChecksRequest } from "./ChecksRequest";
import { ChecksResponseEditorForm } from "./ChecksResponse/ChecksResponseEditorForm";
import { FormBackdrop } from "@/components/shared/RHFFormBuilder/FormBackdrop";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import CheckDialog from "./CheckDialog/CheckDialog";

export const ChecksPage = () => {
  const isLoading = useSelector((state: RootState) => state.checks.isLoading);

  return (
    <>
      <Head>
        <title>Permguard Playground | Checks</title>
      </Head>

      <FormBackdrop isLoading={isLoading} />
      <CheckDialog />

      <TabGroup className={"flex flex-col"}>
        <TabList className="inline-flex ml-auto sm:ml-0 sm:mr-auto z-10 gap-4 justify-between items center">
          <div className="flex gap-1">
            <Tab
              key="request"
              className="rounded-full px-3 py-1 text-sm/6 font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white  data-selected:text-fuchsia-500 "
            >
              Request
            </Tab>
            <Tab
              key="response"
              className="rounded-full px-3 py-1 text-sm/6 font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white  data-selected:text-fuchsia-500 "
            >
              Response
            </Tab>
          </div>
        </TabList>
        <TabPanels className="mt-3">
          <TabPanel key={"form"}>
            <ChecksRequest />
          </TabPanel>
          <TabPanel key={"json"}>
            <ChecksResponseEditorForm />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};
