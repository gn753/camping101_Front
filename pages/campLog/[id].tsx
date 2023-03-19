import Layout from "../../components/layouts/Layout"
import Header from "../../components/layouts/Header"
import { CampLogId } from "components/CampLog/CampLogId"
import Footer from "../../components/layouts/Footer"

export default function campLog() {
    return <>
        <Layout header={<Header/>} main={<CampLogId/>} footer={<Footer/>}></Layout>
    </>
}