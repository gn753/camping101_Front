import { ManageMainLayout } from "../../../layouts/Manage/ManageMainLayout";
import { ManagerHeader } from "layouts/Manage/ManagerHeader";
import { ManagerMain } from "../../../components/Manager/ManagerMain";
import { ManagerFooter } from "layouts/Manage/ManagerFooter";


function manageMain() {
    return <>
        <ManageMainLayout header={<ManagerHeader/>} main={<ManagerMain/>} footer={<ManagerFooter/>}/>
    </>
}

export default manageMain;