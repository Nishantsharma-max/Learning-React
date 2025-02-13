
function print(event) {
     console.log(event)
     console.log("you clicked me")
}



export default function Button() {
     return(<div><button onClick={print} >Click me!</button></div>)
}