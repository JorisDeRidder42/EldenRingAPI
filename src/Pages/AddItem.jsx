import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getAllAppData } from "../Datas/AppData";
import { useAddItem } from "../Hooks/dataHooks";
const AddItem = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [chosenEndpoint, setChosenEndpoint] = useState({});
    const allData = getAllAppData();

    const { mutate: addItem } = useAddItem();

    const handleChange = (e) => {
        console.log("Item Selected!!");
        console.log('item', chosenEndpoint);
        setEndpoint({ 'endpoint': e.target.value });
    }

    const handleAddItemClick = () => {
        console.log('clicked')
        console.log({name, description, chosenEndpoint})
        const item = {name, description, chosenEndpoint}
        console.log(item )
        addItem(item)
    }

    return(
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(evt) => setName(evt.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" value={description} onChange={(evt) => setDescription(evt.target.value)} />
            </Form.Group>
                <Form.Label>Endpoint</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleChange}>
                 {allData.map(o => <option key={o.id} value={o.endpoint}>{o.title}</option>)}
            </Form.Select>
            <Button variant="primary" type="submit" className="mt-4" onClick={handleAddItemClick}>
                Submit
            </Button>
        </Form>
    )
}
export default AddItem;