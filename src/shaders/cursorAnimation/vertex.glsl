uniform  vec2 uResolution;
uniform sampler2D uPictureTexture;

varying vec3 vColor;

void main()
{


    
    //final position 
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
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