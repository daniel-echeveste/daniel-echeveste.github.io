uniform vec2 uResolution;
uniform float uSize;
uniform float uProgress;
uniform vec3 uColorA;
uniform vec3 uColorB;

attribute vec3 aPositionTarget;
attribute float aSize;

varying vec3 vColor;
#include ../includes/simplexNoise.glsl
void main ()
{
    //mixed position
    float noiseOrigin = simplexNoise3d(position * 0.2);
    float noisTarget = simplexNoise3d(aPositionTarget * 0.2);
    float noise = mix(noiseOrigin, noisTarget, uProgress);
    noise = smoothstep(-1.0, 1.0 ,noise);
    float duration = 0.4;
    float delay = (1.0 - duration) * noise;
    float end = delay + duration;
    float progress = smoothstep(delay, end, uProgress);
    vec3 mixedPosition = mix(position, aPositionTarget, progress);

    //final position
    vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    // point size
    gl_PointSize = uSize * uResolution.y * aSize;
    gl_PointSize *= (1.0 / -viewPosition.z);

    //VARYINGS
    vColor = mix(uColorA, uColorB, noise);
}