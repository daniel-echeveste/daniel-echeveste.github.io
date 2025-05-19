import{c as S,r as c,k as b,a as y,B as A,C as h,h as u,S as T,D as z,A as j,j as a,V as _}from"./index-BBphsDQ8.js";var F=`uniform float uSize;\r
uniform float uTime;\r
uniform float uSpeed;

attribute float aScale;\r
attribute vec3 aRandomness;

varying vec3 vColor;

void main() {

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    float angle = atan(modelPosition.x, modelPosition.z);\r
    float distanceToCenter = length(modelPosition.xz);\r
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2 * uSpeed;\r
    angle += angleOffset;

    modelPosition.x = cos(angle) * distanceToCenter;\r
    modelPosition.z = sin(angle) * distanceToCenter;

    

    modelPosition.xyz += aRandomness;\r
    

    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    gl_Position = projectedPosition;

    
    gl_PointSize = uSize * aScale;\r
    gl_PointSize *= (1.0 / -viewPosition.z);

    vColor = color;\r
    
    
}`,R=`uniform vec3 uDepthColor;\r
uniform vec3 uSurfaceColor;\r
uniform float uColorOffset;\r
uniform float uColorMultiplier;\r
uniform sampler2D uTexture;

varying vec2 vUv;\r
varying float vElevation;\r
varying vec3 vColor; 

void main() {\r
    \r
    
    
    
    

    
    
    
    

    
    float strength = distance(gl_PointCoord, vec2(0.5));\r
    strength = 1.0-strength;\r
    strength = pow(strength,8.5);

    
    vec3 color = mix(vec3(0.0), vColor, strength);\r
    gl_FragColor = vec4(vec3(color), 1.0);\r
    #include <colorspace_fragment>\r
}`;function D(){S();const[d]=c.useState(()=>performance.now()/1e3),x=c.useRef(),e=b({uSize:{value:.2,min:0,max:50,step:1},count:{value:9e5,min:0,max:18e5,step:100},radius:{value:5,min:-100,max:100,step:.15},branches:{value:4,min:-10,max:10,step:1},randomness:{value:.5,min:-10,max:10,step:.5},randomnessPower:{value:3,min:-10,max:10,step:.5},insideColor:"#ff6030",outsideColor:"#1b3984",rotateX:{value:0,min:-2,max:2,step:.01},rotateY:{value:0,min:-2,max:2,step:.01},rotateZ:{value:0,min:-2,max:2,step:.01},speed:{value:1,min:-5,max:10,step:.01}});y((o,n)=>{f.uniforms.uTime.value=o.clock.elapsedTime-d,console.log(d)}),c.useState(()=>{},[]);let t=null;t=new A;const s=new Float32Array(e.count*3),i=new Float32Array(e.count*3),v=new Float32Array(e.count*1),l=new Float32Array(e.count*3),g=new h(e.insideColor),w=new h(e.outsideColor);for(let o=0;o<e.count;o++){const n=o*3,r=Math.random()*e.radius,p=o%e.branches/e.branches*Math.PI*2;s[n]=Math.cos(p)*r,s[n+1]=0,s[n+2]=Math.sin(p)*r;const C=Math.pow(Math.random(),e.randomnessPower)*(Math.random()<.5?1:-1)*e.randomness*r,P=Math.pow(Math.random(),e.randomnessPower)*(Math.random()<.5?1:-1)*e.randomness*r,M=Math.pow(Math.random(),e.randomnessPower)*(Math.random()<.5?1:-1)*e.randomness*r;l[n+0]=C,l[n+1]=P,l[n+2]=M;const m=g.clone();m.lerp(w,r/e.radius),i[n]=m.r,i[n+1]=m.g,i[n+2]=m.b,v[o]=Math.random()}t.setAttribute("position",new u(s,3)),t.setAttribute("color",new u(i,3)),t.setAttribute("aScale",new u(v,1)),t.setAttribute("aRandomness",new u(l,3));const f=new T({vertexShader:F,fragmentShader:R,depthWrite:!1,side:z,blending:j,vertexColors:!0,uniforms:{uTime:{value:0},uSize:{value:15},uSpeed:{value:e.speed*2}}});return a.jsxs(a.Fragment,{children:[a.jsxs("mesh",{children:[a.jsx("boxGeometry",{}),a.jsx("meshBasicMaterial",{})]}),a.jsx("points",{geometry:t,material:f,useRef:x,scale:new _(2,2,2),position:[0,0,0],rotation:[e.rotateX,e.rotateY,e.rotateZ]})]})}export{D as default};
//# sourceMappingURL=shader-DEQJISey.js.map
