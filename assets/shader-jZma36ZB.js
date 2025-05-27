import{r as b,f as F,T as E,j as x,g as R,V as A,C as I,h as j,e as V,S as L,A as G,U as m,i as B,k as H,l as v,m as O}from"./index-zC06OG6x.js";var W=`uniform sampler2D uTexture;\r
uniform vec3 uColor ;\r
void main()\r
{\r
    float textureAlpha = texture(uTexture, gl_PointCoord).r;\r
    vec4 textureColor = texture(uTexture, gl_PointCoord);

    
    gl_FragColor = vec4(uColor, textureAlpha);\r
    
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,X=`uniform float uSize;\r
uniform vec2 uResolution;\r
uniform float uProgress;

attribute float aSize;\r
attribute float aTimeMultiplayer;\r
float remap(float value, float originMin, float originMax, float destinationMin, float destinationMax)\r
{\r
    return destinationMin + (value - originMin) * (destinationMax - destinationMin) / (originMax - originMin);\r
}

void main(){\r
    float progress = uProgress * aTimeMultiplayer;\r
    vec3 newPosition = position;\r
    \r
    
    float explodingProgress = remap(progress, 0.0, 1.0, 0.0, 1.5);\r
    explodingProgress = clamp(explodingProgress, 0.0, 1.0);\r
    explodingProgress = 1.0 - pow(1.0 - explodingProgress, 3.0);\r
    newPosition *= explodingProgress;

    
    float fallingProgress = remap(progress, 0.1, 1.0, 0.0, 1.0);\r
    fallingProgress = clamp(fallingProgress, 0.0, 1.0);\r
    fallingProgress = 1.0 - pow(1.0 - fallingProgress, 3.0);\r
    newPosition.y -= fallingProgress * 0.3;

    
    float sizeOpeningProgress = remap(progress, 0.0, 0.125,0.0,1.0);\r
    float sizeClosingProgress = remap(progress,0.125, 1.125,1.0, 0.0);         \r
    float sizeProgress = min(sizeOpeningProgress, sizeClosingProgress);

    
    float twinklingProgress = remap(progress, 0.0, 0.125,0.0,1.0);\r
    twinklingProgress= clamp(twinklingProgress, 0.0, 1.0);\r
    float sizeTwinkling = sin(progress * 30.0) * 0.5 + 0.5; \r
    sizeTwinkling = 1.0 - sizeTwinkling * twinklingProgress;

    
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0) ;\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    gl_Position = projectionMatrix * viewPosition;

    
    gl_PointSize = uSize * uResolution.y * aSize * sizeProgress * sizeTwinkling;\r
    gl_PointSize *= 1.0 / -viewPosition.z; 
    \r
    if(gl_PointSize<1.0)\r
        gl_Position= vec4(9999.9);\r
}`;const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function Y(e,n=0){return(r[e[n+0]]+r[e[n+1]]+r[e[n+2]]+r[e[n+3]]+"-"+r[e[n+4]]+r[e[n+5]]+"-"+r[e[n+6]]+r[e[n+7]]+"-"+r[e[n+8]]+r[e[n+9]]+"-"+r[e[n+10]]+r[e[n+11]]+r[e[n+12]]+r[e[n+13]]+r[e[n+14]]+r[e[n+15]]).toLowerCase()}let z;const Z=new Uint8Array(16);function q(){if(!z){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");z=crypto.getRandomValues.bind(crypto)}return z(Z)}const J=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:J};function K(e,n,p){var g;if(T.randomUUID&&!n&&!e)return T.randomUUID();e=e||{};const t=e.random??((g=e.rng)==null?void 0:g.call(e))??q();if(t.length<16)throw new Error("Random bytes length must be >= 16");return t[6]=t[6]&15|64,t[8]=t[8]&63|128,Y(t)}function Q(){let e=1;const[n,p]=b.useState([]);F();const t=new E;b.useEffect(()=>{const i=()=>{p([]);for(let a=0;a<e;a++)_();e*=2,e==40&&(e=0)};return window.addEventListener("click",i),()=>{window.removeEventListener("click",i)}},[]);const g=[t.load("./textures/particles/1.png"),t.load("./textures/particles/2.png"),t.load("./textures/particles/3.png"),t.load("./textures/particles/4.png"),t.load("./textures/particles/5.png"),t.load("./textures/particles/6.png"),t.load("./textures/particles/7.png"),t.load("./textures/particles/8.png")],U=(i,a,h,P,y,w)=>{const d=new Float32Array(i*3),M=new Float32Array(i),S=new Float32Array(i);for(let o=0;o<i;o++){const u=o*3,c=new V(y*(.75+Math.random()*.25),Math.random()*Math.PI,Math.random()*Math.PI*2),l=new A;l.setFromSpherical(c),d[u]=l.x,d[u+1]=l.y,d[u+2]=l.z,M[o]=Math.random(),S[o]=1+Math.random()}const k=new L({vertexShader:X,fragmentShader:W,transparent:!0,depthFunc:!1,blending:G,uniforms:{uSize:new m(h),uResolution:new m(new B(window.innerWidth,window.innerHeight)),uTexture:new m(P),uColor:new m(w),uProgress:new m(0)}}),f=new H;f.setAttribute("position",new v(d,3)),f.setAttribute("aSize",new v(M,1)),f.setAttribute("aTimeMultiplayer",new v(S,1));const C=K();p(o=>[...o,{position:a,positions:d,sizesArray:M,material:k,geometry:f,id:C}]),O.to(k.uniforms.uProgress,{value:1,duration:3,ease:"linear",onComplete:()=>D(C)});const D=o=>{p(u=>{const c=u.find(l=>l.id===o);return c&&(c.material.dispose(),c.geometry.dispose()),u.filter(l=>l.id!==o)})}},_=()=>{console.log(n);const i=Math.round(400+Math.random()*3e3),a=new A((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),h=.1+Math.random()*.1,P=g[Math.floor(Math.random()*g.length)],y=.5+Math.random(),w=new I;w.setHSL(Math.random(),1,.7),U(i,a,h,P,y,w)},s={PositionX:0,PositionY:.5,PositionZ:0,Azimuth:0,Elevation:-2.2,Distance:45e4,Inclination:.5,mieCoefficient:.005,mieDirectionalG:.95,rayleigh:3,turbidity:10,Exposure:j};return x.jsxs(x.Fragment,{children:[x.jsx(R,{inclination:s.Inclination,azimuth:s.Azimuth,distance:s.Distance,mieCoefficient:s.mieCoefficient,mieDirectionalG:s.mieDirectionalG,rayleigh:s.rayleigh,turbidity:s.turbidity,exposure:s.Exposure}),n.map((i,a)=>x.jsx("points",{material:i.material,geometry:i.geometry,position:i.position},a))]})}export{Q as default};
//# sourceMappingURL=shader-jZma36ZB.js.map
