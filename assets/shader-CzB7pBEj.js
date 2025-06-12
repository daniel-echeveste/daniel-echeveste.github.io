import{r as b,c as F,T as E,j as x,q as R,n as A,o as I,s as j,m as V,S as L,A as B,U as c,V as G,B as H,d as M,t as O}from"./index-nD5F6TBz.js";var W=`uniform sampler2D uTexture;\r
uniform vec3 uColor ;\r
void main()\r
{\r
    float textureAlpha = texture(uTexture, gl_PointCoord).r;\r
    vec4 textureColor = texture(uTexture, gl_PointCoord);

    
    gl_FragColor = vec4(uColor, textureAlpha);\r
    
    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,q=`uniform float uSize;\r
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
}`;const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function X(e,n=0){return(r[e[n+0]]+r[e[n+1]]+r[e[n+2]]+r[e[n+3]]+"-"+r[e[n+4]]+r[e[n+5]]+"-"+r[e[n+6]]+r[e[n+7]]+"-"+r[e[n+8]]+r[e[n+9]]+"-"+r[e[n+10]]+r[e[n+11]]+r[e[n+12]]+r[e[n+13]]+r[e[n+14]]+r[e[n+15]]).toLowerCase()}let v;const Y=new Uint8Array(16);function Z(){if(!v){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");v=crypto.getRandomValues.bind(crypto)}return v(Y)}const J=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:J};function K(e,n,p){if(T.randomUUID&&!n&&!e)return T.randomUUID();e=e||{};const t=e.random??e.rng?.()??Z();if(t.length<16)throw new Error("Random bytes length must be >= 16");return t[6]=t[6]&15|64,t[8]=t[8]&63|128,X(t)}function Q(){let e=1;const[n,p]=b.useState([]);F();const t=new E;b.useEffect(()=>{const o=()=>{p([]);for(let a=0;a<e;a++)_();e*=2,e==40&&(e=0)};return window.addEventListener("click",o),()=>{window.removeEventListener("click",o)}},[]);const z=[t.load("./textures/particles/1.png"),t.load("./textures/particles/2.png"),t.load("./textures/particles/3.png"),t.load("./textures/particles/4.png"),t.load("./textures/particles/5.png"),t.load("./textures/particles/6.png"),t.load("./textures/particles/7.png"),t.load("./textures/particles/8.png")],U=(o,a,f,P,h,m)=>{const g=new Float32Array(o*3),y=new Float32Array(o),S=new Float32Array(o);for(let i=0;i<o;i++){const u=i*3,d=new V(h*(.75+Math.random()*.25),Math.random()*Math.PI,Math.random()*Math.PI*2),l=new A;l.setFromSpherical(d),g[u]=l.x,g[u+1]=l.y,g[u+2]=l.z,y[i]=Math.random(),S[i]=1+Math.random()}const k=new L({vertexShader:q,fragmentShader:W,transparent:!0,depthFunc:!1,blending:B,uniforms:{uSize:new c(f),uResolution:new c(new G(window.innerWidth,window.innerHeight)),uTexture:new c(P),uColor:new c(m),uProgress:new c(0)}}),w=new H;w.setAttribute("position",new M(g,3)),w.setAttribute("aSize",new M(y,1)),w.setAttribute("aTimeMultiplayer",new M(S,1));const C=K();p(i=>[...i,{position:a,positions:g,sizesArray:y,material:k,geometry:w,id:C}]),O.to(k.uniforms.uProgress,{value:1,duration:3,ease:"linear",onComplete:()=>D(C)});const D=i=>{p(u=>{const d=u.find(l=>l.id===i);return d&&(d.material.dispose(),d.geometry.dispose()),u.filter(l=>l.id!==i)})}},_=()=>{console.log(n);const o=Math.round(400+Math.random()*3e3),a=new A((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),f=.1+Math.random()*.1,P=z[Math.floor(Math.random()*z.length)],h=.5+Math.random(),m=new I;m.setHSL(Math.random(),1,.7),U(o,a,f,P,h,m)},s={PositionX:0,PositionY:.5,PositionZ:0,Azimuth:0,Elevation:-2.2,Distance:45e4,Inclination:.5,mieCoefficient:.005,mieDirectionalG:.95,rayleigh:3,turbidity:10,Exposure:j};return x.jsxs(x.Fragment,{children:[x.jsx(R,{inclination:s.Inclination,azimuth:s.Azimuth,distance:s.Distance,mieCoefficient:s.mieCoefficient,mieDirectionalG:s.mieDirectionalG,rayleigh:s.rayleigh,turbidity:s.turbidity,exposure:s.Exposure}),n.map((o,a)=>x.jsx("points",{material:o.material,geometry:o.geometry,position:o.position},a))]})}export{Q as default};
//# sourceMappingURL=shader-CzB7pBEj.js.map
