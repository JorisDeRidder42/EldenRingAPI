const Item = ({name}) => {
  const {data: item} = useGet
    return(
    <Card className="my-2">
      <Card.Body>
        {name}
      </Card.Body>
    </Card>
    )
}
export default Item;