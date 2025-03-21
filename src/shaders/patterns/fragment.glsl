#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

uniform int uPattern;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid) {
    return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}

//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec2 fade(vec2 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x, gy.x);
    vec2 g10 = vec2(gx.y, gy.y);
    vec2 g01 = vec2(gx.z, gy.z);
    vec2 g11 = vec2(gx.w, gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main() {
    float strength = 0.0;
    float barX;
    float barY;
    vec2 gridUv;
    vec2 wavedUv;
    float angle;
    switch(uPattern) {
        case 1:
            gl_FragColor = vec4(vUv, 1.0, 1.0); // red
            break;
        case 2:
            gl_FragColor = vec4(vUv, 0.0, 1.0); // green
            break;
        case 3:
            strength = vUv.x; // blue
            break;
        case 4:
            gl_FragColor = vec4(vUv, 1.0, 1.0); // red
            break;
        case 5:
            // Pattern 5
            strength = 1.0 - vUv.y;
            break;
        case 6:
          // Pattern 6
            strength = vUv.y * 10.0;
            break;
        case 7:
            // Pattern 7
            strength = mod(vUv.y * 10.0, 1.0);
            break;
        case 8:
             // Pattern 8
            strength = mod(vUv.y * 10.0, 1.0);
            strength = step(0.5, strength);
            break;
        case 9:
            // Pattern 9
            strength = mod(vUv.y * 10.0, 1.0);
            strength = step(0.8, strength);
            break;
        case 10:
            // Pattern 10
            strength = mod(vUv.x * 10.0, 1.0);
            strength = step(0.8, strength);
            break;
        case 11:
             // Pattern 11
            strength = step(0.8, mod(vUv.x * 10.0, 1.0));
            strength += step(0.8, mod(vUv.y * 10.0, 1.0));
            strength = clamp(strength, 0.0, 1.0);
            break;
        case 12:
            // Pattern 12
            strength = step(0.8, mod(vUv.x * 10.0, 1.0));
            strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
            break;
        case 13:
            // Pattern 13
            strength = step(0.4, mod(vUv.x * 10.0, 1.0));
            strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
            break;
        case 14:
            // Pattern 14
            barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
            barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
            strength = barX + barY;
            strength = clamp(strength, 0.0, 1.0);
            break;
        case 15:
             // Pattern 15
            barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
            barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
            strength = barX + barY;
            strength = clamp(strength, 0.0, 1.0);
            break;
        case 16:
            // Pattern 16
            strength = abs(vUv.x - 0.5);
            break;
        case 17:
            // Pattern 17
            strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
            break;
        case 18:
            // Pattern 18
            strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
            break;
        case 19:
            // Pattern 19
            strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
            break;
        case 20:
            // Pattern 20
            strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
            strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

            break;
        case 21:
            // Pattern 21
            strength = floor(vUv.x * 10.0) / 10.0;
            break;
        case 22:
             // Pattern 22
            strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;

            break;
        case 23:
        // Pattern 23
            strength = random(vUv);
            break;
        case 24:
             // Pattern 24
            gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
            strength = random(gridUv);

            break;
        case 25:
           // Pattern 25
            gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0);
            strength = random(gridUv);

            break;
        case 26:
           // Pattern 26
            strength = length(vUv);

            break;
        case 27:
            // Pattern 27
            strength = distance(vUv, vec2(0.5));

            break;
        case 28:
             // Pattern 28
            strength = 1.0 - distance(vUv, vec2(0.5));

            break;
        case 29:
          // Pattern 29
            strength = 0.015 / (distance(vUv, vec2(0.5)));

            break;
        case 30:
             // Pattern 30
            strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));

            break;
        case 31:
            // Pattern 31
            strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
            strength *= 0.15 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));

            break;
        case 32:
            // Pattern 32
            vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
            strength = 0.15 / (distance(vec2(rotatedUv.x, (rotatedUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
            strength *= 0.15 / (distance(vec2(rotatedUv.y, (rotatedUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));

            break;
        case 33:
           // Pattern 33
            strength = step(0.5, distance(vUv, vec2(0.5)) + 0.25);

            break;
        case 34:

    // Pattern 34
            strength = abs(distance(vUv, vec2(0.5)) - 0.25);

            break;
        case 35:
             // Pattern 35
            strength = step(0.01, abs(distance(vUv, vec2(0.5)) - 0.25));

            break;
        case 36:
           // Pattern 36
            strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - 0.25));

            break;
        case 37:
            // Pattern 37
            wavedUv = vec2(vUv.x, vUv.y + sin(vUv.x * 30.0) * 0.1);
            strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

            break;
        case 38:
            // Pattern 38
            wavedUv = vec2(vUv.x + sin(vUv.y * 30.0) * 0.1, vUv.y + sin(vUv.x * 30.0) * 0.1);
            strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

            break;
        case 39:
           // Pattern 39
            wavedUv = vec2(vUv.x + sin(vUv.y * 100.0) * 0.1, vUv.y + sin(vUv.x * 100.0) * 0.1);
            strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));

            break;
        case 40:
             // Pattern 40
            angle = atan(vUv.x, vUv.y);
            strength = angle;

            break;
        case 41:
             // Pattern 41
            angle = atan(vUv.x - 0.5, vUv.y - 0.5);
            strength = angle;

            break;
        case 42:
             // Pattern 42
            angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
            strength = angle;

            break;
        case 43:
         // Pattern 43
            angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
            strength = mod(angle * 20.0, 1.0);

            break;
        case 44:
             // Pattern 44
            angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
            strength = sin(angle * 100.0);

            break;
        case 45:
            // Pattern 45
            angle = atan(vUv.x - 0.5, vUv.y - 0.5) / (PI * 2.0) + 0.5;
            float radius = 0.25 + sin(angle * 100.0) * 0.02;
            strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - radius));

            break;
        case 46:

    // Pattern 46
            strength = cnoise(vUv * 10.0);

            break;
        case 47:
            // Pattern 47
            strength = step(0.0, cnoise(vUv * 10.0));

            break;
        case 48:
           // Pattern 48
            strength = 1.0 - abs(cnoise(vUv * 10.0));

            break;
        case 49:
         // Pattern 49
            strength = sin(cnoise(vUv * 10.0) * 20.0);

            break;
        case 50:
            // Pattern 50
            strength = step(0.9, sin(cnoise(vUv * 10.0) * 20.0));
            break;

        default:
            strength = vUv.y;// white
            break;
    }

    // Final color
    vec3 blackColor = vec3(0.0);
    vec3 uvColor = vec3(vUv, 1.0);
    vec3 mixedColor = mix(blackColor, uvColor, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);
    gl_FragColor = vec4(mixedColor, 1.0);
}