uniform  vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;

varying vec3 vColor;

attribute float aIntensity;
attribute float aAngle;

void main()
{
    //displacement
    vec3 newPosition = position;
    float displacementIntensity = texture(uDisplacementTexture, uv).r;
    displacementIntensity  = smoothstep(0.1,0.3 ,displacementIntensity);
    
    vec3 displacement = vec3(cos(aAngle) * 0.2,sin(aAngle) * 0.2,1.0);
    displacement = normalize(displacement);
    displacement *= 3.0;
    displacement *= displacementIntensity;
    displacement *= aIntensity;
    newPosition += displacement;
    
    //final position 
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    //picture
    float pictureIntensity = texture(uPictureTexture, uv).r;

    



    //point size 
    gl_PointSize = 0.1 * pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / -viewPosition.z);



    //color
    vColor = vec3(pow(pictureIntensity, 2.0));
}