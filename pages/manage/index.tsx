
import { ManageLoginLayout } from "layouts/Manage/ManageLoginLayout";
import { ManagerHeader } from "layouts/Manage/ManagerHeader";
import { ManagerFooter } from "layouts/Manage/ManagerFooter";
import { ManagerLogin } from "../../components/Manager/ManagerLogin";

function manage () {
    return <>
        <ManageLoginLayout header={<ManagerHeader/>} main={<ManagerLogin/>} footer={<ManagerFooter/>}/>
    </>
}

export default manage;