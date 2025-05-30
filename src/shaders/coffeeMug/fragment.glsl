uniform sampler2D uPerlinTexture;
uniform float uTime;

varying vec2 vUv;
void main() {

    //scale and animate     
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv -= uTime * 0.03;

     //smoke
    float smoke = texture(uPerlinTexture, smokeUv).r;

    //remap smoke 
    smoke = smoothstep(0.4, 1.0, smoke);

    //edges
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);
    //Final Color 
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>

}