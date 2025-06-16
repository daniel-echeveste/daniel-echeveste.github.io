import{u as a,j as e,P as m,T as u,f as s,S as v,g as c,U as i,e as f,E as x,r as d,h as p}from"./index-C4tMggO7.js";function g(n){const r=a("models/coffeeMug/bakedModel.glb");return console.log(n),e.jsx("primitive",{object:r.scene,castShadow:!0,...n})}a.preload("models/LeePerrySmith/LeePerrySmith.glb");var w=`varying vec2 vUv;\r
uniform sampler2D uPerlinTexture;\r
uniform float uTime;

vec2 rotate2D(vec2 value, float angle)\r
{\r
    float s = sin(angle);\r
    float c = cos(angle);\r
    mat2 m = mat2(c, s, -s, c);\r
    return m * value;\r
}\r
void main(){\r

    vec3 newPosition = position;

    
    float twistPerlin = texture(\r
        uPerlinTexture,\r
        vec2(0.5, uv.y * 0.5 -uTime * 0.01)\r
        ).r;\r
    float angle = twistPerlin * 10.0;\r
    newPosition.xz = rotate2D(newPosition.xz, angle);

    
    vec2 windOffset = vec2(\r
        texture(uPerlinTexture, vec2(0.25, uTime * 0.01)).r -0.5,\r
        texture(uPerlinTexture, vec2(0.75, uTime * 0.01)).r -0.5\r
    );\r
    windOffset *= 10.0 * pow( uv.y,2.0); \r
    newPosition.xz += windOffset;

    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0);

    
    vUv = uv; 

}`,T=`uniform sampler2D uPerlinTexture;\r
uniform float uTime;

varying vec2 vUv;\r
void main() {

    
    vec2 smokeUv = vUv;\r
    smokeUv.x *= 0.5;\r
    smokeUv.y *= 0.3;\r
    smokeUv -= uTime * 0.03;

     
    float smoke = texture(uPerlinTexture, smokeUv).r;

    
    smoke = smoothstep(0.4, 1.0, smoke);

    
    smoke *= smoothstep(0.0, 0.1, vUv.x);\r
    smoke *= smoothstep(1.0, 0.9, vUv.x);\r
    smoke *= smoothstep(0.0, 0.1, vUv.y);\r
    smoke *= smoothstep(1.0, 0.4, vUv.y);\r
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);\r
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>

}`;function y(){let n=0;const r=new m(1,1,16,64);r.scale(.75,3,.75);const t=new u().load("./textures/perlin.png");t.wrapS=s,t.wrapT=s;const o=new v({transparent:!0,depthWrite:!1,vertexShader:w,fragmentShader:T,wireframe:!1,side:c,uniforms:{uTime:new i(0),uPerlinTexture:new i(t)}});return f((l,P)=>{n=l.clock.elapsedTime,o.uniforms.uTime.value=n}),e.jsxs(e.Fragment,{children:[e.jsx("mesh",{geometry:r,material:o,position:[0,1.2,0]}),e.jsx("ambientLight",{intensity:.5}),e.jsx("directionalLight",{castShadow:!0,position:[4,2,-2.25],intensity:10}),e.jsx(x,{files:"textures/environmentMaps/wood-cabin.hdr",background:!0}),e.jsx(d.Suspense,{fallback:e.jsx(p,{"position-y":.5,scale:[2,3,2]}),children:e.jsx(g,{"position-z":0,"position-y":-1,scale:.5})})]})}export{y as default};
//# sourceMappingURL=shader-CKS-GZI8.js.map
