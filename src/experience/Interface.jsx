

import Menu from './HtmlElements';
import {Button} from './HtmlElements';

import { Html } from '@react-three/drei'
export default function Interface() {
    const pepe = ()=>{
        console.log('pepe');
    }
    return <>
        <Html 
        center
        >
           <Button 
            text= "Intro"
            styles="rounded-xl"
            funcion={pepe}
           />
        </Html>
    </>
}