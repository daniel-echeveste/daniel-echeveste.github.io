
import { useControls, folder} from "leva";

export default function LevaControls() {
    const controls = {} 
    controls["camera"] = useControls('camera',{
        uColor:"#ff0000",
        uCamera: [0,0,0]
    })
    controls["lights"] = useControls('camera',{
        uColor:"#ff0000",
        uCamera: [0,0,0]
    })
  console.log(controls);
  
}