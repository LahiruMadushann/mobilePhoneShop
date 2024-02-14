import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AdminPage from "../pages/AdminPage";
import DeleteUser from "./DeleteUser";

const AdminPanelTab = () => {
  return (
      <Tabs>
        <TabList>
          <Tab>Users Detail</Tab>
          <Tab>Update</Tab>
          <Tab>Delete</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AdminPage />
          </TabPanel>
          <TabPanel>
              <AdminPage />
          </TabPanel>
          <TabPanel>
            <DeleteUser />
          </TabPanel>
        </TabPanels>
      </Tabs>
  )
}
export default AdminPanelTab