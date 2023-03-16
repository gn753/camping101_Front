import Layout from "layouts/Layout"
import Header from "layouts/Header"
import { CampLogMain } from "components/CampLog/CampLogMain"
import Footer from "layouts/Footer"

export default function campLog() {
    return <>
        <Layout header={<Header/>} main={<CampLogMain/>} footer={<Footer/>}></Layout>
    </>
}