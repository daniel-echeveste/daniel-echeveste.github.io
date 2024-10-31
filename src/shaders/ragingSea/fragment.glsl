uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;

void main() {
    
    // vec4 textureColor = texture2D(uTexture, vUv);
    // textureColor.rgb *= vElevation * 2.0 + 0.8;
    // gl_FragColor = textureColor;
    float mixStrentgh = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor,uSurfaceColor,mixStrentgh );
    gl_FragColor = vec4(color, 1.0);
}