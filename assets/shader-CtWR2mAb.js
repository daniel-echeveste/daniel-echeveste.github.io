import{c as o,T as a,S as s,U as t,V as u,a as c,j as n}from"./index-DH19fxZZ.js";var d=`uniform  vec2 uResolution;\r
uniform sampler2D uPictureTexture;

varying vec3 vColor;

void main()\r
{\r

    \r
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;

    
    float pictureIntensity = texture(uPictureTexture, uv).r;

    
    gl_PointSize = 0.1 * pictureIntensity * uResolution.y;\r
    gl_PointSize *= (1.0 / -viewPosition.z);\r

    
    vColor = vec3(pow(pictureIntensity, 2.0));\r
}`,l=`varying vec3 vColor;\r
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
}`;function h(v){document.body.style.backgroundColor="#000011";const e={width:window.innerWidth,height:window.innerHeight};o({});const i=new a().load("/textures/imgs/picture-1.png"),r=new s({vertexShader:d,fragmentShader:l,uniforms:{uTime:{value:0},uResolution:new t(new u(e.width,e.height)),uPictureTexture:new t(i)}});return c(()=>{r.uniforms.uTime.value+=.01,e.width=window.innerWidth,e.height=window.innerHeight,r.uniforms.uResolution.value.set(e.width,e.height)}),n.jsx(n.Fragment,{children:n.jsx("points",{material:r,children:n.jsx("planeGeometry",{args:[10,10,128,128]})})})}export{h as default};
//# sourceMappingURL=shader-CtWR2mAb.js.map
