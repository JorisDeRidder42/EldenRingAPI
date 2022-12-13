import { Suspense } from "react";
import { Container } from "react-bootstrap";
import { useGetItems } from "../Hooks/dataHooks";
import ContentLoader from '../Loader/ContentLoader';

const Weapons = ({endpoint}) => {
    return(
        <Suspense fallback={<ContentLoader/>}>
            <WeaponsContent endpoint={endpoint}/>
        </Suspense>
    )
}

const WeaponsContent = ({endpoint}) => {
    const {data} = useGetItems(endpoint);
    console.log(data);
    return(
            <Container className="py-5">
                <h1>Weapons page</h1>
                {data}
            </Container>
    )
}
export default Weapons;