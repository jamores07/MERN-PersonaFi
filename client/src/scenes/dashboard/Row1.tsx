import DashboardBox from "@/components/DashboardBox"
import { useGetKPIsQuery } from "@/state/api";

const Row1 = () =>{
    const { data } = useGetKPIsQuery();

    return(
        <>
        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
        </>
    );
};

export default Row1