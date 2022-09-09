export default function gettingDataOnChange(event, setterFunc) {
    const { value, name } = event.target
    setterFunc((oldVals) => {
        return {
            ...oldVals,
            [name]: value
        }
    })
}