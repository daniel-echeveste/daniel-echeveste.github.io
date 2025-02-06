varying vec2 vUv;
uniform sampler2D uPerlinTexture;

vec2 rotate2D(vec2 value, float angle)
{
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}
void main(){


    vec3 newPosition = position;

    //Twist
    float angle = newPosition.y;
    newPosition.xz = rotate2D(newPosition.xz, angle);

    //final position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0);

    //VARYINGS 
    vUv = uv; 

}