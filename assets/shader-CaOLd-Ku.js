import{i as C,V as c,P as f,d as m,T as P,b as T,S as b,U as l,k as I,e as A,j as i,g as M}from"./index-X9TZfZwC.js";var j=`uniform  vec2 uResolution;\r
uniform sampler2D uPictureTexture;\r
uniform sampler2D uDisplacementTexture;

varying vec3 vColor;

attribute float aIntensity;\r
attribute float aAngle;

void main()\r
{\r
    
    vec3 newPosition = position;\r
    float displacementIntensity = texture(uDisplacementTexture, uv).r;\r
    displacementIntensity  = smoothstep(0.1,0.3 ,displacementIntensity);\r
    \r
    vec3 displacement = vec3(cos(aAngle) * 0.2,sin(aAngle) * 0.2,1.0);\r
    displacement = normalize(displacement);\r
    displacement *= 3.0;\r
    displacement *= displacementIntensity;\r
    displacement *= aIntensity;\r
    newPosition += displacement;\r
    \r
    
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;

    
    float pictureIntensity = texture(uPictureTexture, uv).r;

    \r

    
    gl_PointSize = 0.1 * pictureIntensity * uResolution.y;\r
    gl_PointSize *= (1.0 / -viewPosition.z);\r

    
    vColor = vec3(pow(pictureIntensity, 2.0));\r
}`,S=`varying vec3 vColor;\r
void main()\r
{

    vec2 uv = gl_PointCoord;\r
    \r
    float distanceToCenter = distance(uv, vec2(0.5));\r
    if(distanceToCenter > 0.5)\r
    {\r
        discard;\r
    }\r
    gl_FragColor = vec4(vColor, 1.0);

    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>   \r
}`;function R(_){document.body.style.backgroundColor="#000011";const n={width:window.innerWidth,height:window.innerHeight},e={};e.canvas=document.createElement("canvas"),e.canvas.width=128,e.canvas.height=128,e.canvas.style.width="256px",e.canvas.style.height="256px",e.canvas.style.position="fixed",e.canvas.style.top="50px",e.canvas.style.left="0",e.canvas.style.zIndex="1000",e.canvas.style.pointerEvents="none",e.context=e.canvas.getContext("2d"),e.context.fillStyle="black",e.context.fillRect(0,0,e.canvas.width,e.canvas.height),e.glowImage=new Image,e.glowImage.src="/textures/imgs/glow.png",e.raycaster=new C,e.screenCursor=new c(999,999),e.CanvasCursor=new c(999,999),e.CanvasCursorPrevious=new c(999,999),window.addEventListener("mousemove",t=>{e.screenCursor.set(t.clientX/n.width*2-1,-(t.clientY/n.height)*2+1)});const r=new f(10,10,128,128),u=new Float32Array(r.attributes.position.count),d=new Float32Array(r.attributes.position.count);for(let t=0;t<r.attributes.position.count;t++)u[t]=Math.random(),d[t]=Math.random()*Math.PI*2;r.setAttribute("aIntensity",new m(u,1)),r.setAttribute("aAngle",new m(d,1)),r.setIndex(null);const s=new P,v=s.load("/textures/imgs/picture-1.png"),p=s.load("/textures/imgs/picture-2.png"),g=s.load("/textures/imgs/picture-3.png"),x=s.load("/textures/imgs/picture-4.png"),w=T({picture:{value:v,options:[v,p,g,x]}}),a=new b({vertexShader:j,fragmentShader:S,uniforms:{uTime:{value:0},uResolution:new l(new c(n.width,n.height)),uPictureTexture:new l(w.picture),uDisplacementTexture:new l(e.texture)}});e.texture=new I(e.canvas);const h=t=>{console.log(t),e.CanvasCursor.x=t.uv.x*e.canvas.width,e.CanvasCursor.y=(1-t.uv.y)*e.canvas.height};return A(()=>{a.uniforms.uTime.value+=.01,n.width=window.innerWidth,n.height=window.innerHeight,a.uniforms.uResolution.value.set(n.width,n.height);const t=e.CanvasCursorPrevious.distanceTo(e.CanvasCursor),y=Math.min(t*.01,1);e.CanvasCursorPrevious.copy(e.CanvasCursor),e.context.globalCompositeOperation="source-over",e.context.globalAlpha=.02,e.context.fillRect(0,0,e.canvas.width,e.canvas.height);const o=e.canvas.width*.25;e.context.globalCompositeOperation="lighten",e.context.globalAlpha=y,e.context.drawImage(e.glowImage,e.CanvasCursor.x-o*.5,e.CanvasCursor.y-o*.5,o,o),e.texture.needsUpdate=!0,a.uniforms.uDisplacementTexture.value=e.texture}),i.jsxs(i.Fragment,{children:[i.jsx("points",{material:a,geometry:r}),"//interactions",i.jsxs("mesh",{onPointerMove:h,visible:!1,children:[i.jsx("planeGeometry",{args:[10,10,128,128]}),i.jsx("meshBasicMaterial",{color:"white",side:M})]})]})}export{R as default};
//# sourceMappingURL=shader-CaOLd-Ku.js.map
